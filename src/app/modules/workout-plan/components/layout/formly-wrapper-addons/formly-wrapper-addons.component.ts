import { AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-addons',
  templateUrl: './formly-wrapper-addons.component.html',
  styleUrls: ['./formly-wrapper-addons.component.scss']
})
export class FormlyWrapperAddonsComponent  extends FieldWrapper implements OnInit,AfterViewInit {
  @ViewChild('matPrefix') matPrefix: TemplateRef<any>;
  @ViewChild('matSuffix') matSuffix: TemplateRef<any>;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (this.matPrefix) {
      Promise.resolve().then(() => this.to.prefix = this.matPrefix);
    }

    if (this.matSuffix) {
      Promise.resolve().then(() => this.to.suffix = this.matSuffix);
    }
  }

  addonRightClick($event: any) {
    if (this.to.addonRight.onClick) {
      this.to.addonRight.onClick(this.to, this, $event);
    }
  }

  addonLeftClick($event: any) {
    if (this.to.addonLeft.onClick) {
      this.to.addonLeft.onClick(this.to, this, $event);
    }
  }
}
