import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ModelsComponent } from './pages/models/models.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ModelsComponent,
    GalleryComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
