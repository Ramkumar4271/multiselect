import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  leftFormControl: FormControl;
  rightFormControl: FormControl;
  leftMultiSelect: Set<string>;  
  rightMultiSelect: Set<string>;

  constructor() {
    this.leftFormControl =  new FormControl([]);
    this.rightFormControl = new FormControl([]);
    this.leftMultiSelect = new Set(['0-24', '100-249', '250-499']);
    this.rightMultiSelect = new Set(['25-99']);
  }  
  ngOnInit(): void {
  }

  addLeftSelectFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.leftMultiSelect.add(event.value);
      event.chipInput!.clear();
    }
  }

  moveSelectToRight(select: string) {
    this.leftMultiSelect.delete(select);
    this.rightMultiSelect.add(select);
  }

  moveSelectToLeft(select: string) {
    this.rightMultiSelect.delete(select);
    this.leftMultiSelect.add(select);
  }

  deleteSelectFromLeft(select: string) {
    this.leftMultiSelect.delete(select);
  }  

  selectAll() {
    this.leftMultiSelect.forEach((select: string) => this.rightMultiSelect.add(select));
    this.leftMultiSelect.clear();
  }

  clearAll() {
    this.rightMultiSelect.forEach((select: string) => this.leftMultiSelect.add(select));
    this.rightMultiSelect.clear();
  }

}
