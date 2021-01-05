import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RoleSelectionComponent } from "./role-selection/role-selection.component";
import { SearchComponent } from './search/search.component';
import { PromtionServicesService } from "./promtion-services.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HeaderComponent, RoleSelectionComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule, HttpClientModule],
  providers: [PromtionServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
