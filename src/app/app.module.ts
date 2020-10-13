import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SectionComponent } from './components/section/section.component';
import { TaskmanageComponent } from './components/taskmanage/taskmanage.component';

import { TaskService } from './services/task.service';
import { PopupService } from './services/popup.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TaskComponent } from './components/section/task/task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SectionComponent,
    TaskmanageComponent,
    FilterPipe,
    SortPipe,
    TaskComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ TaskService, PopupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
