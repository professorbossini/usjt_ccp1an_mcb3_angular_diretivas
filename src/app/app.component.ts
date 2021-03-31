import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  lembretes: Array<string> = [];
  lembrete: string;
  salvar(): void{
    this.lembretes = [this.lembrete, ...this.lembretes];
    this.lembrete = "";
  }
}
