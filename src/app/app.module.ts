import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

//import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { ListaOrdenesComponent } from './lista-ordenes/lista-ordenes.component';

import { OrdenesService } from './compartido/ordenes.service';

//environment import
import { environment } from "src/environments/environment";

//angularfire imports
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";


@NgModule({
  declarations: [
    AppComponent,
    OrdenesComponent,
    ListaOrdenesComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    OrdenesService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
