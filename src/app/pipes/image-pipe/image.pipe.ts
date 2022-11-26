import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '@constants/constants';
import { PictureDto } from '@models/pictureDto.interface';
import { MediaType } from "@models/media-type.interface";

@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {

  transform(picture: PictureDto): string {
    if(picture.media_type === MediaType.Image){
      return picture?.url || Constants.NO_IMAGE;
    }else if(picture.media_type === MediaType.Video){
      return picture?.thumbnail_url || Constants.NO_IMAGE; 
    }else{
      return Constants.NO_IMAGE;
    }
  }

}
