import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from './album';
import { Artiste } from './artiste';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

constructor(public http: HttpClient) { }

albums: Album[] = [];
spotifyToken = localStorage.getItem("token");



getAlbums(artistId : string): void {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.spotifyToken
    })
  };

  this.http.get<any>(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single`, httpOptions)
    .subscribe(response => {
      this.albums = [];
      console.log(response);
      response.items.forEach((album:any) => {
        this.albums.push(new Album(album.id, album.name, album.images[0].url));
      });
    });
}
}