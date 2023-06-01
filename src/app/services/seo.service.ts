import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private dom:Document,
        private titleSvc: Title,
        private metaSvc: Meta,
  ) { }
  updateTitle(title: string) {
    this.titleSvc.setTitle(title)
    this.metaSvc.updateTag({ name: 'title', title })
    this.metaSvc.updateTag({ name: 'twitter:title', title })
    this.metaSvc.updateTag({ name: 'og:title', title })

};

updateDescription(content: string) {
    this.metaSvc.updateTag({ name: 'description', content })
    this.metaSvc.updateTag({ name: 'twitter:description', content })
    this.metaSvc.updateTag({ name: 'og:description', content })
   

};

updateKeyword(content: string) {
  this.metaSvc.updateTag({ name: 'keywords', content })
  this.metaSvc.updateTag({ name: 'twitter:keywords', content })
  this.metaSvc.updateTag({ name: 'og:keywords', content })
  

};

updateImage(content: string) {
  this.metaSvc.updateTag({ name: 'image', content })
  this.metaSvc.updateTag({ name: 'twitter:image', content })
  this.metaSvc.updateTag({ name: 'og:image', content })
  
};



createCanonicalLink(url: string) {
    let link: HTMLLinkElement =
        this.dom.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    this.dom.head.appendChild(link);
}
}
