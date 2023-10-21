import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  error: string = '';
  constructor(private storage :StorageService, private route: Router) {}

  onSubmit(registerForm: NgForm) {
    console.log(registerForm.value);

    let users = this.storage.getUsers();
    let userhadAccount = users.filter((user : {email: any}) => user.email === registerForm.value.email); 


      if (userhadAccount.length){
        this.error="This mail is already Used!!!";
      }else{
        this.storage.adduser(registerForm.value, registerForm.value.password);
        this.route.navigate(['login'],{replaceUrl: true}) 
      }
    }
  }