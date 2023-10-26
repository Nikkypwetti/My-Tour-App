import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
