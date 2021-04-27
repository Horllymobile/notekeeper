import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() search = new EventEmitter();
  searchString: FormControl;
  constructor(
    
  ) { }

  ngOnInit(): void {
    this.searchString = new FormControl("");
  }

  searchNote(){
    this.searchString.valueChanges.subscribe(data => {
      this.search.emit(data);
      // console.log(data);
    })
  }

}
