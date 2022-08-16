import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMenuLateralComponent } from './dialog-menu-lateral.component';

describe('DialogMenuLateralComponent', () => {
  let component: DialogMenuLateralComponent;
  let fixture: ComponentFixture<DialogMenuLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMenuLateralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMenuLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
