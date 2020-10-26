import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolPanelComponent } from './toolpanel.component';
import { AgGridOptionsService } from '../../services/ag-grid/ag-grid-options.service';
import { AgGridDataService } from '../../services/ag-grid/ag-grid-data.service';
import { HttpClientModule } from '@angular/common/http';
import { RowDataPipe } from '../../pipes/row-data.pipe';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

describe('ToolpanelComponent', () => {
  let component: ToolPanelComponent;
  let fixture: ComponentFixture<ToolPanelComponent>;
  let agGridOptionsService: AgGridOptionsService;
  let toolPanelElement: HTMLElement;
  const toolPanelElementClassName = 'tool-panel';
  const headerToolPanelClassName = 'header-tool-panel';

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
      ],
      providers: [
        AgGridOptionsService,
        AgGridDataService,
        RowDataPipe,
        DatePipe
      ],
      declarations: [
        ToolPanelComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolPanelComponent);
    component = fixture.componentInstance;
    agGridOptionsService = fixture.debugElement.injector.get(AgGridOptionsService);
    toolPanelElement = fixture.nativeElement.getElementsByClassName(toolPanelElementClassName);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should component tool panel diaplayed', () => {
    expect(toolPanelElement[0].className).toContain(toolPanelElementClassName);
  });

  it('should component tool panel have a header name', () => {
    const headerToolPanelTextContent: string = fixture.nativeElement.getElementsByClassName(headerToolPanelClassName)[0].textContent;
    expect(headerToolPanelTextContent).not.toBeNull();
  });

});
