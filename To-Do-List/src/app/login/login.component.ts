import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  alert:boolean=false;
  data1:any;

  public signupform!: FormGroup;
  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private route:Router) {
    this.http.get<any>("http://localhost:3000/signup").subscribe(pri=> {
      this.data1=pri})
  }

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      fullname:['',Validators.requiredTrue],
      email:['',Validators.requiredTrue],
      password:[''],
      phoneNo:['']
    })

    this.loginForm = this.formBuilder.group({
      name:[''],
      password:['']
    })
  }

  signup(){
    this.http.post<any>("http://localhost:3000/signup",this.signupform.value).subscribe(res=>{alert("duplicate data !!!");
    this.signupform.reset();
    this.route.navigate(['login'])})

  }

  login()
  {
    this.http.get<any>("http://localhost:3000/signup").subscribe(data=>{
      const user = data.find((a:any)=>{
        return a.name===this.loginForm.value.fullname && a.password===this.loginForm.value.password});
    if(user){
      this.loginForm.reset();
      this.route.navigate(['home'])}
      else{
      this.alert=true;
    }})
  }
  // displayData()
  // {
  //   this.http.get<any>("http://localhost:3004/signup").subscribe(pri=> {
  //     // const user = data.findAll((a: any) => {
  //     //   this.demo.push(a.name);
  //     //   }
  //     this.data1=pri;
  //   })
  // }

  close()
  {
    this.alert=false;
  }

}
