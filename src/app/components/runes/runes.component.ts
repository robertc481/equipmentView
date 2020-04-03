import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {
  title = 'runy';
  type = 'rune';

  constructor() { }

  ngOnInit(): void {
  }

}
