# Ng5- Movie SearchComponent - Fully Written in NG5

Demo Lives at : https://searchmoviez.herokuapp.com/ (Please mind the delay as its free hosted)


## Local Setup 

Run `npm install` after cloning the repo

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests - Few custom unit tets are written to test the Movie Component

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Coding Documentation


## Search Filter Pipe : `searchFilterPipe.ts`

Angular Pipe called searchFilterPipe.ts is written from sctratch to handle the matching search queries, this works with local data sources in the events such as the data is already loaded


## Search Movies Component : `search-movies.component.ts`

This file includes all the logic written for searching movies - autocomplete. 

## Movie Service : `services/movies.service.ts`

This file contains the HTTP service call methods written to handle the REST calls

## Movie Database - REST - `https://www.omdbapi.com`
https://www.omdbapi.com is used to retrive movie data, which is served by the Movie Service written. 
There might be some slowness due to the limitations of this FREE api, but feel free to bind a local data storage in case you need to switch data source.


#Future Development 

- Fall back data source for AutoCompletion as a Service




