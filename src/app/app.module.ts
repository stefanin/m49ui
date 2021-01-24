import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { M49sSQLserviceService } from "./m49s-sqlservice.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TabellaComponent } from './tabella/tabella.component';
import { CellaComponent } from './tabella/cella/cella.component';
import { FormsModule } from '@angular/forms';
import { TagComponent } from './view/tag/tag.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocatinsComponent } from './locatins/locatins.component';


@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    CellaComponent,
    TagComponent,
    MenuComponent,
    PageNotFoundComponent,
    LocatinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
  ],
  providers: [M49sSQLserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
