import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Erro404Component } from './erro-404/erro-404.component';
import { CourseModule } from './course/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Erro404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }