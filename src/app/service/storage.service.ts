import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage:AngularFireStorage) { }

  uploadImage(path:string,file:File)
  {
    return this.storage.upload(path,file).then(res=>{
      return this.getUrl(path).then(res=>{
        console.log(path)
        return res;
      })
    })
  }
  async changeFile(path:string,file:File)
  {
      await this.storage.ref(path).delete()
      return this.storage.upload(path,file)
  }
  getUrl(path:string)
  {
    return new Promise(resolve=>{
      this.storage.ref(path).getDownloadURL()
      .subscribe(
        (data:any) => {
          resolve(data);
        }
      )
    })
  }
  deleteImage(path:any)
  {
      return new Promise(resolve=>{
        this.storage.ref(path).delete()
        .subscribe(
          (data:any) => {
            resolve(data);
          }
        )
      })
  }
}
