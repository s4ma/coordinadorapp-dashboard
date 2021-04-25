import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  count:number;
  constructor(
    private _ngZone: NgZone,
    private _router: Router) {
    this.count = 5;
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.count = this.count-1;
      if(this.count == 0){
        this._ngZone.run(()=>{
          this._router.navigate(["dashboard"]);
        })
      }
    }, 1000);
  }

}
