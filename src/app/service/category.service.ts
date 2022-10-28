import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  collection="category"
  constructor(public database:AngularFirestore,public router:Router) { }

  add(data:any)
  {
      this.database.collection(this.collection).add(data).then(res=>{
        console.log("Data saved")
        this.router.navigateByUrl("/category")
      })
  }
  get()
  {
     // return this.categories
     return this.database.collection(this.collection,ref=>ref.orderBy("sort","asc")).snapshotChanges().pipe(
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
    this.database.collection(this.collection).doc(id).update(data).then(res=>{
      this.router.navigateByUrl("/category")

    })
  }
  getSingleCategory(id:any)
  {
     return this.database.collection(this.collection).doc(id).valueChanges()
  }
}
