import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoviesService {


  constructor(private http: Http) {
    var obj;
    this.getJSON().subscribe(data => obj=data, error => console.log(error));
}


//['Atlantic','Anna Belle','Burnt','Captain America','Dawn of Planet Apes','Edge of Tomorrow','Fast and Furius','Goosebumps','Hobbit','Inception','John Wick','Koob','King Kong','Lion King','Man of Steel', 'Nice at the Meusium','Once Upon A Time','Perl habour','Quantum','Ragnarok','Shout out'];
public getJSON(): Observable<any> {
    return this.http.get("http://www.omdbapi.com/?s=ava&apikey=2f6d5d8c")
                    .map((res:any) => res.json());

}


public searchMovieByTitle(title): Observable<any> {

    return this.http.get("http://www.omdbapi.com/?s="+title+"&apikey=2f6d5d8c")
                    .map((res:any) => res.json());

}

public checkIfServiceWorks(title){
  var status;
  this.http.get("http://www.omdbapi.com/?s="+title+"&apikey=2f6d5d8c")
  .map((res:any) => res.json()).subscribe(data =>{
    status = data;
  });

  return status;
}



}
