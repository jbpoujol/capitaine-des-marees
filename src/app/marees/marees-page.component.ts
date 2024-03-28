import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MareesFormComponent } from './components';

@Component({
  selector: 'app-marees-page',
  standalone: true,
  imports: [CommonModule, MareesFormComponent],
  templateUrl: './marees-page.component.html',
  styleUrl: './marees-page.component.css',
})
export class MareesPageComponent {}
