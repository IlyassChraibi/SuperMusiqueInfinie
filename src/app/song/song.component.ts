import { Song } from './../song';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { GoogleService } from '../google.service';
import { SongService } from '../song.service';
import { ShareConfig } from 'rxjs';

const youtubeURL = "https://www.youtube.com/embed/";
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  song: Song [] = [];
  idAlb: string = "";
  videoId : string = "";
  videoUrl ?: SafeResourceUrl;
 // url: String = '';
  chanson: string = '';
  artiste: string = "";

  constructor(public songService : SongService,public router: ActivatedRoute,public albumService:AlbumService,public google : GoogleService, public sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.idAlb = this.router.snapshot.paramMap.get('albumId')!;
    this.searchSong();
  }

  async searchVideo(song : Song): Promise<void>{
    this.videoId = await this.google.searchVideoId(song.name, this.albumService.artisteAlb); // Obtenir l'id d'une vidéo
     this.getSafeUrl(); // Obtenir l'URL de la vidéo "sanitizé". La vidéo sera automatiquement affichée dans la page après.
     console.log(this.videoId);
   }

  getSafeUrl() : SafeResourceUrl{
    // Remplissez la variable this.videoUrl avec l'URL de la vidéo à afficher MAIS n'oubliez pas de "sanitize" l'URL.
    // Il vous suffira de concaténer la constante youtubeURL avec this.videoId puis de sanitizer.
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeURL + this.videoId);
    return this.videoUrl;
  }
  
   searchSong(){
     this.songService.getSongs(this.songService.albumchoisi);
}

}
