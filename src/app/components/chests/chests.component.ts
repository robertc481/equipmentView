import { Component, OnInit} from '@angular/core';
import {ItemsService} from '../../services/items.service';
@Component({
  selector: 'app-chests',
  templateUrl: './chests.component.html',
  styleUrls: ['./chests.component.scss']
})
export class ChestsComponent implements OnInit {
  title: string = 'Skrzynie';
  

  selected = null;
  
  itemType = {
    type:'chest',
    name: `Puszka Pandory`,
    price: 0 ,
    key: this.itemsService.getKeyCode(),
  };
  myItems = [
    
  ];
  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.myItems.push(this.itemsService.getItem(this.itemType.type));
    console.log(this.itemsService.getItem(this.itemType.type))

    setInterval(()=>{
      if(this.myItems[0] !== this.itemsService.eqItems.chest){
        this.myItems = this.itemsService.eqItems.chest
      }
    },1000)
    
  }
  ngOnChange(){
    
  }
  
  selectThis = (item) => {
    this.selected = item;
    this.itemsService.selected = this.selected;
    this.itemsService.showPreview();
    
  }
}
