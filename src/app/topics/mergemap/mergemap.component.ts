import { Component , OnInit, ViewChild, ElementRef} from '@angular/core';
import { from, fromEvent, map, mergeMap, Observable } from 'rxjs';
@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent  implements OnInit{
  mergedText: string = "sample";
  @ViewChild('inputText1', {static: true}) inputText1!: ElementRef;
  @ViewChild('inputText2', {static: true}) inputText2!: ElementRef;

  constructor(){}

  ngOnInit(): void {
    let obs1 = fromEvent(this.inputText1.nativeElement, 'keyup');
    let obs2 = fromEvent(this.inputText2.nativeElement, 'keyup');

    obs1.pipe(
      mergeMap(
        (event1: any) => {
          return obs2.pipe(
            map((event2: any) => { 
              console.log(event1.target.value)
              return  event1.target.value+ event2.target.value
            }))
        },
        )
      ).subscribe(res => this.mergedText = res);
  }
  
}
