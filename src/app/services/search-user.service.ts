import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  public userName = '';

  private items: any[] = [];

  private total = 0;

  private incompleteResults = false;

  public itemsReloaded = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient, private router: Router) { }

  public search(userName: string) {
    this.userName = userName;
    const options = { params: new HttpParams().set('q', userName) }
    this.httpClient.get<any>('https://api.github.com/search/users', options).subscribe(res => {
      this.items = res.items;
      this.total = res.total_count;
      this.incompleteResults = res.incomplete_results;
      this.itemsReloaded.next(this.items);
      this.router.navigate(['listing']);
    });
  }

  public getUserByUrl(url: string) {
    return this.httpClient.get(url);
  }

  public getItems() {
    return this.items;
  }

  public getItem(id: number) {
    return this.items.find(item => item.id === id);
  }

}
