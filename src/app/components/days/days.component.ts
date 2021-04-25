import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  @Input() title: string;
  @Input() data: Array<number>;
  @Input() current_status: string;

  constructor() {
    this.title = "";
    this.data = [];
    this.current_status = "";
  }

  ngOnInit(): void {
    this.getMean();
  }
  getBgColor(item: number):string{
    let className:string = "";
    if(item < 60)                       className = "item disable";
    else if(item >= 60 && item <= 80)   className = "item medium";
    else if(item > 80)                  className = "item active";
    else                                className = "item";
    return className;
  }
  getMean():number{
    let mean = this.data.reduce((mean, element)=>{
      return (mean + element);
    }, 0);

    return mean / this.data.length;
  }
  getClassActive():string{
    if(this.current_status == "up"){
      return "circle status_active";
    }else{
      return "circle status_disable";
    }
    
  }
}
