import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Spider-Man',
      releaseDate: new Date(25-3-1998),
      price: 1400.99
    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99
    }];

    this.moviesFutureReleases = [{
      title: '300',
      releaseDate: new Date(),
      price: 140.99
    },
    {
      title: 'The day after tomorrow',
      releaseDate: new Date('2-12-2003'),
      price: 20.99
    },
    {
      title: 'Flying colours',
      releaseDate: new Date(),
      price: 110.99
    }];
  }

  moviesInTheaters: any;
  moviesFutureReleases: any;
}
