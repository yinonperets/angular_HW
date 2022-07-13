import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { BindingPropertiesComponent } from './components/binding-properties/binding-properties.component';
import { FormsModule } from '@angular/forms';
import { AngularClockComponent } from './component/angular-clock/angular-clock.component';

@NgModule({
  declarations: [AppComponent, StringInterpolationComponent, BindingPropertiesComponent, AngularClockComponent ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
