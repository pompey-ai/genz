import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './Carousel/carousel.component';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [LandingPageComponent,CarouselComponent],
  imports: [
    CommonModule
  ],
  exports:[LandingPageComponent,CarouselComponent]
})
export class LandingPageModule { }
