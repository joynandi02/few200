import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktrackingComponent } from './booktracking.component';

describe('BooktrackingComponent', () => {
  let component: BooktrackingComponent;
  let fixture: ComponentFixture<BooktrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
