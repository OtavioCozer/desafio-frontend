import { Component, Input, OnInit, EventEmitter, Output, HostListener } from '@angular/core';
import { SearchUserService } from 'src/app/services/search-user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  @Input()
  public apiUrl = '';

  @Output()
  public modalClose = new EventEmitter();

  public loading = true;

  public user: any = {};

  constructor(private searchUser: SearchUserService) { }

  ngOnInit(): void {
    this.searchUser.getUserByUrl(this.apiUrl).subscribe(res => {
      this.user = res
      this.loading = false;
    });
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    if (e.toElement.localName === 'app-modal') {
      this.modalClose.emit();
    }
  }

}
