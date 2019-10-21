import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from "./map/map.component";
import { LeafletsComponent } from "./leaflets/leaflets.component";
import { SharedComponent } from './shared/shared.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/map'
  },
  {
    path: 'leaflets',
    component: LeafletsComponent
  },
  {
    path: 'shared',
    component: SharedComponent
  },
  {
    path: 'pdf',
    component: PdfComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
