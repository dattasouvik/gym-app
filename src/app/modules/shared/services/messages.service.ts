import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Message, MessageType } from 'src/app/modules/shared/model/message.model';

@Injectable()
export class MessagesService {

  constructor() {}
  private subject = new BehaviorSubject<Message>(null);

  public readonly notify$: Observable<Message> = this.subject.asObservable()
    .pipe(
      filter(messages => messages?.body && messages.body.length > 0)
    );

  showErrors(...errors: string[]) {
    this.subject.next({
      body:errors,
      type: MessageType.ERROR
    });
  }

  showOnSuccess(...messages: string[]) {
    this.subject.next({
      body:messages,
      type: MessageType.SUCCESS
    });
  }
}
