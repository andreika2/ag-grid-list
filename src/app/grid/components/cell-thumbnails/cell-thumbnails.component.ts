import { Component, OnInit } from '@angular/core';
import {YoutoubeVideoThumbnailsDataI} from '../../interfaces/youtoube-video';

@Component({
  selector: 'app-cell-thumbnails',
  templateUrl: './cell-thumbnails.component.html',
  styleUrls: ['./cell-thumbnails.component.scss']
})
export class CellThumbnailsComponent implements OnInit {
  public cellThumbnailsData: YoutoubeVideoThumbnailsDataI;
  constructor() { }

  agInit(params): void {
    this.cellThumbnailsData = params.value;
  }

  ngOnInit(): void {
  }

}
