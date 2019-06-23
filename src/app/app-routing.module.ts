import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CodeComponent} from './code/code.component';
import {GalleryComponent} from './gallery/gallery.component';
import {FundAnalyzerComponent} from './fund-analyzer/fund-analyzer.component';
import {TimelineComponent} from './timeline/timeline.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'code', component: CodeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fund-analyzer', component: FundAnalyzerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
