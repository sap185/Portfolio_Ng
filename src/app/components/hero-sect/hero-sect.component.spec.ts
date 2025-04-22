import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectComponent } from './hero-sect.component';

describe('HeroSectComponent', () => {
  let component: HeroSectComponent;
  let fixture: ComponentFixture<HeroSectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
