import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LeafletsComponent } from './leaflets/leaflets.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SharedComponent } from './shared/shared.component';
import { PdfComponent } from './pdf/pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LeafletsComponent,
    SharedComponent,
    PdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
