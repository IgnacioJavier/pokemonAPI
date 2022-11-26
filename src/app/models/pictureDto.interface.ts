import { MediaType } from "@models/media-type.interface";

export interface PictureDto {

    date:            string;
    title:           string;
    url:             string;
    hdurl?:          string; 
    thumbnail_url?:  string;
    media_type:      MediaType;
    explanation:     string;
    service_version: string;
    copyright?:      string;
    
}