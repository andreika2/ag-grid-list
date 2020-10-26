import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule, DatePipe} from '@angular/common';
import {RowDataPipe} from './pipes/row-data.pipe';
import {CellThumbnailsComponent} from './components/cell-thumbnails/cell-thumbnails.component';
import {CellVideoTitleComponent} from './components/cell-video-title/cell-video-title.component';
import {AgGridService} from './services/ag-grid/ag-grid.service';
import {ToolpanelComponent} from './components/toolpanel/toolpanel.component';



@NgModule({
  declarations: [ RowDataPipe, CellThumbnailsComponent, CellVideoTitleComponent, ToolpanelComponent],
  imports: [
    CommonModule
  ],
  providers: [AgGridService, RowDataPipe, AsyncPipe, DatePipe]
})
export class GridModule { }
