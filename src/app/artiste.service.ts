import { Injectable } from '@angular/core';
import { Artiste } from './artiste';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ArtisteService {

 
 CLIENT_ID : string = "08bbb91b5bb34ee7adedf4fc18dca650";
 CLIENT_SECRET: string = "df76e8359d784f0d98ff3eee631a7a80";

 nouvelArtiste?: Artiste;
 listeArtistes : Artiste [] = [];

constructor(public http: HttpClient ) { }

spotifyToken : string="";

connect(): void {
  let body = new HttpParams()
    .set('grant_type', 'client_credentials');

  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET)
    })
  };

  this.http.post<any>('https://accounts.spotify.com/api/token', body.toString(), httpOptions)
    .subscribe(res => {
      console.log(res);
      this.spotifyToken = res.access_token;
      localStorage.setItem("token",this.spotifyToken)
    });
}

getArtist(artistname : string): void {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.spotifyToken
    })
  };
  
  this.http.get<any>('https://api.spotify.com/v1/search?type=artist&offset=0&limit=1&q=' + artistname, httpOptions)
    .subscribe(response => {
      console.log(response);

     this.nouvelArtiste = new Artiste(response.artists.items[0].name,response.artists.items[0].images[0].url,response.artists.items[0].id)
    this.listeArtistes.push(this.nouvelArtiste);
    console.log(this.listeArtistes);
    });
}
} 