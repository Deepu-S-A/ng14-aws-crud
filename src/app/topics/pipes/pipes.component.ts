import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdditionPipe } from './addition.pipe';
import { AreaPipe } from './area.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  date: Date = new Date();
  amount: number = 2500;
  currency: any = "Rupees";
  radius: any = 2;
  keytab(event: any) {
    this.radius = event.target.value
  }
}
