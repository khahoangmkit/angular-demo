import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(message: any) {
    console.log(message);
  }
  constructor(@Inject('MESS-LOG') private message: string) {
    this.log(message);
  }
}
