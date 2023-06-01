import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
import { SeoService } from '../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  all: any;

  constructor( private homepageService:HomepageService, 
    private SEOService:SeoService,
    private titleService: Title,
    private metaService: Meta, ) {
   
  }
  ngOnInit(): void {
    const UserDetails1 = {

      "userId": 0,
  
      "batch": 0,
  
      "country": "",
  
      "currentLatitude": "",
  
      "currentLongitude": ""
  
    }
   
  
   
    this.homepageService.allApi(UserDetails1).subscribe(res => {
    console.log('hello',res);
    this.titleService.setTitle(res.metaTags.metaTitle);
    this.metaService.updateTag({ name: "title", content: res.metaTags.metaTitle });
    this.metaService.updateTag({ name: "keywords", content: res.metaTags.metaKeywords });
    this.metaService.updateTag({ name: 'description', content: res.metaTags.metaDescription });
    this.metaService.updateTag({ name: 'image', content: res.metaTags.metaImage });

    // Twitter
    this.metaService.updateTag({ property: 'twitter:card', content: 'app' });
    this.metaService.updateTag({ property: 'twitter:site', content: '@Travogram' });
    this.metaService.updateTag({ property: 'twitter:creator', content: 'Amul Shah' });
    this.metaService.updateTag({ property: 'twitter:title', content: res.metaTags.metaTitle });
    this.metaService.updateTag({ property: 'twitter:description', content: res.metaTags.metaDescription });
    this.metaService.updateTag({ property: 'twitter:image', content: res.metaTags.metaImage });

    // this.metaService.updateTag({ property: 'twitter:image', content: 'https://i0.wp.com/devdactic.com/wp-content/uploads/2020/05/ionic-in-app-purchase-capacitor.png?w=1620&ssl=1' });
    this.metaService.updateTag({ property: 'twitter:app:name:googleplay', content: 'Travogram' });
    this.metaService.updateTag({ property: 'twitter:app:id:googleplay', content: 'com.travogram.prod' });
    this.metaService.updateTag({ property: 'twitter:app:url:googleplay', content: 'https://www.travogram.com' });
    this.metaService.updateTag({ property: 'twitter:app:country', content: 'US' });
    // Facebook
    this.metaService.updateTag({ property: 'og:site_name', content: 'Travogram' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.travogram.com/' });
    this.metaService.updateTag({ property: 'og:title', content: res.metaTags.metaTitle });
    this.metaService.updateTag({ property: 'og:description', content: res.metaTags.metaDescription });
    this.metaService.updateTag({ property: 'og:image', content: res.metaTags.metaImage });
    this.metaService.updateTag({ property: 'og:image:secure_url', content: res.metaTags.metaImage });
    this.metaService.updateTag({ property: "og:type", content: "article" });
    this.metaService.updateTag({ property: "fb:app_id", content: "201701744527802" });
    this.metaService.updateTag({ property: 'og:image:width', content: '300' });
    this.metaService.updateTag({ property: 'og:image:height', content: '400' });
    this.metaService.updateTag({ property: 'og:image:alt', content: 'Travogram image' });
    this.all = res.all;
    // this.SEOService.updateTitle(res.title);
    // this.SEOService.updateDescription(res.description);
    // this.SEOService.updateKeyword(res.keywords);
    // this.SEOService.updateImage(res.metaImage);
    });
  }

 
}
