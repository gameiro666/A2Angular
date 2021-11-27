import { Component, OnInit } from '@angular/core';
import { FelipeTasksService} from '../felipe-tasks.service'

@Component({
  selector: 'app-felipe-tasks',
  templateUrl: './felipe-tasks.component.html',
  styleUrls: ['./felipe-tasks.component.css']
})
export class FelipeTasksComponent implements OnInit {



  constructor(public tasks: FelipeTasksService) {
    
   }

  ngOnInit() {
  }

 
 

}