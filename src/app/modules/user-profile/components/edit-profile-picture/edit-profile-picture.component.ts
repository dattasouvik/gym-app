import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageKey, PictureErrorMessage } from 'src/app/modules/user-profile/components/edit-profile-picture/profile-picture.config';
import { UserProfileStore } from
'src/app/modules/user-profile/services/user-profile.store';
import { checkFileSize, checkFileTypes, checkExtension, checkMimeType }
from 'src/app/modules/user-profile/utils/file.validatons';


interface Image{
  image: {[key:string]: string | ArrayBuffer}
}

interface Status{
  success: boolean;
  errorkey: string;
}


@Component({
  selector: 'app-edit-profile-picture',
  templateUrl: './edit-profile-picture.component.html',
  styleUrls: ['./edit-profile-picture.component.scss']
})
export class EditProfilePictureComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EditProfilePictureComponent>,
    private userProfileStore: UserProfileStore
    ) {}

    @ViewChild('fileUpload') InputFile: ElementRef;

  ngOnInit(): void {
  }
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  image_base64:any ;
  imageErrorMsg: string = null;

  error:boolean = false;
  private imageData: Image | null;
  fileProgress(fileInput: any) {
    this.error = false;
    const  file = <File>fileInput.files[0];
    if(!file){
      this.error = true;
      return;
    } else{
      const status = this.validateFile(file);
      if(status.success){
        this.renderFile(file);
      }else{
        this.error = true;
        this.imageErrorMsg = PictureErrorMessage[status.errorkey]
      }
    }
    if(this.error){
      this.reset();
    }
  }

  onSubmit() {
    if(!this.imageData || this.error){
      this.imageErrorMsg = PictureErrorMessage[MessageKey.required];
      return;
    }
    else{
      this.close();
      this.userProfileStore.uploadImage(this.imageData).subscribe(
        (success) => {
          this.userProfileStore.loadUserProfile();
        }
      );
    }
  }

 close():void {
    this.dialogRef.close();
  }

  private reset():void{
    this.InputFile.nativeElement.value = "";
    this.previewUrl = null;
  }

  private renderFile(fileData: File){
    const reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = _event => {
      this.previewUrl = reader.result;
      this.imageData = {
        "image" : {
          "filename" : fileData.name,
          "value": _event.target.result
        }
      };
      this.error = false;
    };
    reader.onerror = error => {
      this.error = true;
      console.log('Error: ', error);
    };
  }

  private validateFile(file): Status {
    let status = {
      success: false,
      errorkey: ''
    };
    const {size , type, name } = file;
    const fileSizeError = checkFileSize(size);
    const fileTypesError = checkFileTypes(type);
    const fileExtensioError = checkExtension(name);
    const fileMimeTypeError = checkMimeType(type);

    if(
      fileExtensioError?.invalidFile ||
      fileMimeTypeError?.invalidFile ||
      fileTypesError?.invalidFile
      ) {
        status.errorkey = MessageKey.invalidFile;
        return status;
    }
    else if( fileSizeError?.invalidFileSize ) {
        status.errorkey = MessageKey.invalidFileSize;
        return status;
    }
    else{
      status.success = true;
      status.errorkey = '';
    }
    return status;
  }
}
