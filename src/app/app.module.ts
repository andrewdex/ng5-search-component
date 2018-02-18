import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { searchFilterPipe} from './commons/searchFilterPipe';
import { AppComponent } from './app.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './commons/clickoutsideHandler';
import { MoviesService } from './services/movies.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesComponent,
    searchFilterPipe,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],

  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
