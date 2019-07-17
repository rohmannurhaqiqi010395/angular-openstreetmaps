import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import * as html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { Saving } from '../core/saving';
import { environment } from 'src/environments/environment';
import { Chart} from 'chart.js';

const api = environment.api + '/results';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  // @ViewChild('contentToConvert') element: ElementRef;
  rowspanValue: 2;

  dtSaving: Saving[];

  chart = [];
  month=[]
  price=[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // this.generatePdf();
    this.getChart();
  }

  getChart(){
    this.httpClient.get(api).subscribe((res: Saving[]) => {
      res.forEach(respon => {
        this.month.push(respon.month);
        this.price.push(respon.price);
      });

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [{
            data: this.price,
            borderColor: '#3cba9f',
            fill: false
          }]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
            }],
            yAxes: [{
              display: true
            }],
          }
        },
        exporting: {
          sourceWidth: 720,
          sourceHeight: 300
        }
      })
    })
  }

  generatePdf(){
      var data = document.getElementById('contenToConvert');
      html2canvas(data).then(canvas => {
        var imgWidth = 200;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jspdf('p','mm','a4');
        var position = 10;
        var fontSize = pdf.setFontSize(12)
        pdf.text("Report Daily Saving",5,5,fontSize)
        pdf.addImage(contentDataURL,'PNG',5,position,imgWidth,imgHeight)
        pdf.save('primasaver.pdf');
      });
  }
}
