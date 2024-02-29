import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }, {
    path: 'blog', component: BlogComponent
  }, {
    path: 'contact-us', component: ContactUsComponent
  }, {
    path: 'about-us', component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
