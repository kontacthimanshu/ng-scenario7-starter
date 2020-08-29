import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyListComponent } from './properties/properties-list.component';
import { PropertyThumbnailComponent } from './properties/property-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { PropertiesService } from './properties/shared/properties.service';
import { ToastrService } from './common/toastr.service';
import { AppRoutingModule } from './app-routing.module';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PropertiesService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
