import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated, // zmienia działanie css (globalny localny itp)
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('do check');
  }

  ngOnInit(): void {
    console.log('ng OnInit called!');
  }
  ngAfterContentInit(): void {
    console.log('ng after content init');
  }
  ngAfterContentChecked(): void {
    console.log('ng after content check');
  }
}
