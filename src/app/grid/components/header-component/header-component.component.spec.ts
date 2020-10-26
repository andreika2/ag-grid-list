import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentComponent } from './header-component.component';
import { AgGridOptionsService } from '../../services/ag-grid/ag-grid-options.service';
import { AgGridDataService } from '../../services/ag-grid/ag-grid-data.service';
import { HttpClientModule } from '@angular/common/http';
import { RowDataPipe } from '../../pipes/row-data.pipe';
import { DatePipe } from '@angular/common';

describe('HeaderComponentComponent', () => {
  let component: HeaderComponentComponent;
  let fixture: ComponentFixture<HeaderComponentComponent>;
  let agGridOptionsService: AgGridOptionsService;
  let spy: jasmine.Spy;
  let checkboxElement: HTMLElement;
  const checkboxElementClassName = 'ag-header-select-all';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AgGridOptionsService, AgGridDataService, RowDataPipe, DatePipe],
      declarations: [ HeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponentComponent);
    component = fixture.componentInstance;
    agGridOptionsService = fixture.debugElement.injector.get(AgGridOptionsService);
    spy = spyOn(fixture.componentInstance, 'onSelectChange');
    checkboxElement = fixture.nativeElement.getElementsByClassName(checkboxElementClassName);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should component onSelectChange called', () => {
    component.onSelectChange();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should component checkbox diaplayed', () => {
    expect(checkboxElement[0].className).toEqual(checkboxElementClassName);
  });

});
