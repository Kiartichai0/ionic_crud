import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = []
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemDueDate 
  itemPriority
  itemCategory


  constructor(public modalCtlr: ModalController) {

   }

  ngOnInit() {
    this.categories.push('Flanker')
    this.categories.push('Supporter')
    this.categories.push('Roamer')
    this.categories.push('Anchor')
  }
  
  add(){
    // tslint:disable-next-line: max-line-length
    this.newTaskObj = ({itemName: this.itemName, itemDueDate: this.itemDueDate, itemPriority: this.itemPriority, itemCategory: this.categorySelectedCategory})
    // console.log(this.newTaskObj);
    // tslint:disable-next-line: semicolon
    this.dismis()
  }
  // tslint:disable-next-line: no-trailing-whitespace
  
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
  }

}
