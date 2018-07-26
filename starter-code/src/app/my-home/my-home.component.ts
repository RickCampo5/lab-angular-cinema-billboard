import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(
    private router: Router,
    private service: MoviesService
  ){}

  movies = []

  ngOnInit() {
   this.movies = this.service.getMovies();
  }

}
