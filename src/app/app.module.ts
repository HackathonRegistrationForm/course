import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CoursesComponent } from './courses/courses.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
   
   
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    HttpClientModule,
    Ng2SearchPipeModule,
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
