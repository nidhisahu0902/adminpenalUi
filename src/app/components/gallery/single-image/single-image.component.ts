import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from 'src/app/service/gallery.service';

@Component({
  selector: 'app-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.scss']
})
export class SingleImageComponent implements OnInit {
  defaultImage = "assets/images/upload.png"
  selectedImage = null;
  id;
  imagePath:any;
  imageEvent:any
  allGalleryData:any;
  singleImageData:any;
  showEditImage:boolean = false;

  constructor(public galleryService:GalleryService,public route:ActivatedRoute,public router:Router) {
    this.id = this.route.snapshot.paramMap.get("id")
    if(this.id)
    {
      this.showEditImage = true;
    }
    else
    {
      this.showEditImage = false;
    }
   }

  ngOnInit(): void {
    this.getSingleImageData()
  }

  getSingleImageData()
  {
    this.galleryService.getById(this.id).subscribe(res=>{
      this.singleImageData = res
      console.log(this.singleImageData)
    })
  }
  onSubmit(value:any)
  {
    console.log(value)
    if(this.id)
    {
        this.galleryService.update(this.id, value,this.imagePath,this.imageEvent).then(res=>{
          this.imagePath=null;
          this.imageEvent=null;
          this.router.navigateByUrl("/gallery")

          window.alert("Photo updated")
        })
    }
    else
    {
      let data = value
      this.galleryService.upload(data,this.imagePath,this.imageEvent).then(res=>{
        console.log("photo added successfully")
        this.imagePath = null;
        this.imageEvent = null;
      
     
      })
    }
  }
  processFile(event:any)
  {
    console.log(event.target.files[0])
    if(event.target.files && event.target.files[0])
    {
        const reader = new FileReader();
        reader.onload=(e:any) => this.defaultImage= e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.defaultImage=event.target.files[0]; 
    }
    else{
      this.defaultImage="/assets/images/upload.png"
      this.selectedImage = null;
    }
    let now = new Date();
    let rand =now.toString()
    let path = "gallery/1"+rand
    this.imagePath = path
    this.imageEvent = event.target.files[0];
  }

}
