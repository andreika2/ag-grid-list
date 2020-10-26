import {YoutoubeVideoThumbnailsDataI} from './youtoube-video';

export interface RowDataI {
  description: string;
  publishedAt: string;
  thumbnails: YoutoubeVideoThumbnailsDataI;
  title: RowDataTitleI;
}

export interface RowDataTitleI {
  videoId: string;
  title: string;
}
