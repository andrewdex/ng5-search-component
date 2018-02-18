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


  //Handling the navigation using arrow keys on the search results
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

  //Close the autocomplete
  closeAutocomplete() {
    this.showAutoComplete = !this.showAutoComplete;
  }

  //Open the autocomplete
  openAutocomplete() {
    this.autoCompleteEnableWrapper = true;
    this.showAutoComplete = false;
  }


  //Getting the selected movie by title passed 
  getSelectedMovie(title){
    this.autoCompleteEnableWrapper = false;
    this.searchQuery = title;
   
  }

  //Search Movie on keydown event
  searchMovie($event){

    setTimeout(()=>{
 let query = $event.target.value;

      let sanitizedText = this.searchQuery.trim();

        if(sanitizedText !== ""){
          this.autoCompleteEnableWrapper = true;
          this.noresults = false;
          console.log("SearchQuery :"+sanitizedText);
          console.log(sanitizedText);

          //Service call subscribe event promise 
          this.moviesService.searchMovieByTitle(sanitizedText).subscribe(data =>{

            //If this returns movies , we assign this to our scope array
      
            
            console.log(data);

            //Check if the movie not found 
            if(data.Error == "Movie not found!"){
              this.autoCompleteEnableWrapper = false;

              //To handle the no results with a little delay : Provides accuracy since the network latency issues might occur 
              setTimeout(()=>{
                this.noresults = true;
              },1000);
       
            }else{
              this.omdbMovies = data.Search;
            }
          });
    
        }else{
          //This will makesure we will hide the autocomplete UI if no results found
          this.autoCompleteEnableWrapper = false;
        }
  
    },800);
     
  




  }


  //This is used to handle the keydown enter event to select the title based on the current element highlighted by the user
  onDown($event){
  
    if($event.key == "Enter"){

      let selectedElement =  document.querySelector(".selected .title");

      let selectedMovie = selectedElement.innerHTML;

      this.searchQuery = selectedMovie;


      console.log(selectedElement.innerHTML);

    }
 

  }

}
