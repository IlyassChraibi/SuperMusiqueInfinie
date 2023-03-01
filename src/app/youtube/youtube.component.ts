import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GoogleService } from '../google.service';

const youtubeURL = "https://www.youtube.com/embed/";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
})
export class YoutubeComponent implements OnInit {
  //videoSearchText : string = "";
  videoId : string = "";
  videoUrl ?: SafeResourceUrl;
 // url: String = '';
  chanson: string = '';
  constructor(private router: ActivatedRoute,public google : GoogleService, public sanitizer : DomSanitizer) {}

  ngOnInit(): void {
    this.chanson = this.router.snapshot.paramMap.get('songName')!;
    console.log(this.chanson);
  }

  async searchVideo(): Promise<void>{
    this.videoId = await this.google.searchVideoId(this.chanson); // Obtenir l'id d'une vidéo
     this.getSafeUrl(); // Obtenir l'URL de la vidéo "sanitizé". La vidéo sera automatiquement affichée dans la page après.
   }

  getSafeUrl() : SafeResourceUrl{
    // Remplissez la variable this.videoUrl avec l'URL de la vidéo à afficher MAIS n'oubliez pas de "sanitize" l'URL.
    // Il vous suffira de concaténer la constante youtubeURL avec this.videoId puis de sanitizer.
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeURL + this.videoId);
    return this.videoUrl;
  }
}
