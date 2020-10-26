import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RowDataPipe } from '../../pipes/row-data.pipe';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RowDataI } from '../../interfaces/row-data';
import { GridApi, GridOptions, MenuItemDef, SelectionChangedEvent } from 'ag-grid-community';
import { Module } from '@ag-grid-community/all-modules';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import { CellThumbnailsComponent } from '../../components/cell-thumbnails/cell-thumbnails.component';
import { CellVideoTitleComponent } from '../../components/cell-video-title/cell-video-title.component';
import { ColDef } from 'ag-grid-community/dist/lib/entities/colDef';
import { ToolPanelComponent } from '../../components/toolpanel/toolpanel.component';
import { SideBarDef } from 'ag-grid-community/dist/lib/entities/sideBar';
import { GetContextMenuItemsParams } from 'ag-grid-community/dist/lib/entities/gridOptions';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { AgGridDataService } from './ag-grid-data.service';

@Injectable()
export class AgGridOptionsService {

  public onSelectedRowCount: Subject<number> = new Subject<number>();
  public onGridModeChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private columnDefs: ColDef[] = [
    {
      headerName: '',
      field: 'thumbnails',
      width: 150,
      cellRendererFramework: CellThumbnailsComponent,
      headerComponentFramework: HeaderComponentComponent,
      checkboxSelection: () => this.onGridModeChange.getValue(),
    },
    {
      headerName: 'Published on',
      field: 'publishedAt',
      width: 200,
    },
    {
      headerName: 'Video Title',
      field: 'title',
      width: 550,
      cellRendererFramework: CellVideoTitleComponent
    },
    {
      headerName: 'Description',
      field: 'description',
      width: 760
    }
  ];
  private cellVideoTitleUrl = 'https://www.youtube.com/watch?v=';
  private modules: Module[] = AllModules;
  get gridModules(): Module[] {
    return this.modules;
  }

  constructor(private agGridDataService: AgGridDataService,
              private rowDataPipe: RowDataPipe) { }

  static getCustomToolbar(): SideBarDef {
    return {
      toolPanels: [
        {
          id: 'custom toolbar',
          labelKey: 'custom toolbar',
          labelDefault: 'Custom toolbar',
          iconKey: 'custom-stats',
          toolPanelFramework: ToolPanelComponent,
        },
      ],
      defaultToolPanel: 'custom toolbar'
    };
  }

  public getRowData(): Observable<RowDataI[]> {
    return this.agGridDataService.getGridDataVideoList()
      .pipe(
        map(videoListResponse => this.rowDataPipe.transform(videoListResponse.items))
      );
  }

  public getCellVideoTitleUrl(videoId: string): string {
    return `${this.cellVideoTitleUrl}${videoId}`;
  }

  public getGridOptions(): GridOptions {
    return {
      columnDefs: this.columnDefs,
      suppressRowClickSelection: true,
      animateRows: true,
      rowSelection: 'multiple',
      defaultColDef: {
        sortable: false,
        filter: false,
      },
      sideBar: AgGridOptionsService.getCustomToolbar(),
      getContextMenuItems: this.getContextMenuItems.bind(this),
      onSelectionChanged: this.onSelectRowChange.bind(this)
    };
  }

  public changeGridMode(selectionMode: boolean, gridApi: GridApi): void {
    if (!selectionMode) { gridApi.deselectAll(); }
    this.onGridModeChange.next(selectionMode);
    gridApi.refreshHeader();
    gridApi.redrawRows();
  }

  private onSelectRowChange(event: SelectionChangedEvent): void {
    const selectionRowsCount: number = event.api.getSelectedRows().length;
    this.onSelectedRowCount.next(selectionRowsCount);
  }

  private getContextVideoTitleMenu(params: GetContextMenuItemsParams): MenuItemDef[] {
    return [
      {
        name: 'Open in new tab',
        cssClasses: ['redFont', 'bold'],
        action: () => {
          const url = this.getCellVideoTitleUrl(params.value.videoId);
          window.open(url, '_blank');
        }
      }
    ];
  }

  private getContextMenuItems(params: GetContextMenuItemsParams): MenuItemDef[] {
    return params.column.getColId() === 'title' ?
      this.getContextVideoTitleMenu(params) : [];
  }

}
