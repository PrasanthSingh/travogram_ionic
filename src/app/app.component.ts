import { Component } from '@angular/core';
import { HomepageService } from './services/homepage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private homepageService: HomepageService,
  ) {
    this.homepageService.tokenApi().subscribe(res =>{
      console.log('res1', res.access_token);
      localStorage.setItem('azureId', res.access_token);
    })
  }

}
