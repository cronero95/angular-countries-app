import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit{

  private debouncer: Subject<string> = new Subject();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.onValue.emit(value);
      })
  }

  emitValue(value: string): void {
    this.onValue.emit(value)
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }
}
