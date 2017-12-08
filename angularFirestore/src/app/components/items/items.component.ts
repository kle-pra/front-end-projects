import { Item } from './../../models/Item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private itemService: ItemService) { }
  
  items: Item[];
  itemToEdit:Item={
    id:null,
    description:null,
    title:null
  };
  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);
    }, error => {
      // console.log(error)
    });
  }

  onDelete(id){
    this.itemService.deleteItem(id);
  }

  onEdit(item:Item):void{
    this.itemToEdit= {
      id:item.id,
      title:item.title,
      description:item.description
    };
  }

  cancelUpdate():void{
    this.itemToEdit=null;
    
  }

  updateItem(item:Item){
    this.itemService.updateItem(item);
    this.itemToEdit=null;
  }

}
