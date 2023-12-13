import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jis',
  templateUrl: './jis.component.html',
  styleUrl: './jis.component.css'
})
export class JisComponent implements OnInit {
  myDate = new Date();
ngOnInit(): void {
  this.myDate;
}
}
