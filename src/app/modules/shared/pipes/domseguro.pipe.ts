import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
/**
 * Nos sirve para sanear variables en urls de otra forma daria error
 */
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanatizer: DomSanitizer) {}

  transform(value: any, url: string): any {
    return this.domSanatizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
