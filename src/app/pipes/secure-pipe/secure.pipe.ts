import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'secure' })
export class SecurePipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }

  transform( url:string ) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

} 