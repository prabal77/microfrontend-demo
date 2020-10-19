import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapComponent, CoreModule, HOOK_NAVIGATOR_NODES } from '@c8y/ngx-components';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { NavigationService } from './services/navigation.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  providers: [
    { provide: HOOK_NAVIGATOR_NODES, useClass: NavigationService, multi: true }
  ],
  bootstrap: [BootstrapComponent],
  declarations: [HomeComponent]
})
export class AppModule { }