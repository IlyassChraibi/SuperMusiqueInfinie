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

songs : Song[] = [];

spotifyToken = localStorage.getItem("token");

getSongs(albumId: string): void {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.spotifyToken
    })
  };

  this.http.get<any>(`https://api.spotify.com/v1/albums/${albumId}`, httpOptions)
    .subscribe(response => {
      console.log("les chansons "+response);
      response.tracks.items.forEach((track:any) => {
        this.songs.push(new Song(track.id, track.name));
      });
    });
}

setAlbum(albumRecu:Album){

  this.albumchoisi = albumRecu;
  console.log(this.albumchoisi);
  
}

}