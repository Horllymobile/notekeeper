import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'note-keeper';

  constructor(private swUpdate: SwUpdate){

    this.swUpdate.available.subscribe((event) => {
      if(prompt(`We are updating from ${event.current} to ${event.available}`)){
        this.swUpdate.activateUpdate().then(() => document.location.reload());
      }
    })

  }

  ngOnInit(): void{
    
  }

}
