import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountrylistRoutingModule } from './countrylist-routing.module';
import { CountrylistComponent } from './countrylist.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountrylistComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CountrylistRoutingModule,
    FormsModule
  ]
})
export class CountrylistModule { }
