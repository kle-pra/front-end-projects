import { Item } from './../../models/Item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


  item: Item = {
    title:null,
    description:null
  };
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit(){
    let item = this.item;
    if(item.title!=null && item.title!="" && item.description!=null && item.description!=""){
      this.itemService.addItem(item);
      item.description=null;
      item.title=null;
    }

  }

}
