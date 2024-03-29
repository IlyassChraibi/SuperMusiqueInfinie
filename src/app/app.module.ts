import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './album/album.component';
import { ConcertComponent } from './concert/concert.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SongComponent } from './song/song.component';
import { MyPipePipe } from './my-pipe.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [								
    AppComponent,
      ArtisteComponent,
      AlbumComponent,
      ConcertComponent,
      SongComponent,
      MyPipePipe
   ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'/artiste',pathMatch: 'full'},
      {path:'artiste', component: ArtisteComponent},
      {path: 'artiste/:artisteId', component: AlbumComponent},
      {path: 'concert/:artisteName', component: ConcertComponent},
      {path: 'song/:albumId', component: SongComponent},
    ]),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
      })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}