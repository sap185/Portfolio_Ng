import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoLinkComponent } from './compo-link.component';

describe('CompoLinkComponent', () => {
  let component: CompoLinkComponent;
  let fixture: ComponentFixture<CompoLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
