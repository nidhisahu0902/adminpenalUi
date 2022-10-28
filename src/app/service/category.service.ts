import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  collection="category"
  constructor(public database:AngularFirestore) { }

  add(data:any)
  {
      this.database.collection(this.collection).add(data).then(res=>{
        console.log("Data saved")
      
      })
  }
  get()
  {
     // return this.categories
     return this.database.collection(this.collection).snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  delete(id:any)
  {
    this.database.collection(this.collection).doc(id).delete()
  }
  edit(id:any,data:any)
  {
    this.database.collection(this.collection).doc(id).update(data)
  }
}
