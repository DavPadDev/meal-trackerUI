import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallXComponent } from './small-x.component';

describe('SmallXComponent', () => {
  let component: SmallXComponent;
  let fixture: ComponentFixture<SmallXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallXComponent]
    });
    fixture = TestBed.createComponent(SmallXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
