import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MyPipePipe implements PipeTransform {

  constructor(public sanitizer : DomSanitizer){}

  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
