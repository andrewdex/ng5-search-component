import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import * as $ from "jquery";
@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  movies:any;
  omdbMovies:any;
  searchQuery:String;
  showAutoComplete = false;
  autoCompleteEnableWrapper =true;
  title:String;
  keypressTrack : number = 0;
  noresults = false;
  tabIndex=0;
  constructor(private moviesService:MoviesService) {

    this.movies =  ['Atlantic','Anna Belle','Burnt','Captain America','Dawn of Planet Apes','Edge of Tomorrow','Fast and Furius','Goosebumps','Hobbit','Inception','John Wick','Koob','King Kong','Lion King','Man of Steel', 'Nice at the Meusium','Once Upon A Time','Perl habour','Quantum','Ragnarok','Shout out'];

   }

  ngOnInit() {
  this.moviesService.searchMovieByTitle("avatar").subscribe(data =>{
  this.omdbMovies = data.Search;
    console.log(data);
  });

  let tabindex = -1;

    $("#search").keyup(function(e)  
    {
        if (e.keyCode == 40) 
        {  
            tab(1);
        }
        if(e.keyCode==38)
        {
            tab(-1);
        }
      
    });

  var tab = function(diff) {
    tabindex += diff;
    var movieElement = $(".movie");
    if (tabindex >= movieElement.length)
    tabindex = 0;
    if (tabindex < 0)
    tabindex = movieElement.length - 1;
    var cssClass = "selected";
    movieElement.removeClass(cssClass).eq(tabindex).addClass(cssClass);
  }
    
  
  }

  closeAutocomplete() {
    this.showAutoComplete = !this.showAutoComplete;
  }

  openAutocomplete() {
    this.autoCompleteEnableWrapper = true;
    this.showAutoComplete = false;
  }

  getSelectedMovie(title){
    this.autoCompleteEnableWrapper = false;
    this.searchQuery = title;
   
  }

  searchMovie($event){

      let query = $event.target.value;

      let sanitizedText = this.searchQuery.trim();

      if($event.timeStamp - this.keypressTrack > 500 ){
        if(sanitizedText !== ""){
          this.autoCompleteEnableWrapper = true;
          this.noresults = false;
          console.log("SearchQuery :"+sanitizedText);
          console.log(sanitizedText);
          this.moviesService.searchMovieByTitle(sanitizedText).subscribe(data =>{
            console.log("hey");
            this.omdbMovies = data.Search;
            
            console.log(data);

            if(data.Error == "Movie not found!"){
              this.autoCompleteEnableWrapper = false;
              this.noresults = true;
            }
          });
    
        }else{
          this.autoCompleteEnableWrapper = false;
        }
  
      }




  }


  onDown($event){
  
    if($event.key == "Enter"){

      let selectedElement =  document.querySelector(".selected .title");

      let selectedMovie = selectedElement.innerHTML;

      this.searchQuery = selectedMovie;


      console.log(selectedElement.innerHTML);

    }
 

  }

}
