import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // random_T: string[] = ['a','b','c','d'];
  // let randomNumber = Math.floor(Math.random() * random_T.length);
  random_Text = lorem.lines(1);
  txt: string = '';

  checkTyping(value: any) {
    console.log(value);
    console.log(typeof this.random_Text);
    //convert random text to array
    console.log(Array.from(this.random_Text));
    console.log(Array.from(this.random_Text).length);
  }
}
