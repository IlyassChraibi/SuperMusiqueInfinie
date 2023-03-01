import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'youtubePipe'
})
export class YoutubePipePipe implements PipeTransform {


  constructor(private domSanitize: DomSanitizer) {


  }
  transform(url: any, ...args: unknown[]): unknown {
    return this.domSanitize.bypassSecurityTrustResourceUrl(url);
  }
}