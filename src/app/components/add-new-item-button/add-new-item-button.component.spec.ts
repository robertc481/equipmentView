import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewItemButtonComponent } from './add-new-item-button.component';

describe('AddNewItemButtonComponent', () => {
  let component: AddNewItemButtonComponent;
  let fixture: ComponentFixture<AddNewItemButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewItemButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
