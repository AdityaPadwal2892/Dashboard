import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-graph-section',
  standalone: true,
  imports: [NgChartsModule, NgIf],
  templateUrl: './graph-section.component.html',
  styleUrls: ['./graph-section.component.css']
})
export class GraphSectionComponent {
  isBrowser: boolean;

  // Bar chart
  barChartType: 'bar' = 'bar';
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { data: [10, 20, 30, 40, 50], label: 'Sales' },
      { data: [5, 15, 25, 35, 45], label: 'Profit' }
    ]
  };
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };

  // Pie chart
  pieChartType: 'pie' = 'pie';
  pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      { data: [30, 50, 20], label: 'Products' }
    ]
  };
  pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
