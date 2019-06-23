import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavDockComponent } from './nav-dock/nav-dock.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CodeComponent } from './code/code.component';
import { BlogComponent } from './blog/blog.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FundAnalyzerComponent } from './fund-analyzer/fund-analyzer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavDockComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    CodeComponent,
    BlogComponent,
    MenubarComponent,
    FundAnalyzerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
