import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
  allCategory:any;
  constructor(public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.get().subscribe(res=>{
      this.allCategory = res
      console.log(this.allCategory)
    })
  }
  delete(id:any)
  {
   
    this.categoryService.delete(id)
  }
  edit(id:any,data:any)
  {
    this.categoryService.edit(id,data)
  } 
}
