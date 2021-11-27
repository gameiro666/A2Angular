import { Injectable } from '@angular/core';

@Injectable()
export class FelipeTasksService {
 
  public list = [];
  public task = "";
  public text: string;
  

  constructor() { }


  addTask(){
    this.task = this.text
    this.list.push(this.text);
    
  }

  deleteTask(){    
    this.list.splice(this.list.indexOf(this.task, -1 ));
  }



  

}

