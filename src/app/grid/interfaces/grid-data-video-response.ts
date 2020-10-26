import { GridDataPageInfoI } from './grid-data-page-info';
import { GridDataVideoItemI } from './grid-data-video-item';

export interface GridDataVideoResponseI {
  etag: string;
  items: GridDataVideoItemI[];
  kind: string;
  nextPageToken: string;
  pageInfo: GridDataPageInfoI;
  regionCode: string;
}
