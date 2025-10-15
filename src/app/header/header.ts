import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
   standalone: true,         // <-- add this
  imports: [MatIconModule], // <-- import MatIconModule here
  styleUrls: ['./header.css']
})
export class HeaderComponent { }
