import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateTemplateComponent } from './admin-create-template.component';

describe('AdminCreateTemplateComponent', () => {
  let component: AdminCreateTemplateComponent;
  let fixture: ComponentFixture<AdminCreateTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCreateTemplateComponent]
    });
    fixture = TestBed.createComponent(AdminCreateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
