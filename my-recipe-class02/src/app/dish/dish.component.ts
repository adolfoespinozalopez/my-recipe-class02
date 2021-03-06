import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  // @Input() dish: Dish;
  // @Input() name = 'ceviche';
  private _name: string;
  private _totalIngredients: number;
  private _spicy: number;

  get name(): string{
    return this._name;
  }

  @Input() set name(value: string){
    this._name = this.generateName(value);
    console.log(':: -> ', this._name);
  }
  constructor() { }

  ngOnInit(): void {
  }

  @Input() set dish(value: Dish){
    console.log(':: -> ', value);
    this._name = this.generateName(value.name);
    this._totalIngredients = value.ingredients.length;
    this._spicy = value.spicy;
  }

  generateName(name: string): string{
    return `El nombre es : ${name}`;
  }

  get totalIngredients(): number{
    return this._totalIngredients;
  }
  get spicy(): number{
    return this._spicy;
  }

  showSpicy(value: number): string{
    return (value > 2) ? 'spicy' : 'no-spicy';
  }
}
