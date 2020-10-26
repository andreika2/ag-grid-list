import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { GridDataVideoItemThumbnailsDataI } from '../../interfaces/grid-data-video-item';

@Component({
  selector: 'app-cell-thumbnails',
  templateUrl: './cell-thumbnails.component.html',
  styleUrls: ['./cell-thumbnails.component.scss']
})
export class CellThumbnailsComponent implements ICellRendererAngularComp {

  public cellThumbnailsData: GridDataVideoItemThumbnailsDataI;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.cellThumbnailsData = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    return true;
  }

}
