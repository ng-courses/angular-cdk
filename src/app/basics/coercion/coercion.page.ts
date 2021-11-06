import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coercion-page',
  templateUrl: './coercion.page.html',
  styleUrls: ['./coercion.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoercionPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
