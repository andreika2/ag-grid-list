import { Component, OnInit } from '@angular/core';
import {RowDataTitleI} from '../../interfaces/row-data';

@Component({
  selector: 'app-cell-video-title',
  templateUrl: './cell-video-title.component.html',
  styleUrls: ['./cell-video-title.component.scss']
})
export class CellVideoTitleComponent implements OnInit {
  public cellVideoTitle: RowDataTitleI;
  constructor() { }

  agInit(params): void {
    this.cellVideoTitle = params.value;
  }
  ngOnInit(): void {
  }
  public getCellUrl(): string {
    return `https://www.youtube.com/watch?v=${this.cellVideoTitle.videoId}`;
  }

}
