import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list ';
  list: any[] = [];
  newTask: any;

  addTask(item:string) {
    item = this.newTask
    console.log(item)
    this.list.unshift({id: this.list.length, name: item})
    console.log(this.list)
    this.newTask = '';
  }

  deleteTask(id:number){
    this.list = this.list.filter(item => item.id != id)
  }


}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'To do list ';
//   list: any[] = [];
//   newTask: string | undefined;

//   addTask(item:string) {
//     console.log(item)
//     this.list.unshift({id: this.list.length, name: item})
//     console.log(this.list)
//     item = ''
//   }

//   deleteTask(id:number){
//     this.list = this.list.filter(item => item.id != id)
//   }


// }

