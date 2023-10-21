import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  constructor(private storageService: StorageService, private auth:AuthService ) {}

  ngOnInit(): void {
    this.storageService.loadUser();
  }

  isloggedIn(): boolean {
    return this.auth.isloggedIn();
  }
}