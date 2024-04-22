import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasklistRoutingModule } from './tasklist-routing.module';
import { TasklistComponent } from './tasklist.component';


@NgModule({
  declarations: [
    TasklistComponent
  ],
  imports: [
    CommonModule,
    TasklistRoutingModule
  ],
  exports:[
    TasklistComponent
  ],
})
export class TasklistModule { }
