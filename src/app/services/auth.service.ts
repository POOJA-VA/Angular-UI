import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storage: StorageService) {}

  Validateuser(user: User): boolean {
    let users = this.storage.getUsers();
    let Validateuser: boolean = false;
    for (let u of users) {
      if (u.email === user.email && u.password === user.password) {
        this.storage.setLoggedInUser(u);
        Validateuser = true;
        break;
      }
    }
    return Validateuser;
  }

  logout() {
    this.storage.removeLoggedInUser();
  }

  isloggedIn(): boolean {
    return this.storage.isUserLoggedIn();
  }

  getLoggedInUser(): User {
    return this.storage.getLoggedInUser();
  }

  isValidRegister(user: User): boolean {
    let users: User[] = this.storage.getAllUsers();
    return (
      users.findIndex(
        (u) => u.email === user.email && u.password === user.password
      ) !== -1
    );
  }
}
