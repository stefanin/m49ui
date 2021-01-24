import { Component, OnInit, Input } from '@angular/core';
import { M49sSQLserviceService } from "../m49s-sqlservice.service";

@Component({
  selector: 'tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {
  vidSQL='0';
  @Input() vSQL: string ;// sql query
  @Input() colonne: string[];// column name
  @Input() ricerca: boolean=true;// enable o disable Table Research
  dati: any=[];
  filtro: string;

  constructor(private qs:M49sSQLserviceService) { }

  ngOnInit(): void {
    this.qs.vidSQL=this.vidSQL;
    this.qs.vSQL=this.vSQL;

    this.qs.inviaPost().subscribe((datijson)=>{
      this.dati=datijson;
      console.log(datijson);
    });
  }

}
