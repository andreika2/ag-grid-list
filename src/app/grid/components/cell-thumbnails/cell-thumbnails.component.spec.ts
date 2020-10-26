import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellThumbnailsComponent } from './cell-thumbnails.component';
import { GridDataVideoItemThumbnailsDataI } from '../../interfaces/grid-data-video-item';

describe('CellThumbnailsComponent', () => {
  let component: CellThumbnailsComponent;
  let fixture: ComponentFixture<CellThumbnailsComponent>;
  let imgElement: HTMLElement;
  const imgElementClassName = 'thumbnails';
  const imgElementSettings: GridDataVideoItemThumbnailsDataI = { height: 20, width: '20', url: 'testUrl'};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellThumbnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellThumbnailsComponent);
    fixture.componentRef.instance.cellThumbnailsData = imgElementSettings;
    component = fixture.componentInstance;
    imgElement = fixture.nativeElement.getElementsByClassName(imgElementClassName);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should component image diaplayed', () => {
    expect(imgElement[0].className).toEqual(imgElementClassName);
  });

});
