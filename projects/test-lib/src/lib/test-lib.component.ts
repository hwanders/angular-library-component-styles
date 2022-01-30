import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p>
      test-lib works!
    </p>
  `,
  styleUrls: ['./test-lib.component.css'] /** remove the style to make it build again */
})
export class TestLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
