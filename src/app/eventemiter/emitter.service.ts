import {Injectable, EventEmitter, Output} from '@angular/core';

@Injectable()
/*class that provide emit service*/
export class EmitterService {

private static emitters: {[ID: string]: EventEmitter<any>} = {}; // local variable
constructor() {
}
/*the function emit with given id */
/*emit has identified with id to different */
static get (ID: string): EventEmitter <any> {
  if ( !this.emitters[ID]) {
    this.emitters[ID] = new EventEmitter();
  }
return this.emitters[ID];

}
}
