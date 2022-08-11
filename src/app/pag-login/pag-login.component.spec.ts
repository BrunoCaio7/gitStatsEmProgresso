import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagLoginComponent } from './pag-login.component';

describe('PagLoginComponent', () => {
  let component: PagLoginComponent;
  let fixture: ComponentFixture<PagLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
