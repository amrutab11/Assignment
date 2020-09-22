import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  para="Edit me...!";
  visible=false;
  constructor() { }

  ngOnInit(): void {
  }

  edit()
  {
    this.visible=true;
  }
}
