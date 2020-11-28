export interface Message{
  body: string[];
  type: MessageType
}

export enum MessageType{
  ERROR,
  SUCCESS
}