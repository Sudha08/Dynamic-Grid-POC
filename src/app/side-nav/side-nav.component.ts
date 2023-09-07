import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() sideNavStatus: boolean = false;

  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "Scheme 1",
      link: "/plan1",
      icon: "bi bi-archive icon",
      sub_menu: []
    }, {
      link_name: "Scheme 2",
      link: null,
      icon: "bi bi-folder icon",
      sub_menu: [
        {
          link_name: "Plan 1",
          link: "/plan1",
        }, {
          link_name: "Plan 2",
          link: "/plan2",
        }, {
          link_name: "Plan 3",
          link: "/plan3",
        }
      ]
    }, {
      link_name: "Scheme 3",
      link: null,
      icon: "bi bi-folder icon",
      sub_menu: [
        {
          link_name: "Plan 1",
          link: "/plan1",
        }, {
          link_name: "Plan 2",
          link: "/plan 2",
        }
      ]
    }, {
      link_name: "Scheme 4",
      link: "/plan1",
      icon: "bi bi-archive icon",
      sub_menu: [
        {
          link_name: "Plan 1",
          link: "/plan1",
        }
      ]
    }];

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }

  }
