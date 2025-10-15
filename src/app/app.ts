import { Component, signal } from '@angular/core';
import { LayoutComponent } from './layout/layout'; // adjust the path if needed
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header';  // Import HeaderComponent
import { RouterModule } from '@angular/router';
import { BlockSection } from './block-section/block-section';
import {PurchaseProductGraph } from './purchase-product-graph/purchase-product-graph'

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, MatIconModule,HeaderComponent,RouterModule,BlockSection,PurchaseProductGraph],
  templateUrl: './app.html',
   standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard-app');
}
