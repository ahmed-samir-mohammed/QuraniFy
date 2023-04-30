import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuraCardComponent } from './sura-card.component';

describe('SuraCardComponent', () => {
  let component: SuraCardComponent;
  let fixture: ComponentFixture<SuraCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuraCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
