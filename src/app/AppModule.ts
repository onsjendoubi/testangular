import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListComponent } from './list/list.component';
import { DetailleComponent } from './detaille/detaille.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NotfoundComponent,
    ListComponent,
    DetailleComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    

    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
