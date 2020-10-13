import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './components/section/section.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';


const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SectionComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: '**', redirectTo: '/home' },  // 404 route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
