import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { heureValidator } from '../../validators/heure.validator';

@Component({
  selector: 'app-marees-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    CalendarModule,
    InputNumberModule,
  ],
  templateUrl: './marees-form.component.html',
  styleUrl: './marees-form.component.css',
})
export class MareesFormComponent implements OnInit {
  mareesForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.mareesForm = this.fb.group({
      heureDebut: ['', [Validators.required, heureValidator()]],
      heureFin: ['', [Validators.required, heureValidator()]],
      hauteurEauDebut: [
        '',
        [Validators.required, Validators.pattern(/^\d+\.?\d*$/)],
      ],
      hauteurEauFin: [
        '',
        [Validators.required, Validators.pattern(/^\d+\.?\d*$/)],
      ],
      heureDemandee: ['', [Validators.required, heureValidator()]],
    });
  }

  onSubmit() {
    if (this.mareesForm.valid) {
      console.log(this.mareesForm.value);
      // Traitement des données du formulaire
    }
  }
}
