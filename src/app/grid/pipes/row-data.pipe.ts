import { Pipe, PipeTransform } from '@angular/core';
import { RowDataI } from '../interfaces/row-data';
import { DatePipe } from '@angular/common';
import { GridDataVideoItemI } from '../interfaces/grid-data-video-item';

@Pipe({
  name: 'rowData'
})
export class RowDataPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {
  }

  transform(youtubeVideoList: GridDataVideoItemI[]): RowDataI[] {
    return youtubeVideoList.map(videoItem => {
      return {
        thumbnails: videoItem.snippet.thumbnails.default,
        publishedAt: this.datePipe.transform(videoItem.snippet.publishedAt, 'short'),
        title: {
          videoId: videoItem.id.videoId,
          title: videoItem.snippet.title
        },
        description: videoItem.snippet.description
      };
    });
  }

}
