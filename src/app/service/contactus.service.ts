import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  collection = "contact-us"
  constructor(public database:AngularFirestore) { }

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
}
