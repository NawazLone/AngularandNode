import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Form-Control';
  log(name){
    console.log("name is",name);
  }
}
