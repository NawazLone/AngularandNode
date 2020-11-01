import { Component } from '@angular/core';
import { FileService } from './file.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular File Download';
  data:any=[];
  employees:any=[];
  constructor(public fileService: FileService) {}
  
  download() {
    console.log("inside downloaed function");
    this.fileService.downloadFile().subscribe(response => {
      console.log("Response",response);
			let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
     this.data= (response);
     
     this.data.forEach(element => {
       this.employees.push(element);
       console.log("Element",element);
     });
     console.log("Data",this.data);
      const url = window.URL.createObjectURL(blob);
			fileSaver.saveAs(blob, 'employees.json');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }
  
}