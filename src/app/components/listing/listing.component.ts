import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchUserService } from 'src/app/services/search-user.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.less']
})
export class ListingComponent implements OnInit, OnDestroy {

  public items: any[] = []

  public search = '';

  public apiUrl = '';

  private subscription: Subscription;

  constructor(private searchUser: SearchUserService) { }

  ngOnInit(): void {
    // this.items = this.searchUser.getItems();
    this.subscription = this.searchUser.itemsReloaded.subscribe(() => {
      this.items = this.searchUser.getItems();
      this.search = this.searchUser.userName;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
