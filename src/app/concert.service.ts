import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Concert } from './concert';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  apiKey : string = "2b32475766802ac01eefda45e9e42ea0";
  concerts: Concert[] = [];


constructor(public http: HttpClient) { }

getConcerts(artisteName : string){
  this.http.get<any>('https://rest.bandsintown.com/artists/'+artisteName+'/events?app_id='+this.apiKey)
  .subscribe(response => {
    this.concerts = [];
    console.log(response);
    response.forEach((concert:any) => {
      var markerPositions: google.maps.LatLngLiteral = 
        {lat:Number.parseFloat(concert.venue.latitude), lng: Number.parseFloat(concert.venue.longitude)};
      this.concerts.push(new Concert(concert.venue.name, concert.venue.city, concert.venue.country, 
        concert.venue.street_address, concert.datetime, markerPositions));
    });
  
    
    console.log(this.concerts);
    });
}
}