import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MareesPageComponent } from '@marees';

@Component({
  standalone: true,
  imports: [RouterModule, MareesPageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
