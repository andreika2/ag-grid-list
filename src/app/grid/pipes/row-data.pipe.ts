import { Pipe, PipeTransform } from '@angular/core';
import {YoutoubeVideoI} from '../interfaces/youtoube-video';
import {RowDataI} from '../interfaces/row-data';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'rowData'
})
export class RowDataPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }

  transform(youtubeVideoList: YoutoubeVideoI[]): RowDataI[] {
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
