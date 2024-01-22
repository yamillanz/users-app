import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'fi-db-9eb45',
          appId: '1:41426323415:web:e3c68f08ba500994f3ed92',
          databaseURL: 'https://fi-db-9eb45-default-rtdb.firebaseio.com',
          storageBucket: 'fi-db-9eb45.appspot.com',
          apiKey: 'AIzaSyCw6zGEsPGaRR6AI9XnjoUcxVSyrBJZBMY',
          authDomain: 'fi-db-9eb45.firebaseapp.com',
          messagingSenderId: '41426323415',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
  ],
};
