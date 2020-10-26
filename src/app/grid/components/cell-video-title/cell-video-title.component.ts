import { Component } from '@angular/core';
import { RowDataTitleI } from '../../interfaces/row-data';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AgGridOptionsService } from '../../services/ag-grid/ag-grid-options.service';

@Component({
  selector: 'app-cell-video-title',
  templateUrl: './cell-video-title.component.html',
  styleUrls: ['./cell-video-title.component.scss']
})
export class CellVideoTitleComponent implements ICellRendererAngularComp {

  public cellVideoTitle: RowDataTitleI;

  constructor(private agGridOptionsService: AgGridOptionsService) { }

  agInit(params: ICellRendererParams): void {
    this.cellVideoTitle = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  public getCellUrl(): string {
    return this.agGridOptionsService.getCellVideoTitleUrl(this.cellVideoTitle.videoId);
  }

}
