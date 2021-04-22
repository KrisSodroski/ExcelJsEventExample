import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'root',
  templateUrl: './Root.html',
  styleUrls: ['./Root.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Root implements OnInit
{

  Title = 'Root';

  constructor(private Router: Router)
  {

  }

  ngOnInit(): void
  {

  }

}
