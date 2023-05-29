import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss'],
})
export class WarningComponent  implements OnInit {

  @Input() validRamp:boolean =false;
  @Input() edit:boolean =false;

  @Input() title:string="Warning notification";
  @Input() country:string = "";
  @Input() neighborhood:string = "";
  @Input() city:string = "";
  @Input() address:string = "";


  constructor() { }

  ngOnInit() {}



}
