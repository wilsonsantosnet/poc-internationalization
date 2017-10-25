import { Component } from '@angular/core';
import { FormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hoje = new Date();
  valor = 10.55;
  preco = 10.56;
  qtd = 2;
  total = this.calcTotal();

  onChange() {
    this.total = this.calcTotal();
    console.log('onChange', this.qtd, this.preco, this.total);
  }

  onModelChange(event) {
    this.preco = event;
  }
  calcTotal() {
    return  this.qtd * parseFloat(this.preco.toString().replace(',', '.'));
  }

}
