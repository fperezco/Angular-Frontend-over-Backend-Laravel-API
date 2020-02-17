import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SharedRoutingModule } from './shared-routing.module';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, DomseguroPipe, LoaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [HomeComponent, HeaderComponent, FooterComponent, LoaderComponent]
})
export class SharedModule { }
