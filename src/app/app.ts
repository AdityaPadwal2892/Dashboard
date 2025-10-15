import { Component, signal } from '@angular/core';
import { LayoutComponent } from './layout/layout'; // adjust the path if needed
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header';  // Import HeaderComponent
import { RouterModule } from '@angular/router';
import { BlockSection } from './block-section/block-section';
import { PurchaseProductGraphComponent } from './purchase-product-graph/purchase-product-graph';
import { NgChartsModule } from 'ng2-charts';
import { GraphSectionComponent } from "./graph-section/graph-section.component";
import { PrnTableComponent } from './prn-table/prn-table.component'; // <-- import the standalone PRN table component


@Component({
  selector: 'app-root',
  imports: [LayoutComponent, MatIconModule, HeaderComponent,
    RouterModule, BlockSection, PurchaseProductGraphComponent, NgChartsModule, GraphSectionComponent,PrnTableComponent],
  templateUrl: './app.html',
   standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard-app');
}
