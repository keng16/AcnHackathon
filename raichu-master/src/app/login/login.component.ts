import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  signupUsers: any[] = [];
  signupObj:any = {
    username: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    username: '',
    password: ''
  };

  constructor(private router:Router, private http: HttpClient) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('ssignUpUsers');
    if(localData !=null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

onSignUp() {
  const csrfToken = this.getCookie('XSRF-TOKEN'); // Assuming the CSRF token is stored in this cookie
  let headers = new HttpHeaders();
  if (csrfToken) {
    headers = headers.set('X-XSRF-TOKEN', csrfToken); // Only set header if the token exists
  }

  this.http.post('http://localhost:8080/api/register', this.signupObj, { withCredentials: true, headers })
  .subscribe({
    next: (res) => {
      alert('Registration successful');
      this.signupObj = { username: '', email: '', password: '' };
    },
    error: (err) => {
      alert('Registration failed');
    }
  });
}


  onLogin() {
    this.http.post('http://localhost:8080/api/login', this.loginObj)
      .subscribe({
        next: (res) => {
          alert('Login successful');
          this.router.navigate(['/Home']);
        },
        error: (err) => {
          alert('Invalid credentials');
        }
      });
  }

  // Utility function to get the CSRF token from the cookies
getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

}
