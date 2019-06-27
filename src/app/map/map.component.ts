import { Component, OnInit } from '@angular/core';
import Map from "ol/Map";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
import Feature from "ol/Feature";
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map;
  indonesia;


  constructor() { }

  ngOnInit() {
    this.initizationMap();
  }

  initizationMap(){
    this.indonesia = new Feature ({
      geometry: new Point(fromLonLat([-6.200000, 106.816666]))
    });
    this.map = new Map({
      target: 'map',
      layers: [
        new Tile ({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([17.16, 26.84]),
        zoom: 5
      })
    })
  }

}
