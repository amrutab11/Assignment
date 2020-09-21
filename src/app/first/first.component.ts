import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  selectedBtn='';
  names=["HOME","PROJECTS","SERVICE","CONTACT"];

  constructor() { }

  ngOnInit(): void {
  }

  fun(event){
    this.selectedBtn=event.target.value;
  }
}
