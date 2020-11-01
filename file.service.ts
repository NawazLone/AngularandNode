import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FileService {

  constructor(public http: HttpClient) {}

  downloadFile(): any {
    console.log("fileservice s gets called");
  	return this.http.get('http://localhost:8080/api/services', {responseType: 'json'});
  
  }
}