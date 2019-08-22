import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  report: string;

  constructor(private _Activatedroute:ActivatedRoute) { 
    this._Activatedroute.paramMap.subscribe(params => { 
      this.report = params.get('report'); 
    });
  } 

  ngOnInit() {
  }

}
