import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jira-clone-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title?: string;
  @Input() url?: string;
}
