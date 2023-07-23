import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navBG!: any;

  @HostListener('document:scroll') scrollOver() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navBG = {
        'background-color': 'rgba(0, 0, 0, 0.05)',
        // 'background-color': 'black',
      };
    } else {
      this.navBG = {};
    }
  }

  onDropdownItemClick() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNavAltMarkup = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarNavAltMarkup) {
      navbarToggler.classList.add('collapsed');
      navbarNavAltMarkup.classList.remove('show');
    }
  }
}
