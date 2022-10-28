import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.scss']
})
export class SingleImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(value:any)
  {
    console.log(value)
    value = "";
  }
}
