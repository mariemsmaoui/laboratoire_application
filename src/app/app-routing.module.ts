import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { ToolComponent } from './tool/tool.component';
import { ArticleComponent } from './article/article.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleAffectComponent } from './article-affect/article-affect.component';
import { LoginComponent } from './login/login.component';
import { EventCreateComponent } from './event-create/event-create.component';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  { path: 'members', component: MemberComponent, pathMatch: 'full' },
  { path: 'members/create', component: MemberFormComponent, pathMatch: 'full' },
  { path: ':id/edit', component: MemberFormComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'events', component: EventComponent, pathMatch: 'full' },
  { path: 'tools', component: ToolComponent, pathMatch: 'full' },
  { path: 'articles', component: ArticleComponent, pathMatch: 'full' },
  {
    path: 'articles/create',
    component: ArticleFormComponent,
    pathMatch: 'full',
  },
  { path: ':id/affect', component: ArticleAffectComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'events/create', component: EventCreateComponent, pathMatch: 'full' },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  //{ path: '**', redirectTo: 'members'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
