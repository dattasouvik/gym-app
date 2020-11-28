import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Message, MessageType } from 'src/app/modules/shared/model/message.model';
import { MessagesService } from 'src/app/modules/shared/services/messages.service';

@Component({
	selector: 'messages',
	templateUrl: './messages.component.html',
	styleUrls: [ './messages.component.scss' ]
})
export class MessagesComponent implements OnInit {
	showMessages = false;

	messages$: Observable<Message>;

	constructor(public messagesService: MessagesService) {}

	ngOnInit() {
		this.messages$ = this.messagesService.notify$.pipe(
      tap(() => (this.showMessages = true)));
	}

	onClose() {
		this.showMessages = false;
  }
  
  setMessageColor(value: MessageType):string{
    let color = 'NONE';
    switch(value){
      case MessageType.ERROR:
        color = 'ERROR';
      break;
      case MessageType.SUCCESS:
        color = 'SUCCESS';
      break;
      default:
        break;
    }
    return color.toLowerCase();
  }
}
