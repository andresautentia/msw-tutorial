import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-msw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msw-test.component.html',
  styleUrl: './msw-test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MswTestComponent {}
