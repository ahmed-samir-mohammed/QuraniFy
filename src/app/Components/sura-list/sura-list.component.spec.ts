import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuraListComponent } from './sura-list.component';

describe('SuraListComponent', () => {
  let component: SuraListComponent;
  let fixture: ComponentFixture<SuraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuraListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
