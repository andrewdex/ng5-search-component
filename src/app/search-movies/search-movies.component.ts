import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  movies:any;
  searchQuery:String;
  showAutoComplete = false;
  autoCompleteEnableWrapper =true;
  title:String;

  constructor(private moviesService:MoviesService) {

    this.movies =  ['Atlantic','Anna Belle','Burnt','Captain America','Dawn of Planet Apes','Edge of Tomorrow','Fast and Furius','Goosebumps','Hobbit','Inception','John Wick','Koob','King Kong','Lion King','Man of Steel', 'Nice at the Meusium','Once Upon A Time','Perl habour','Quantum','Ragnarok','Shout out'];

   }

  ngOnInit() {
  this.moviesService.getJSON().subscribe(data =>{

    console.log(data);
  });
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

}
