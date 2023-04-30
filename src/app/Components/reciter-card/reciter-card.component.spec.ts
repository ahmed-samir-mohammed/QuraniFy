import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciterCardComponent } from './reciter-card.component';

describe('ReciterCardComponent', () => {
  let component: ReciterCardComponent;
  let fixture: ComponentFixture<ReciterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciterCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
