import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() all: number = 0;
  @Input() TV: number = 0;
  @Input() phone: number = 0;
  @Input() tablet: number = 0;
  @Input() watch: number = 0;

  selectedCategory: string = 'all';

  @Output()
  categoryChanged: EventEmitter<string> = new EventEmitter<string>();

  onCategoryChange() {
    this.categoryChanged.emit(this.selectedCategory);
  }
}
