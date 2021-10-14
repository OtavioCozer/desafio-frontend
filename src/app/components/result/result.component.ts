import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchUserService } from 'src/app/services/search-user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less']
})
export class ResultComponent implements OnInit {

  @Input()
  public id = -1;

  @Output()
  public buttonClicked = new EventEmitter<string>();

  public imageUrl = '';
  public name = '';
  public url = '';
  public apiUrl = ''
  public score = -1;

  constructor(private searchUser: SearchUserService) { }

  ngOnInit(): void {
    const user = this.searchUser.getItem(this.id);
    this.imageUrl = user.avatar_url;
    this.name = user.login;
    this.url = user.html_url;
    this.score = user.score;
    this.apiUrl = user.url;
  }

}
