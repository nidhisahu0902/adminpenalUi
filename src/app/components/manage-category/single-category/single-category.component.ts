import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {
  index:any
  category:any=null;
  constructor(public categoryService:CategoryService, public route :ActivatedRoute,public router:RouterOutlet) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.paramMap.get("id")
    this.categoryService.getSingleCategory(this.index).subscribe(res=>{
      this.category = res
      console.log(this.category,"catogory")
    })
  }
  onSubmit(data:any)
  {
    if (this.index)
    {
      this.categoryService.edit(this.index,data)
      
    }
    else
    {
      this.categoryService.add(data)
    }
  }

}
