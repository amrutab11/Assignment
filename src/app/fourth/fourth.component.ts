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

  remove(event)
  {
    //this.values.forEach(cb => cb.c = false)
    // console.log(this.values.filter(opt => opt.isChacked));

    this.values.forEach(element => {
      if(element.isChacked == true)
          this.values.splice(this.values.indexOf(element,0),1);
    });
             

  }
}
