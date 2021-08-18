import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/navbar/menu';
import { dataMenu } from '../../../assets/data/dataMenu';

@Component({
  selector: 'app-menu-in-home-page',
  templateUrl: './menu-in-home-page.component.html',
  styleUrls: ['./menu-in-home-page.component.css'],
})
export class MenuInHomePageComponent implements OnInit {
  menu: Menu[] = dataMenu;

  constructor() {}

  ngOnInit(): void {}
}
