
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Song } from './song';

// METTRE VOTRE PROPRE CLÉ D'API !!
const googleApiKey = "AIzaSyCiJ2TN1r9Aad6WyVvDT8EfcmIchl2A7I8";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(public http : HttpClient) { }

  async searchVideoId(searchText : string, artisteName : string) : Promise<string>{

    // Requête pour obtenir l'Id d'une vidéo YouTube ici ! Utilisez le paramètre searchText.
    let req = await lastValueFrom(this.http.get<any>("https://www.googleapis.com/youtube/v3/search?type=video&part=id&maxResults=1&key="+ googleApiKey +"&q="+ searchText +""+ artisteName));
    console.log("req " +req);
    // Remplacez ce return par l'id de la vidéo obtenue.
    return req.items[0].id.videoId;
  }

}
