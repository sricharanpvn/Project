import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = '';

  constructor(_activatedroute:ActivatedRoute, private _router:Router) {
    _activatedroute.params.subscribe((params) => {
      if(params.searchTerm)
      this.searchTerm = params.searchTerm;
    })
  }

  ngOnInit(): void {
  }
  search(term:string){
    this._router.navigateByUrl('search/' + term)
  }
}
