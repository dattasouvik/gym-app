import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpParams } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { catchError, map, tap } from 'rxjs/operators';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { throwError } from 'rxjs';
import { UserProfileStore } from 'src/app/modules/user-profile/services/user-profile.store';
@Component({
  selector: 'app-edit-profile-picture',
  templateUrl: './edit-profile-picture.component.html',
  styleUrls: ['./edit-profile-picture.component.scss']
})
export class EditProfilePictureComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditProfilePictureComponent>,
    private messages: MessagesService, 
    private httpService: HttpService, 
    private userProfileStore: UserProfileStore) { 
    
  }

  ngOnInit(): void {
  }
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  image_base64:any ;
  imageError: string;
  enableSubmit = true;
  fileProgress(fileInput: any) {
      if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 3145728;
        const allowed_types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + (max_size / 1024)/1024 + 'Mb';
            return false;
        }

        //if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        if (!allowed_types.includes(fileInput.target.files[0].type)) {
          this.imageError = 'Only Images are allowed ( JPG | PNG | JPEG | GIF )';
          return false;
        }
      } 
      this.imageError = "";
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
  }
 
  preview() {
      // Show preview 
      var mimeType = this.fileData.type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }
  
      var reader = new FileReader();      
      reader.readAsDataURL(this.fileData); 
      reader.onload = (_event) => { 
        this.previewUrl = reader.result;
        this.enableSubmit = false;
      }
  }
 
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload =  (e: Event) => {
      this.dialogRef.close();
      this.saveImage(e);
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  saveImage(e) {
    var imagedata = {
      "image" : {
        "filename" : this.fileData.name,
        "value": e.target.result
      }
    };
    
    this.userProfileStore.uploadImage(imagedata).subscribe(
      () => {
        this.userProfileStore.loadUserProfile();
      } 
    );
    
  }
  close() {
    this.dialogRef.close();
  }
}
