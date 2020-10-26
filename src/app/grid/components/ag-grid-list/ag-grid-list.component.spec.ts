import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridListComponent } from './ag-grid-list.component';
import { AgGridOptionsService } from '../../services/ag-grid/ag-grid-options.service';
import { RowDataPipe } from '../../pipes/row-data.pipe';
import { AgGridDataService } from '../../services/ag-grid/ag-grid-data.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { CellThumbnailsComponent } from '../cell-thumbnails/cell-thumbnails.component';
import { CellVideoTitleComponent } from '../cell-video-title/cell-video-title.component';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {GridOptions} from 'ag-grid-community';

describe('AgGridListComponent', () => {
  let component: AgGridListComponent;
  let fixture: ComponentFixture<AgGridListComponent>;
  let agGridOptionsService: AgGridOptionsService;
  let agGridListElement: HTMLElement;
  let spy: jasmine.Spy;
  const agGridOptionsServiceGridOptions: GridOptions = {};
  const agGridListClassName = 'ag-theme-alpine';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule,
        AgGridModule.withComponents([CellThumbnailsComponent, CellVideoTitleComponent, HeaderComponentComponent])
      ],
      providers: [
        AgGridOptionsService,
        AgGridDataService,
        RowDataPipe,
        DatePipe
      ],
      declarations: [
        AgGridListComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridListComponent);
    component = fixture.componentInstance;
    agGridOptionsService = fixture.debugElement.injector.get(AgGridOptionsService);
    agGridListElement = fixture.nativeElement.getElementsByClassName(agGridListClassName);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should component ag-grid list diaplayed', () => {
    expect(agGridListElement[0].className).toEqual(agGridListClassName);
  });

  it('should component method getGridOptions called', () => {
    spy = spyOn(agGridOptionsService, 'getGridOptions');
    agGridOptionsService.getGridOptions();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should component method getGridOptions called and set getGridOptions', () => {
    spy = spyOn(agGridOptionsService, 'getGridOptions').and.returnValue(agGridOptionsServiceGridOptions);
    component.ngOnInit();
    expect(component.gridOptions).toEqual(agGridOptionsServiceGridOptions);
  });

});
