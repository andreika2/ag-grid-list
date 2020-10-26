import { Component, OnDestroy } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { GridApi, IHeaderParams } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AgGridOptionsService } from '../../services/ag-grid/ag-grid-options.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements IHeaderAngularComp, OnDestroy {

  public isSelectAllActive: boolean;
  public selectAllValue = false;
  private gridApi: GridApi;
  private $unsubscribe = new Subject();

  constructor(private agGridOptionsService: AgGridOptionsService) { }

  agInit(params: IHeaderParams): void {
    this.gridApi = params.api;
    this.initOnGridModeChange();
    this.initSelectRowChange();
  }

  refresh(params: IHeaderParams): boolean {
    return false;
  }

  public onSelectChange(): void {
    this.selectAllValue = !this.selectAllValue;
    if (this.selectAllValue) {
      this.gridApi.selectAll();
      return;
    }
    this.gridApi.deselectAll();
  }

  private initOnGridModeChange(): void {
    this.agGridOptionsService
      .onGridModeChange
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(modeValue => this.isSelectAllActive = modeValue);
  }

  private initSelectRowChange(): void {
    this.agGridOptionsService
      .onSelectedRowCount
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(selectedRowsCount => this.selectRowChange(selectedRowsCount));
  }

  private selectRowChange(selectedRowsCount: number): void {
    const totalRowsCount: number = this.gridApi.getDisplayedRowCount();
    if (totalRowsCount !== selectedRowsCount && this.selectAllValue) {
      this.selectAllValue = !this.selectAllValue;
    } else if (totalRowsCount === selectedRowsCount && !this.selectAllValue) {
      this.selectAllValue = !this.selectAllValue;
    }
  }

  ngOnDestroy(): void {
    this.$unsubscribe.complete();
    this.$unsubscribe.next();
  }

}
