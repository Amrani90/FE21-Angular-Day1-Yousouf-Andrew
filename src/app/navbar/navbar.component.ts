import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  navLink1: string;
  navLink2: string;
  navLink3: string;
  navLink4: string;
  navLink5: string;
  navLink6: string;
  navLink7: string;
  dropDown1: string;
  dropDown2: string;
  dropDown3: string;
  dropDown4: string;
  brand: string;

  constructor() {
    this.navLink1 = "Home"
    this.navLink2 = "About"
    this.navLink3 = "Hot tours"
    this.navLink4 = "Blog"
    this.navLink5 = "Schedule"
    this.navLink6 = "Gallery"
    this.navLink7 = "Contacts"
    this.dropDown1 = "History"
    this.dropDown2 = "Testimonials"
    this.dropDown3 = "Our Team"
    this.dropDown4 = "F.A.Q Page"
    this.brand = "Winter Tours"
  }

  ngOnInit(): void {
  }

}
