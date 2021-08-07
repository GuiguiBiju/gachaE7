import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeditComponent } from './heroedit.component';

describe('HeroeditComponent', () => {
  let component: HeroeditComponent;
  let fixture: ComponentFixture<HeroeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
