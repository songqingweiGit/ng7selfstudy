import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './/app-routing.module';
import { AjaxService } from './service/ajax.service';
import { ChartsService } from './service/chart.service';
import { CONFIG } from './config';
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

@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    PopularSkillComponent,
    SkillProficiencyComponent,
    SkillDistributionComponent,
    AtcRelationComponent,
    AtcGrowthComponent,
    AtcTrendComponent,
    AtcStrengthsComponent,
    PeopleRequestComponent,
    PeopleDistributionComponent,
    CacheComponent,
    LogComponent,
  ],
  imports: [
    NgxEchartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ChartsService, AjaxService, CONFIG],
  bootstrap: [AppComponent]
})

export class AppModule { }
