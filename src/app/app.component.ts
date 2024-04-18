import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <input type="text" [formControl]="searchControl" placeholder="Search">
  `,
  styles: [],
})
export class AppComponent {
  searchControl = new FormControl('', { nonNullable: true });

  constructor() { 
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe((value) => {
        console.log(value);
      });
  }

}
