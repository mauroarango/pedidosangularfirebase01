import { Injectable } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    productOrder: new FormControl(''),
    completed: new FormControl(false)
});
//Firestore CRUD
createProductOrder(data) {
  return new Promise<any>((resolve, reject) => {
    this.firestore
      .collection("productOrders")
      .add(data)
      .then(res => {}, err => reject(err));
  });
}

updateProductOrder(data) {
  return this.firestore
    .collection("productOrders")
    .doc(data.payload.doc.id)
    .set({ completed: true }, { merge: true });
}

getProductOrders() {
  return this.firestore.collection("productOrders").snapshotChanges();
}

deleteProductOrder(data) {
  return this.firestore
    .collection("productOrders")
    .doc(data.payload.doc.id)
    .delete();
}
}
