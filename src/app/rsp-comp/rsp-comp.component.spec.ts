import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RspCompComponent } from './rsp-comp.component';

describe('RspCompComponent', () => {
  let component: RspCompComponent;
  let fixture: ComponentFixture<RspCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RspCompComponent]
    });
    fixture = TestBed.createComponent(RspCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
