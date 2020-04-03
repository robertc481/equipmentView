import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss']
})
export class ItemPreviewComponent implements OnInit {


  selected: any = null;
  
  previewedItem = {
    name:'',
    type:'',
    price: 0,
    key: ''

  }

  constructor(private itemsService: ItemsService) { }

  getSelectedOne = () => {
    this.selected = this.itemsService.selected;
  }

  ngOnInit(): void {
    document.body.addEventListener('click',() => {
      this.selected = this.itemsService.selected;
      this.previewedItem = this.selected;
    })
  }
 
  closePreview = () => {
    const preview = document.getElementById('eqPreview');

    preview.classList.add('closed')
  }
  openChest = () => {
    const newItemfromChest = {
      name: this.selected.name,
      price: this.selected.price,
      key: this.selected.key,
      type: this.selected.type === 'chest' ? 'reward' : null,
    };
    if ( this.selected.type === 'chest') {
      this.itemsService.openItem(newItemfromChest);
    }
    this.itemsService.updateEquipment(newItemfromChest);
  }
}
