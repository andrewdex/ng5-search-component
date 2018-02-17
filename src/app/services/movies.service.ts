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

public getJSON(): Observable<any> {
  //http://www.omdbapi.com/?t=a&apikey=2f6d5d8c
    return this.http.get("http://www.omdbapi.com/?s=av&apikey=2f6d5d8c")
                    .map((res:any) => res.json());

}


}
