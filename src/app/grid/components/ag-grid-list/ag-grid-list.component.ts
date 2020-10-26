import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { RowDataI } from '../../interfaces/row-data';
import { Module } from '@ag-grid-community/all-modules';
import { AgGridOptionsService } from '../../services/ag-grid/ag-grid-options.service';

@Component({
  selector: 'app-ag-grid-list',
  templateUrl: './ag-grid-list.component.html',
  styleUrls: ['./ag-grid-list.component.scss']
})
export class AgGridListComponent implements OnInit {

  public gridOptions: GridOptions;
  public rowData: Observable<RowDataI[]>;
  public gridModules: Module[];

  constructor(private agGridOptionsService: AgGridOptionsService) { }

  ngOnInit(): void {
    this.gridOptions = this.agGridOptionsService.getGridOptions();
    this.rowData = this.agGridOptionsService.getRowData();
    this.gridModules = this.agGridOptionsService.gridModules;
  }

}
