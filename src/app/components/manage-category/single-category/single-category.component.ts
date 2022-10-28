import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {

  constructor(public categoryService:CategoryService) { }

  ngOnInit(): void {
  }
  onSubmit(data:any)
  {
    console.log(data)
    this.categoryService.add(data)
    
  }
  
}
