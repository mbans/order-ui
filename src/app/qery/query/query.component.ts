import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  cache: string;

  constructor(private _Activatedroute:ActivatedRoute) { 
    this._Activatedroute.paramMap.subscribe(params => { 
      this.cache = params.get('cache'); 
    });
  } 

  ngOnInit() {
  }

}
