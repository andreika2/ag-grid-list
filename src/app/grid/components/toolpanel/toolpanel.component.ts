import { Component, OnDestroy } from '@angular/core';
import { GridApi, IToolPanel, IToolPanelParams } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AgGridOptionsService } from '../../services/ag-grid/ag-grid-options.service';

@Component({
  selector: 'app-toolpanel',
  templateUrl: './toolpanel.component.html',
  styleUrls: ['./toolpanel.component.scss']
})
export class ToolPanelComponent implements IToolPanel, OnDestroy {

  public panelFormGroup: FormGroup;
  private gridApi: GridApi;
  private $unsubscribe = new Subject();

  constructor(private agGridOptionsService: AgGridOptionsService,
              private formBuilder: FormBuilder) { }

  agInit(params: IToolPanelParams): void {
    this.gridApi = params.api;
    this.gridApi.addEventListener('modelUpdated', this.initToolPanel.bind(this));
  }

  refresh(): void {
  }

  public getFormControl(formControlName: string): AbstractControl {
    return this.panelFormGroup.controls[formControlName];
  }

  private initToolPanel(): void {
    this.initPanelFormGroup();
    this.initSelectRowSubject();
  }

  private initPanelFormGroup(): void {
    this.panelFormGroup = this.formBuilder.group({
      selectionMode: [false],
      totalCount: [{value: this.gridApi.getDisplayedRowCount(), disabled: true}],
      selectedRowCount: [{value: this.gridApi.getSelectedRows().length, disabled: true}]
    });
    this.onSelectionModeChange();
  }

  private onSelectionModeChange(): void {
    this.getFormControl('selectionMode')
      .valueChanges
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(selectionMode => this.agGridOptionsService.changeGridMode(selectionMode, this.gridApi));
  }

  private initSelectRowSubject(): void {
    this.agGridOptionsService
      .onSelectedRowCount
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(selectedRowCount => this.getFormControl('selectedRowCount').setValue(selectedRowCount));
  }

  ngOnDestroy(): void {
    this.$unsubscribe.complete();
    this.$unsubscribe.next();
  }

}
