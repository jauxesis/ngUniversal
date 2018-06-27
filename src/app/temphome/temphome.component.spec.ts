import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemphomeComponent } from './temphome.component';

describe('TemphomeComponent', () => {
  let component: TemphomeComponent;
  let fixture: ComponentFixture<TemphomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemphomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
