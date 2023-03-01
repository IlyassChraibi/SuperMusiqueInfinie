import { Component, OnInit } from '@angular/core';
import { Artiste } from '../artiste';
import { ArtisteService } from '../artiste.service';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {

  constructor(public artisteService : ArtisteService) { }

  artistNom : string = "";
  estDansLaListe:boolean = false;

  ngOnInit(): void{  
    this.artisteService.connect();
  }

  /*check():boolean{
    this.estDansLaListe = false;
    if(this.artisteService.listeArtistes.length>0){
    this.artisteService.listeArtistes.forEach(artiste => {
      if(artiste.name === this.artistNom){

       this.estDansLaListe = true;
      
      }
    }); 
  }
  return this.estDansLaListe
}*/

  search(){
    if(this.artistNom != '')
    {
      this.artisteService.getArtist(this.artistNom);
    }
  }
}