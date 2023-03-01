import { YoutubeComponent } from './youtube/youtube.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

// METTRE VOTRE PROPRE CLÉ D'API !!
const googleApiKey = "AIzaSyCiJ2TN1r9Aad6WyVvDT8EfcmIchl2A7I8";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(public http : HttpClient) { }

  async searchVideoId(searchText : string) : Promise<string>{

    // Requête pour obtenir l'Id d'une vidéo YouTube ici ! Utilisez le paramètre searchText.
    let req = await lastValueFrom(this.http.get<any>("https://www.googleapis.com/youtube/v3/search?type=video&part=id&maxResults=1&key="+ googleApiKey +"&q="+ searchText));
    console.log(req);
    // Remplacez ce return par l'id de la vidéo obtenue.
    return req.items[0].id.videoId;
  }

}
