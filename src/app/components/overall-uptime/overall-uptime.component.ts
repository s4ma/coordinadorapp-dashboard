import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-uptime',
  templateUrl: './overall-uptime.component.html',
  styleUrls: ['./overall-uptime.component.css']
})
export class OverallUptimeComponent implements OnInit {

  @Input() sigoApp: Array<number>;
  @Input() tracking: Array<number>;
  percents: {
    last24h: number,
    last7d: number,
    last30d: number
  }
  constructor() {
    this.sigoApp = [];
    this.tracking = [];
    this.percents = {last24h: 0, last30d: 0, last7d: 0};
  }

  ngOnInit(): void {
    let interval = setInterval(()=>{
      if(this.percents.last24h != 90){
        this.percents.last24h++;
        this.percents.last30d++;
        this.percents.last7d++;
      }else{
        clearInterval(interval);
        this.percents = {
          last7d:  this.calcMean(this.tracking.slice(this.sigoApp.length - 7), this.sigoApp.slice(this.sigoApp.length - 7)),
          last24h: this.last24h(),
          last30d: this.calcMean(this.sigoApp, this.tracking)
        }     
      }
    }, 30);
    
  }
  last24h():number{
    return (this.sigoApp[(this.sigoApp.length)-1] + this.tracking[(this.tracking.length)-1]) / 2;
  }
  calcMean(arr1: Array<any>, arr2: Array<any>){
    let m1 = arr1.reduce((res, element)=>{
      return res + element;
    }, 0);
    let m2 = arr2.reduce((res, element)=>{
      return res + element;
    }, 0);

    return (m1+m2) / (arr1.length + arr2.length);
  }

}
