import { Component, importProvidersFrom, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, FileIcon, House, Home } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, LucideAngularModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AddressBookManagement2');
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(LucideAngularModule.pick({ FileIcon, House, Home }))],
});