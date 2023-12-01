import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-login-unicomer',
  standalone: true,
  imports: [],
  templateUrl: './login-unicomer.component.html',
  styleUrl: './login-unicomer.component.scss'
})
export class LoginUnicomerComponent {

  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle('Unicomer - Login');
  }
}
