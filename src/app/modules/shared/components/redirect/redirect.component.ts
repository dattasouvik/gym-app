import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {
  @Input()
  url: string;

  @Input()
  className = '';

  @Input()
  altText = '';

  @Input()
  text = '';

  @Input()
  icon = 'arrow_back_ios';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate() {
    if (this.url) {
      this.router.navigateByUrl(`${this.url}`,
        { skipLocationChange: true });
    }
  }

}
