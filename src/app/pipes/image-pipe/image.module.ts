import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagePipe } from '@pipes/image-pipe/image.pipe';


@NgModule({
  declarations: [ 
    ImagePipe 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePipe
  ]
})
export class ImagePipeModule { }
