import { Item } from './../models/Item';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>

  constructor(public angularFirestore: AngularFirestore) {
    // this.items = this.angularFirestore.collection('items').valueChanges();
    this.items = this.angularFirestore.collection('items')
    .snapshotChanges()
    .map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    });
   }

   getItems():Observable<Item[]>{
     return this.items;
   }

}
