import { Component } from '@angular/core';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  msg = 'Works';
}

