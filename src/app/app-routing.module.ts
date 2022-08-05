import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'skills',component:SkillsComponent},
  {path:'career',component:CareerComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
