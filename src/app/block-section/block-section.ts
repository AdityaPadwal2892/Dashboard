import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-block-section',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './block-section.html',
  styleUrls: ['./block-section.css']
})
export class BlockSection {
 blocks: { label: string; count: number; icon: string; color: string }[] = [
  { label: 'Pending PRN', count: 12, icon: 'hourglass_empty', color: '#FF9800' }, // Orange
  { label: 'Total PO', count: 5, icon: 'check_circle', color: '#4CAF50' },        // Green
  { label: 'Pending PO Approval', count: 2, icon: 'cancel', color: '#F44336' },   // Red
  { label: 'Total PRN', count: 19, icon: 'description', color: '#3F51B5' },       // Indigo
  { label: 'In Progress', count: 7, icon: 'loop', color: '#2196F3' },             // Blue
  { label: 'Completed', count: 14, icon: 'done_all', color: '#009688' }      // Teal
 
];

}
