import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  enterSearchValue:string='';
  @Output()
  searchTextChanged:EventEmitter<string>= new EventEmitter<string>();
  //create a method
  OnSearchTextChanged()
  {
    this.searchTextChanged.emit(this.enterSearchValue);
  }
}
