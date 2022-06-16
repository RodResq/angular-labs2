import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  nome = '';

  constructor(
    private activateRoute: ActivatedRoute
    ) { 
      // this.nome = this.activateRoute.snapshot.params['nome'];
      this.activateRoute.params.subscribe(params => {
        this.nome = params['nome'];
      })
    }

  ngOnInit(): void {
  }

}
