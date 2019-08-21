import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Be true to your work your word and your friend',  '-Christine Tina', 'christine',new Date(2019,6,9) ),
    new Quote(2, 'Life is what happens when you are busy making other plans','-John Lennon','christine',new Date(2019,7,9) ),
    new Quote(3, 'Only the wisest and stupidest of men never change', '-Confucios','christine' ,new Date(2019,6,9)),
   new Quote(4 ,'if you change the way you look at things,the things you look at change',  '-Wayne Duer','christine',new Date(2019,8,9) )
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  quoteDelete(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Confirm if you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
