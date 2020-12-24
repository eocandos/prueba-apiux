import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { PendingTaskListsComponent } from './components/pending-task-lists/pending-task-lists.component';
import { ReadyTaskListsComponent } from './components/ready-task-lists/ready-task-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    EditTaskComponent,
    NewTaskComponent,
    PendingTaskListsComponent,
    ReadyTaskListsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
