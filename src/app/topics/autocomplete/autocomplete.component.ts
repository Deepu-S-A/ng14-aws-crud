import { Component } from '@angular/core';
import { Event } from '@angular/router';
import { NodeService } from 'src/app/services/node.service';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  constructor(private node: NodeService){
  }
  searchCar(filterEvent: any){
    this.node.getNodeAPI('filter-cars', filterEvent.target.value ).subscribe(res => console.log(res));
  }
}
