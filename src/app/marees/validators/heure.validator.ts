// src/app/marees/validators/heureValidator.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function heureValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valeur = control.value;
    if (valeur) {
      const parties = valeur.split(':');
      const heures = parseInt(parties[0], 10);
      const minutes = parseInt(parties[1], 10);

      if (
        parties.length !== 2 ||
        isNaN(heures) ||
        isNaN(minutes) ||
        heures < 0 ||
        heures > 23 ||
        minutes < 0 ||
        minutes > 59
      ) {
        return { heureInvalide: true };
      }
    }
    return null;
  };
}
