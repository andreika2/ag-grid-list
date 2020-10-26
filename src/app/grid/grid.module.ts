import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { RowDataPipe } from './pipes/row-data.pipe';
import { CellThumbnailsComponent } from './components/cell-thumbnails/cell-thumbnails.component';
import { CellVideoTitleComponent } from './components/cell-video-title/cell-video-title.component';
import { AgGridOptionsService } from './services/ag-grid/ag-grid-options.service';
import { ToolPanelComponent } from './components/toolpanel/toolpanel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { AgGridDataService } from './services/ag-grid/ag-grid-data.service';
import { AgGridListComponent } from './components/ag-grid-list/ag-grid-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RowDataPipe,
    CellThumbnailsComponent,
    CellVideoTitleComponent,
    ToolPanelComponent,
    HeaderComponentComponent,
    AgGridListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([CellThumbnailsComponent, CellVideoTitleComponent, HeaderComponentComponent])
  ],
  providers: [AgGridOptionsService, AgGridDataService, RowDataPipe, AsyncPipe, DatePipe],
  exports: [AgGridListComponent]
})
export class GridModule { }
