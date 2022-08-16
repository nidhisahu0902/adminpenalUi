import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ManageCategoryComponent } from './components/manage-category/manage-category.component';
import { ManageItemComponent } from './components/manage-item/manage-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SingleImageComponent } from './components/gallery/single-image/single-image.component';
import { SingleCategoryComponent } from './components/manage-category/single-category/single-category.component';
import { SingleItemComponent } from './components/manage-item/single-item/single-item.component';
import { AllImagesComponent } from './components/gallery/all-images/all-images.component';
import { AllCategoriesComponent } from './components/manage-category/all-categories/all-categories.component';
import { AllItemsComponent } from './components/manage-item/all-items/all-items.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'gallery',component:GalleryComponent, children:[
    {path:'',component:AllImagesComponent},
    {path:'single-image',component:SingleImageComponent}
  ]},
  {path:'category',component:ManageCategoryComponent, children:[
    {path:'',component:AllCategoriesComponent},
    {path:'single-category',component:SingleCategoryComponent}
  ]},
  {path:'item',component:ManageItemComponent, children:[
    {path:'',component:AllItemsComponent},
    {path:'single-item',component:SingleItemComponent}
  ]},
  {path:'contact-us',component:ContactUsComponent},

  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
