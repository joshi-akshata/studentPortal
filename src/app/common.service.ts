
import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

 aClickedEvent =  new EventEmitter();
 subsVar!: Subscription;

AClicked() {
  this.aClickedEvent.emit();
}
}
