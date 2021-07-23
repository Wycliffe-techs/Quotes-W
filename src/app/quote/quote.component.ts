import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Quote } from '../module/quote';
 @Component({
   selector: 'app-quote',
   templateUrl: './quote.component.html',
   styleUrls: ['./quote.component.css']
 })
 export class QuoteComponent implements OnInit {
   
  @Output() myData = new EventEmitter()
   quotes:Quote[]=[
     new Quote('Everything is designed. Few things are designed well.', 'Brian Reed', new Date(2021,6,20), 0, 0 ),
     new Quote( 'We have to stop optimizing for programmers and start optimizing for users.','Jeff Atwood', new Date(2021,6,20),  0,0 ),
   ]
 completeGoal(isComplete: any, index: number): void{
   if (isComplete) {
     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
     if (toDelete){
       this.quotes.splice(index,1)
     }
   }
 }

 addNewQuote(quote: Quote): void{
   const quoteLength = this.quotes.length;
   quote.date = new Date (quote.date)
   quote.id = quoteLength+1;
 quote.like = quoteLength;
  this.quotes.push(quote);
 }

 function (): void { }
  ngOnInit(): void {
  }
 }

function ngOnInit(): void {
     throw new Error('Function not implemented.');
   }
