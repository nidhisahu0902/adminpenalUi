import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/service/gallery.service';

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.scss']
})
export class AllImagesComponent implements OnInit {

  constructor(public galleryService:GalleryService) { }
  allImages: any
  ngOnInit(): void {
    this.getAllImages()
  }
  getAllImages()
  {
    this.galleryService.get().subscribe(res=>{
        this.allImages = res
        console.log(this.allImages)
    })
  }
  deleteImage(imageid:any,imagePath:string)
  {
      this.galleryService.delete(imageid,imagePath).then(res=>{
        this.getAllImages()
      })
    
  }
}
