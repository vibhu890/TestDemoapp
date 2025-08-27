import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-token-missing-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 1000;
    ">
      <div style="
        background: white;
        padding: 4px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        width: 400px;
      ">
        <h2 mat-dialog-title>{{ data.title }}</h2>
        <mat-dialog-content>
          <p>{{ data.message }}</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
          <button mat-button mat-dialog-close>{{ data.buttonText || 'OK' }}</button>
        </mat-dialog-actions>
      </div>
    </div>
  `
})
export class DialogComponent {
  public data = inject(MAT_DIALOG_DATA) as { title: string; message: string; buttonText?: string };
}

