import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellThumbnailsComponent } from './cell-thumbnails.component';

describe('CellThumbnailsComponent', () => {
  let component: CellThumbnailsComponent;
  let fixture: ComponentFixture<CellThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellThumbnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
