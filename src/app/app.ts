import { Component } from '@angular/core';
import { EntornoComponent } from './entorno/entorno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EntornoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
