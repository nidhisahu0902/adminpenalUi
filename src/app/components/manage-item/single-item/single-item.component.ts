import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  id:any
  categories:any;
  constructor(public itemService:ItemService,public route:ActivatedRoute,public router:Router,public categoryService:CategoryService) { }

  ngOnInit(): void {
      this.categoryService.get().subscribe(res=>{
        this.categories = res
      })
  }
  onSubmit(itemData:any)
  {
    if(this.id)
    {
      this.itemService.edit(this.id,itemData)
    }
    else
    {
      this.itemService.add(itemData)
    }

  }
}
