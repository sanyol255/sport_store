import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.scss']
})
export class StoreInfoComponent implements OnInit {

  title = 'Sport Store';

  constructor() { }

  ngOnInit(): void {
  }

}
