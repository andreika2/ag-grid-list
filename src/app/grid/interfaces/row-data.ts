import { GridDataVideoItemThumbnailsDataI } from './grid-data-video-item';

export interface RowDataI {
  description: string;
  publishedAt: string;
  thumbnails: GridDataVideoItemThumbnailsDataI;
  title: RowDataTitleI;
}

export interface RowDataTitleI {
  videoId: string;
  title: string;
}
