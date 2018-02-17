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

  let displayBoxIndex = -1;

    $("#search").keyup(function(e)  
    {
        if (e.keyCode == 40) 
        {  
            Navigate(1);
        }
        if(e.keyCode==38)
        {
            Navigate(-1);
        }
      
    });

  var Navigate = function(diff) {
    displayBoxIndex += diff;
    var oBoxCollection = $(".movie");
    if (displayBoxIndex >= oBoxCollection.length)
        displayBoxIndex = 0;
    if (displayBoxIndex < 0)
        displayBoxIndex = oBoxCollection.length - 1;
    var cssClass = "selected";
    oBoxCollection.removeClass(cssClass).eq(displayBoxIndex).addClass(cssClass);
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
  let tempIndex =0;
    if(this.tabIndex > 0){
      var previousValue = this.tabIndex -1 ;
      var previousElement = document.querySelector("[tabindex='"+previousValue+"']");
  
      previousElement.classList.remove("selected");
    }
  
    console.log("clicked");
    console.log($event);
    if($event.key == "ArrowDown"){
      let selectedElement = document.querySelector("[tabindex='"+this.tabIndex+"']");
      selectedElement.className = "selected";   
       this.tabIndex ++;

    }


    if($event.key == "ArrowUp"){
      let selectedElement = document.querySelector("[tabindex='"+this.tabIndex+"']");
      selectedElement.className = "selected";   
       this.tabIndex --;

    }

    if($event.key == "Enter"){

      let selectedElement = document.querySelector("[tabindex='"+this.tabIndex+"']");
      let getValue = selectedElement.querySelector(".title");
      this.searchQuery = getValue.innerHTML;
      console.log(getValue.innerHTML);

    }
 

  }

}
