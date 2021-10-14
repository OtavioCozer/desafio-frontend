import { Component } from '@angular/core';
import { SearchUserService } from './services/search-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private searchUser: SearchUserService) { }

  search = '';

  onSubmit() {
    this.searchUser.search(this.search);
    console.log(this.search);
  }
}
