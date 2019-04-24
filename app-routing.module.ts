import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PopularSkillComponent } from './charts/skill/popular-skill/popular-skill.component';
import { SkillProficiencyComponent } from './charts/skill/skill-proficiency/skill-proficiency.component';
import { SkillDistributionComponent } from './charts/skill/skill-distribution/skill-distribution.component';
import { AtcRelationComponent } from './charts/atc/atc-relation/atc-relation.component';
import { AtcGrowthComponent } from './charts/atc/atc-growth/atc-growth.component';
import { AtcTrendComponent } from './charts/atc/atc-trend/atc-trend.component';
import { AtcStrengthsComponent } from './charts/atc/atc-strengths/atc-strengths.component'; 
import { PeopleRequestComponent } from './charts/people/people-request/people-request.component';
import { PeopleDistributionComponent } from './charts/people/people-distribution/people-distribution.component';
import { CacheComponent } from './options/cache/cache.component';
import { LogComponent } from './options/log/log.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 
  { path: 'skill/distribution', component: SkillDistributionComponent },
  { path: 'skill/popular', component: PopularSkillComponent },
  { path: 'skill/proficiency', component: SkillProficiencyComponent },

  { path: 'atc/reation', component: AtcRelationComponent },
  { path: 'atc/growth', component: AtcGrowthComponent },
  { path: 'atc/trend', component: AtcTrendComponent },
  { path: 'atc/strengths', component: AtcStrengthsComponent },
   
  { path: 'people/request', component: PeopleRequestComponent },
  { path: 'people/distribution', component: PeopleDistributionComponent },

  { path: 'options/cache', component: CacheComponent },
  { path: 'options/log', component: LogComponent },

  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  
  { path: '**', redirectTo: 'index', pathMatch: 'full' },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
