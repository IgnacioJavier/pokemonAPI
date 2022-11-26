import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImagePipeModule } from '@pipes/image-pipe/image.module';
import { TruncateTextPipeModule } from '@pipes/truncate-text-pipe/truncate-text.module';
import { CardListComponent } from '@components/card-list/card-list.component';


@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    ImagePipeModule,
    TruncateTextPipeModule
  ],
  exports: [
    CardListComponent
  ]
})
export class CardListModule { }
