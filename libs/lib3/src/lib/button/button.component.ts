import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'jira-clone-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() href?: string;
}
