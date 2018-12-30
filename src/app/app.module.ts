import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsEditComponent } from './cars/cars-edit/cars-edit.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarEffects } from './store/effects/car.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CarService } from './services/car.service';

@NgModule({
  declarations: [AppComponent, CarsListComponent, CarsEditComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CarEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
