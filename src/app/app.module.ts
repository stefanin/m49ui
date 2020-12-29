import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { M49sSQLserviceService } from "./m49s-sqlservice.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TabellaComponent } from './tabella/tabella.component';
import { FormsModule } from '@angular/forms';
import { CellaComponent } from './cella/cella.component';
import { TagComponent } from './view/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    CellaComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [M49sSQLserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
