import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

console.log(AuthService);

import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  user = new User();
  registrationErrors: string[] = [];

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }


  onSubmit(): void {
    this.auth.register(this.user)
      .then(user => {
        this.router.navigate(['/books/list']);
      })
      .catch(() => {});
  }
}
