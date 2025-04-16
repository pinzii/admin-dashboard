import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(
    private snackBar: MatSnackBar, 
    private router: Router,
    private authService: AuthService
  ) {}

  register(): void {
  this.authService.register(this.username, this.email, this.password).subscribe({
    next: () => {
      this.snackBar.open('Usuario registrado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/login']);
    },
    error: () => {
      this.snackBar.open('Ocurrió un error al registrar', 'Cerrar', { duration: 3000 });
    }
  });
}
}
