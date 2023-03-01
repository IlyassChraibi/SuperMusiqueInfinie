import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ASTWithSource } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Album } from './album';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

constructor(public http: HttpClient) { }

albumchoisi !: Album;

spotifyToken = localStorage.getItem("token");

getSongs(album: Album): void {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.spotifyToken
    })
  };

  this.http.get<any>(`https://api.spotify.com/v1/albums/${album.id}`, httpOptions)
    .subscribe(response => {
      album.songs = [];
      console.log(response);
      response.tracks.items.forEach((track:any) => {
        album.songs.push(new Song(track.id, track.name));
      });
    });
}

setAlbum(albumRecu:Album){

  this.albumchoisi = albumRecu;
  console.log(this.albumchoisi);
  
}

}