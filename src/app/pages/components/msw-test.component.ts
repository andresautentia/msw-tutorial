import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-msw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msw-test.component.html',
  styleUrl: './msw-test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MswTestComponent {
  readonly user = signal<User | null>(null);

  constructor(private http: HttpClient) {}

  async getUser() {
    const url = `https://example.com/user`;
    try {
      const result = await firstValueFrom(this.http.get<User>(url));
      this.user.set(result);
    } catch (error) {
      this.user.set(null);
    }
  }
}
