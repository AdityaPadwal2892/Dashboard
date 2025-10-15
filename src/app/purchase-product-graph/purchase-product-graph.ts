import { Component } from '@angular/core';

import { NgChartsModule } from 'ng2-charts/lib/ng-charts.module';


@Component({
  selector: 'app-purchase-product-graph',
  imports: [NgChartsModule],
  templateUrl: './purchase-product-graph.html',
  styleUrl: './purchase-product-graph.css'
})
export class PurchaseProductGraph {

   public barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    }
  };

  public barChartLabels = ['Product A', 'Product B', 'Product C', 'Product D'];
  public barChartData = [
    { data: [120, 90, 75, 140], label: 'Quantity' }
  ];
}
