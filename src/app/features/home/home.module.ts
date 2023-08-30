import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './news-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, RouterModule],
})
export class HomeModule {}
