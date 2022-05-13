import { Component, OnInit } from '@angular/core';
import { ApiOmdbService } from '../services/api-omdb.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  datas: any = []

  constructor(
    private movies:ApiOmdbService
  ) { }

  ngOnInit(): void {
    this.movies.getMovies().subscribe((data: any) => [
      // console.warn("data", data)
      this.datas = data.Search
    ])
  }

}
