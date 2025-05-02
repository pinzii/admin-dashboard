import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent {

  user = {
    id: localStorage.getItem('id'),
    username: localStorage.getItem('username') || '',
    email: localStorage.getItem('email') || ''
  };
  
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.profileForm = this.fb.group({
      username: [localStorage.getItem('username') || '', Validators.required],
      email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const { username, email } = this.profileForm.value;
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      alert('Perfil actualizado');
    }
  }

  guardarCambios() {
    const updatedUser = {
      username: this.user.username,
      email: this.user.email
    };
   
    const userId = localStorage.getItem('id');
  
    this.http.patch(`http://localhost:3000/users/${userId}`, updatedUser).subscribe({
      next: () => {
        
        localStorage.setItem('username', this.user.username);
        localStorage.setItem('email', this.user.email);
        alert('Cambios guardados y actualizados en la base de datos');
      },
      error: () => {
        alert('Error al guardar en la base de datos');
      }
    });
  }
}
