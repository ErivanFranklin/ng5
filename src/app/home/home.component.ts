import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { goals } from '../animations/animations';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ goals ]
})
export class HomeComponent implements OnInit {
  itemCount: number = 4;
  btnText: string = 'Add an Item';
  goalText: string = 'My first life goal';
  goals = [];
  
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res)
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);

  }

  removeItem(i){
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }

}
