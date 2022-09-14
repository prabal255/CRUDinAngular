import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { StudentClassComponent } from './student-class/student-class.component';
import { StudentClassService } from './student-class.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
