import { Component, Input } from '@angular/core';
import { IHousinglocation } from '../interfaces/housinglocation';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: IHousinglocation;
}
