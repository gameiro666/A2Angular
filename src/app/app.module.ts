import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FelipeHomeComponent} from './felipe-home/felipe-home.component'
import { FelipeTasksComponent} from './felipe-tasks/felipe-tasks.component'
import { RouterModule } from '@angular/router';
import { FelipeTasksService} from './felipe-tasks.service'


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: FelipeHomeComponent},
      {path: 'tasks', component: FelipeTasksComponent}

    ]) 
  ],
  declarations: [ AppComponent, HelloComponent, FelipeHomeComponent, FelipeTasksComponent  ],
  bootstrap:    [ AppComponent ],
  providers: [FelipeTasksService]
})
export class AppModule { }
