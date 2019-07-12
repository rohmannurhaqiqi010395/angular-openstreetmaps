import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  rowspanValue: 2;

  constructor() {}

  ngOnInit() {
    // this.generatePdf();
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
