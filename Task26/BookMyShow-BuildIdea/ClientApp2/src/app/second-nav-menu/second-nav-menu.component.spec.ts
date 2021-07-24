import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNavMenuComponent } from './second-nav-menu.component';

describe('SecondNavMenuComponent', () => {
  let component: SecondNavMenuComponent;
  let fixture: ComponentFixture<SecondNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
