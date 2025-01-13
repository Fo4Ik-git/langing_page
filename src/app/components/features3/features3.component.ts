import { Component } from '@angular/core';
import { equipmentData, Equipment } from './data';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-features3',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './features3.component.html',
  styleUrl: './features3.component.css'
})
export class Features3Component {

  equipment: Equipment[] = equipmentData.map(item => ({
    ...item,
    image: `assets/img/features3/${item.image}`
  }));

  isExpanded = false;
  selectedItem: any = null;
  isModalOpen = false;

  toggleView() {
    this.isExpanded = !this.isExpanded;
  }

  // Open modal window
  openModal(item: any) {
    this.selectedItem = item;
    this.isModalOpen = true;
  }

  // Close modal window
  closeModal() {
    this.isModalOpen = false;
    this.selectedItem = null;
  }
}
