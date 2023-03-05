import { Component, OnInit } from '@angular/core';
import { Artiste } from '../artiste';
import { ArtisteService } from '../artiste.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {

  
  artistNom : string = "";
  jsonData !: string;
  language : string = "fr";

  constructor(public artisteService : ArtisteService,public translator : TranslateService) { 
    translator.setDefaultLang(this.language);
  }

  changeLanguage(lang : string): void {
    this.language = lang;
    this.translator.use(this.language);
}

  ngOnInit(): void{  
    this.artisteService.connect();
    this.jsonData = localStorage.getItem("listeA") || "";
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