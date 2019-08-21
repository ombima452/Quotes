import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})

export class QuoteDetailComponent implements OnInit {

 
  @Input() quote: Quote;
 @Output() isComplete = new EventEmitter<boolean>();
 quoteDelete(complete: boolean) {
   this.isComplete.emit(complete);
 }
 upvotes: number;
 downvotes: number;

  constructor() {
    this.upvotes = 0;
    this.downvotes = 0;
  }
  upVote(): boolean {
    this.upvotes += 1;
    return false;
  }
  downVote(): boolean {
    this.downvotes += 1;
    return false;
  }
  
  ngOnInit() {
  }

}
