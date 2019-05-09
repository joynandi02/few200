import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoComponent } from './features/todo/todo.component';
import { BooktrackingComponent } from './features/booktracking/booktracking.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shopping',
    component: ShoppingListComponent
  },

  {
    path: 'counter',
    component: CounterComponent
  },

  {
    path: 'todo',
    component: TodoComponent
  },

  {
    path: 'booktracking',
    component: BooktrackingComponent
  },

  {
    path: '**',
    redirectTo: 'home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
