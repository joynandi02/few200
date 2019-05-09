import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooktrackingComponent } from './booktracking.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [BooktrackingComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('addbooksFeature', reducers)
  ],
  exports: [BooktrackingComponent]
})
export class BooktrackingModule { }
