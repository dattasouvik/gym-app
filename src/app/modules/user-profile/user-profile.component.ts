import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';
import { EditProfileComponent } from 'src/app/modules/user-profile/edit-profile/edit-profile.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private httpService: HttpService,
    private dialog: MatDialog,
    private loadingService: LoadingService,
    private messagesService: MessagesService
  ) { }

  ngOnInit(): void {
    const profile$ = this.httpService.get(`assets/data/profile.json`);
    const loadProfile$ = this.loadingService.showLoaderUntilCompleted(profile$);
    loadProfile$.subscribe(d => console.log(d), err => {
      this.messagesService.showErrors("Hi Error ocuured here");
    })
    // this.httpService.get(`user-data?_format=json`).subscribe(d => console.log(d))
  }

  editProfile(){
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    //tbd
    dialogConfig.data = {firstName: 'abc',lastName: 'abc', address: 'abc' };
    const dialogRef = this.dialog.open(EditProfileComponent, dialogConfig);

  }
}
