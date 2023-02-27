import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  random_Text = lorem.lines(1);
  enterText = '';
  flag = false;
  activeText = 'gray';

  onInput(input: any) {
    console.log(input.value.split(''));
    //get the value of random text
    console.log(this.random_Text);
    this.enterText = input.value;
    //compare input to random text
    // if (input.value === this.random_Text) {
    //   console.log('congrats you win');
    //   this.flag = true;
    // } else {
    //   console.log('not correct');
    //   this.flag = false;
    // }

    //compare each alphabet
    //if right => green, wrong => red, nothing => gray
    // let inputValue = Array.from(input.value);
    // let textValue = Array.from(this.random_Text);
    // for (var char1 of this.random_Text) {
    //   for (var char2 of input.value) {
    //     if (char1 !== char2) {
    //       this.activeText = 'red';
    //     } else if (char1 === char2) {
    //       this.activeText = 'green';
    //     } else {
    //       this.activeText = 'gray';
    //     }
    //   }
    // }
  }
  compare(char: string, enterText: string): string {
    if (!enterText) {
      return 'gray';
    }
    if (char === enterText) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
