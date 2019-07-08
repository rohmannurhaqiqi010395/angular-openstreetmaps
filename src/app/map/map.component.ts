import { Component, OnInit, ViewChild } from '@angular/core';
import Map from "ol/Map";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
import Feature from "ol/Feature";
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj.js';
import { Style, Icon } from 'ol/style.js';
import VectoreSource from 'ol/source/Vector';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import TileJSON from 'ol/source/TileJSON';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map;
  indonesia;
  jakarta: any;
  vectorLayer;
  vectorSource;
  rasterLayer;


  constructor() { }

  ngOnInit() {
    this.initizationMap();
  }

  initizationMap(){

    this.indonesia = new Feature ({
      geometry: new Point(fromLonLat([ 106.816666, -6.200000]))
    });

    this.indonesia.setStyle( new Style ({
      image: new Icon(({
        color: '#8777F8',
        crossOrigin: 'anonymous',
        src: '../../assets/img_243753.png',
        imgSize: [20,20]
      }))
    }));
    this.jakarta = new Feature({
      geometry: new Point(fromLonLat([ 106.8271830, -6.1753942]))
    });
    this.jakarta.setStyle( new Style({
      image: new Icon(({
        color: '#008cff',
        crossOrigin: 'anonymoys',
        src: '../../assets/img_243753.png',
        imgSize: [20,20]
      }))
    }));

    this.vectorSource = new VectoreSource({
      features: [this.indonesia, this.jakarta]
    });

    this.vectorLayer = new VectorLayer ({
      source: this.vectorSource
    });

    this.rasterLayer = new TileLayer({
      source: new OSM()
    });


    this.map = new Map({
      target: 'map',
      layers: [
        this.rasterLayer, this.vectorLayer
      ],
      view: new View({
        center: fromLonLat([120.16, -1.84]),
        zoom: 5.3
      })
    })
  }

}
