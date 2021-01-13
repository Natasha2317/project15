import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditworkerComponent } from './editworker.component';

describe('EditworkerComponent', () => {
  let component: EditworkerComponent;
  let fixture: ComponentFixture<EditworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditworkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
