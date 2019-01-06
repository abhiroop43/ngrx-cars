import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
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
import { ConnectCarFormDirective } from './cars/connect-car-form.directive';
import { CarsNewComponent } from './cars/cars-new/cars-new.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarsEditComponent,
    ConnectCarFormDirective,
    CarsNewComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    AngularFirestoreModule,
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
