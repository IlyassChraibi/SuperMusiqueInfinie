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
  jsonData !: string;

  ngOnInit(): void{  
    this.artisteService.connect();
    this.jsonData = localStorage.getItem("listeA")!;
    this.artisteService.listeArtistes = JSON.parse(this.jsonData);
  }

  async search() : Promise<void>{
    if(this.artistNom != '')
    {
      await this.artisteService.getArtist(this.artistNom);
    }
    localStorage.setItem("listeA", JSON.stringify(this.artisteService.listeArtistes));
  }
}