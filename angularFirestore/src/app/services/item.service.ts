import { AngularFireAuth } from "angularfire2/auth";
import { Item } from "./../models/Item";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  // userId: string;

  constructor(
    public angularFirestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userId = user.uid;
    //   }
    // });

    // this.items = this.angularFirestore.collection('items').valueChanges();
    this.itemsCollection = angularFirestore.collection<Item>("items");
    this.items = this.itemsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems(): Observable<Item[]> {
    console.log("getttings items ...");
    
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(id) {
    this.itemDoc = this.angularFirestore.doc<Item>("items/" + id);
    this.itemDoc.delete();
  }

  updateItem(item: Item) {
    this.itemDoc = this.angularFirestore.doc<Item>("items/" + item.id);
    this.itemDoc.update(item);
  }
}
