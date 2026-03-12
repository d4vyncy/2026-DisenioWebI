import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { FooterComponent } from './components/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appSistema');
}
