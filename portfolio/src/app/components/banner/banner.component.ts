import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() title?: string;
  isMenuOpen : boolean = false;
  menuItems: MenuItem[] = [
    {
      link: "/home",
      title: "Accueil"
    },
    {
      link: "/web-development",
      title: "Développement web"
    },
    {
      link: "/graphism",
      title: "Graphisme / Websdesign"
    }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
