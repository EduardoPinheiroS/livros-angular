import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Certifique-se que esta linha está aqui
import { RouterOutlet, RouterLink } from '@angular/router'; // <-- Certifique-se que esta linha está aqui

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink], // <-- Certifique-se que estas linhas estão aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'livros-angular';
}