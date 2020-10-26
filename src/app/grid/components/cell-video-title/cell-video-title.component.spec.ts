import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellVideoTitleComponent } from './cell-video-title.component';
import { AgGridOptionsService } from '../../services/ag-grid/ag-grid-options.service';
import { HttpClientModule } from '@angular/common/http';
import { AgGridDataService } from '../../services/ag-grid/ag-grid-data.service';
import { RowDataPipe } from '../../pipes/row-data.pipe';
import { DatePipe } from '@angular/common';


describe('CellVideoTitleComponent', () => {
  let component: CellVideoTitleComponent;
  let fixture: ComponentFixture<CellVideoTitleComponent>;
  let agGridOptionsService: AgGridOptionsService;
  let spy: jasmine.Spy;
  const testUrl = 'http//testUrl';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AgGridOptionsService, AgGridDataService, RowDataPipe, DatePipe],
      declarations: [ CellVideoTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellVideoTitleComponent);
    fixture.componentRef.instance.cellVideoTitle = { videoId: 'videoId', title: 'Video Title'};
    agGridOptionsService = fixture.debugElement.injector.get(AgGridOptionsService);
    spy = spyOn(fixture.componentInstance, 'getCellUrl').and.returnValue(testUrl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should component method getCellUrl called', () => {
    component.getCellUrl();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should component method getCellUrl returned value', () => {
    expect(component.getCellUrl()).toEqual(testUrl);
  });

});
