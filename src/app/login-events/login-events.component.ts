import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-events',
  templateUrl: './login-events.component.html',
  styleUrls: ['./login-events.component.scss']
})
export class LoginEventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarUser() {
    this.router.navigate(['/list']);
  }
}
