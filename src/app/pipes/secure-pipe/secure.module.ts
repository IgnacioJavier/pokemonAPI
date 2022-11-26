import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurePipe } from '@pipes/secure-pipe/secure.pipe';


@NgModule({
  declarations: [
    SecurePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecurePipe
  ]
})
export class SecurePipeModule { }
