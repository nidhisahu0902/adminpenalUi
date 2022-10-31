import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { StorageService } from './storage.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  collection = "gallery"
  constructor(public database:AngularFirestore,public storageService:StorageService,public router:Router) { }

  upload(data:any,imagePath:string, imageEvent:any){

      let timeStamp = new Date();

      return this.database.collection(this.collection).add({timeStamp,...data}).then(res=>{
        let id = res.id
        if (imageEvent){
          this.storageService.uploadImage(imagePath,imageEvent).then(res=>{
            let url = res;
            this.database.collection(this.collection).doc(id).update({url:url, imagePath:imagePath}).then(res=>{
              console.log("image uploaded successfully")
              this.router.navigateByUrl("/gallery")
            })
          })
        }
      }).catch(err =>{
        console.log(err)
      })
  }

  get()
  {
    return this.database.collection(this.collection, ref => ref.orderBy("sort", "asc")).get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    )
  }
  delete(id:any, path:any)
  {
    if(path) {
      return this.storageService.deleteImage(path).then(res=>{
        return this.database.collection(this.collection).doc(id).delete().then(res=>{
          console.log("image deleted successfully")
        })
      })
    }
    else {
      return this.database.collection(this.collection).doc(id).delete().then(res=>{
        console.log("image deleted")
      })
    }
  }
  getById(id:any)
  {
    return this.database.collection(this.collection).doc(id).get().pipe(
      map(actions => {
        const data = actions.data() as any;
        const id = actions.id;
        return { id, ...data };
      })
    )
  }
  update(id:any,data:any,imagePath:string,imageEvent:any){
        return this.database.collection(this.collection).doc(id).update(data).then(res=>{
          if(imageEvent)
          {
            this.storageService.deleteImage(imagePath).then(res=>{
              let now = new Date();
              let rand = now.toString()
              let path = "gallery/1"+rand;
              this.storageService.uploadImage(path,imageEvent).then(res=>{
                let url = res
                this.database.collection(this.collection).doc(id).update({imagePath:path,url:url}).then(res=>{
                  console.log("image updated success")
                })
              })
            })
          }
          else{
            console.log("updated")
          }
        })
  }
}
