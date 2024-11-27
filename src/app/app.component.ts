import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MatSharedModule } from './modules/mat-shared.module'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSharedModule],
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

}
