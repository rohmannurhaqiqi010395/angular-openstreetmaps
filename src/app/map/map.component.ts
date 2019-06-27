import { Component, OnInit } from '@angular/core';
import Map from "ol/Map";
import Tile from "ol/layer/Tile";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map;

  constructor() { }

  ngOnInit() {
  }

  initizationMap(){
    this.map = new Map({
      target: 'map',
      layers: [
        new Tile
      ]
    })
  }

}
