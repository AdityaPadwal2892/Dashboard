import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

export interface PRNElement {
  prnNo: string;
  siteName: string;
  status: string;
  date: Date;
}

@Component({
  selector: 'app-prn-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './prn-table.component.html',
  styleUrls: ['./prn-table.component.css']
})
export class PrnTableComponent {
  displayedColumns: string[] = ['prnNo', 'siteName', 'status', 'date'];

  prnData: PRNElement[] = [
    { prnNo: 'PRN001', siteName: 'Site A', status: 'Approved', date: new Date() },
    { prnNo: 'PRN002', siteName: 'Site B', status: 'Pending', date: new Date() },
    { prnNo: 'PRN003', siteName: 'Site C', status: 'Rejected', date: new Date() },
    { prnNo: 'PRN004', siteName: 'Site D', status: 'Pending', date: new Date() },
    { prnNo: 'PRN005', siteName: 'Site E', status: 'Approved', date: new Date() },
    { prnNo: 'PRN006', siteName: 'Site F', status: 'Pending', date: new Date() },
    { prnNo: 'PRN007', siteName: 'Site G', status: 'Approved', date: new Date() }
    // Add more rows as needed
  ];
}
