import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: MoviesService
  ) { }

  movie = {}

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.movie = this.service.getMovie(params.id)
    })
  }

}
