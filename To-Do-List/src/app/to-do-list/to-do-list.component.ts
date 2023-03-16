import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Itask} from "../Model/task";
import {ApiService} from "../services/api.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit{

  // ! tells thats value will be assigned later
  todoForm !:FormGroup;
//create 3 diff list

  data:any;
  tasks:Itask[]=[];
  inprogess:Itask[]=[];
  done:Itask[]=[];
  updateId!:any;
  isEditEnabled:boolean=false;
data1:any=[];
  constructor(private fb :FormBuilder , private api:ApiService, private http:HttpClient) {
    this.http.get<any>("http://localhost:3000/signup").subscribe(pri=> {
      this.data1=pri})
  }
  ngOnInit():void{
    this.todoForm=this.fb.group({
      item :["",Validators.required],
      place :['',Validators.required],
      date:['']

    })
  }
  // add task
  addTask(name:any)
  {
      this.tasks.push({
        description: this.todoForm.value.item,
        done: false,
        place: this.todoForm.value.place,
        date: this.todoForm.value.date,
      });
    this.todoForm.reset();
  }
  //delete task
  deleteTask(id:number){
    this.tasks.splice(id,1)
    // this.api.deleteProduct(id).subscribe();
    // this.getAllProduct();
  }
  //delete InProgess
  deleteInProgess(i:number){
    this.inprogess.splice(i,1)

  }
  //update task
  updateTask(item:Itask,i:number){
    this.todoForm.controls['item'].setValue(item.description);
    this.todoForm.controls['place'].setValue(item.place);
    this.todoForm.controls['date'].setValue(item.date);
    this.updateId=i;
    this.isEditEnabled=true;
  }
  edit()
  {
    this.tasks[this.updateId].description=this.todoForm.value.item;
    this.tasks[this.updateId].place=this.todoForm.value.place;
    this.tasks[this.updateId].date=this.todoForm.value.date;

    this.tasks[this.updateId].done=false;
    this.todoForm.reset();
    this.updateId=undefined;
    this.isEditEnabled=false;
  }
  drop(event: CdkDragDrop<Itask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  searchText:string='';
  term: any;
}
