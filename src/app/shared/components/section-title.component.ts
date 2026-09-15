import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="mb-10 flex items-center gap-4">
      <div class="h-px flex-1 bg-gradient-to-r from-transparent via-lightBlue to-transparent"></div>
      <p class="font-title text-2xl text-white sm:text-4xl">{{ label() }}</p>
      <div class="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-bloom to-transparent"></div>
    </div>
  `
})
export class SectionTitleComponent {
  label = input.required<string>();
}
