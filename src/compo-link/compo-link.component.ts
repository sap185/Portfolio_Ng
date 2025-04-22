import { Component } from '@angular/core';
import { HeroSectComponent } from '../app/components/hero-sect/hero-sect.component';
import { ContactMeComponent } from '../app/components/contact-me/contact-me.component';
import { ProjectsComponent } from '../app/components/projects/projects.component';
import { SkillsComponent } from '../app/components/skills/skills.component';
import { AboutComponent } from '../app/components/about/about.component';

@Component({
  selector: 'app-compo-link',
  imports: [HeroSectComponent,ProjectsComponent,ContactMeComponent,SkillsComponent,AboutComponent],
  templateUrl: './compo-link.component.html',
  styleUrl: './compo-link.component.css'
})

export class CompoLinkComponent {
  
}
