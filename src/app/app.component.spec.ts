import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MoviesService } from './services/movies.service';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,FormsModule],
      providers:[MoviesService],
      declarations: [
        AppComponent,
        SearchMoviesComponent
      ],
    }).compileComponents();
  }));

  //Checking the name of a tag -- useful on testing UI consistency
  it('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Movie Search');
  }));

  it('should have a search input',async(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input')).toBeTruthy();
  }));
});
