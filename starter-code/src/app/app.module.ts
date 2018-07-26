import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { MoviesService } from './movies.service'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: MyHomeComponent},
  {path: 'movie/:id', component:MyMoviesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
