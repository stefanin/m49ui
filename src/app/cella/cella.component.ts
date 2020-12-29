import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cella',
  templateUrl: './cella.component.html',
  styleUrls: ['./cella.component.css']
})
export class CellaComponent implements OnInit {

  @Input() d: string; //data value
  @Input() c: string; // cell name
  default:boolean=false;
  tag:boolean=false;

  constructor() { }

  ngOnInit(): void {
  switch (this.c) {
    case "tag":
        this.tag=true;
        break;

    default:
        this.default=true;
      break;
  }
  }

}
