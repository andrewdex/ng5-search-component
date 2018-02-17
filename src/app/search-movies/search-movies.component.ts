import { Component, OnInit } from '@angular/core';

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

  constructor() {

    this.movies =  ['Atlantic','Anna Belle','Burnt','Captain America','Dawn of Planet Apes','Edge of Tomorrow','Fast and Furius','Goosebumps','Hobbit','Inception','John Wick','Koob','King Kong','Lion King','Man of Steel', 'Nice at the Meusium','Once Upon A Time','Perl habour','Quantum','Ragnarok','Shout out'];

   }

  ngOnInit() {
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
