import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  textValue='';
  log=[];
  values=[];
  constructor() { }

  ngOnInit(): void {
  }

  add(element){
    this.values.push({id:element,isChacked:false});
    //console.log(this.values);
  }

  remove()
  {
    this.values.forEach(value => {
      if (value.isChacked == true) {
        this.values.splice(this.values.indexOf(value,0),1);
      }
    });
  }
}
