import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paragraphToggle = false;
  events: Array<string>;
  constructor() { }

  ngOnInit() {
    this.events = new Array<string>();
  }
  toggleParagraph(){
    this.paragraphToggle = !this.paragraphToggle;
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    this.events.push(datetime);
  }
  paintRow(){
    return 'blue';
  }
}
