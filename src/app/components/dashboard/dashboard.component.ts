import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css', 
    './screens/tablet.css', 
    './screens/laptop.css',
    './screens/laptop-l.css'
  ]
})
export class DashboardComponent implements OnInit {

  req_data: any;
  view: boolean;
  refreshed: Date;
  constructor(private _req: RequestService) {
    this.view = false;
    this.refreshed = new Date();
  }

  ngOnInit(): void {
    this.getData()
    setInterval(()=>{
      this.getData();
    }, 120000); //120000
  }

  getData(){
    this._req.getStatus().subscribe(data=> {
      setTimeout(()=>{
        if(this.req_data = data) {
          this.view = true
          this.refreshed = data.last_updated;
        };
      }, 1000 )
    });
  }

}
