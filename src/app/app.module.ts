import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ManageCategoryComponent } from './components/manage-category/manage-category.component';
import { ManageItemComponent } from './components/manage-item/manage-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SingleItemComponent } from './components/manage-item/single-item/single-item.component';
import { SingleCategoryComponent } from './components/manage-category/single-category/single-category.component';
import { SingleImageComponent } from './components/gallery/single-image/single-image.component';
import { AllImagesComponent } from './components/gallery/all-images/all-images.component';
import { AllCategoriesComponent } from './components/manage-category/all-categories/all-categories.component';
import { AllItemsComponent } from './components/manage-item/all-items/all-items.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';




@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    DashboardComponent,
    ContactUsComponent,
    GalleryComponent,
    ManageCategoryComponent,
    ManageItemComponent,
    PageNotFoundComponent,
    NavbarComponent,
    SingleItemComponent,
    SingleCategoryComponent,
    SingleImageComponent,
    AllImagesComponent,
    AllCategoriesComponent,
    AllItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
