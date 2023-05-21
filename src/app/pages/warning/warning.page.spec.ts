import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarningPage } from './warning.page';

describe('WarningPage', () => {
  let component: WarningPage;
  let fixture: ComponentFixture<WarningPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WarningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
