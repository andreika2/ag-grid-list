import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellVideoTitleComponent } from './cell-video-title.component';
import { AgGridOptionsService } from '../../services/ag-grid/ag-grid-options.service';
import { AgGridDataService } from '../../services/ag-grid/ag-grid-data.service';
import { HttpClient } from '@angular/common/http';
import { RowDataPipe } from '../../pipes/row-data.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CellVideoTitleComponent', () => {
  let component: CellVideoTitleComponent;
  let fixture: ComponentFixture<CellVideoTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        {
          provide: AgGridOptionsService,
          useValue: new AgGridOptionsService(new AgGridDataService(new HttpClient(null)), new RowDataPipe(null))
        }
      ],
      declarations: [ CellVideoTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellVideoTitleComponent);
    fixture.componentRef.instance.cellVideoTitle = { videoId: 'videoId', title: 'Video Title'};
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
