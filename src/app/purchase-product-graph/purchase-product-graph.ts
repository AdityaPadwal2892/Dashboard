import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-purchase-product-graph',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './purchase-product-graph.html',
  styleUrls: ['./purchase-product-graph.css']
})
export class PurchaseProductGraphComponent {
  
}
