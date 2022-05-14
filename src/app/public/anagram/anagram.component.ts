import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {

  listCompare: string[] = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
  list: string[] = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
  result: string[]

  constructor() { }


  ngOnInit(): void {
    this.result = []
    for (let i = 0; i < this.listCompare.length; i++) {
      debugger
      let sortedWord = this.sortedCharArrayForString(this.listCompare[0])
      for (let y = 0; y < this.listCompare.length; y++) {
        let sortedWordCompare = this.sortedCharArrayForString(this.listCompare[y])
  
        if(sortedWord === sortedWordCompare) {
          this.result.push(this.listCompare[y])
          const index = this.listCompare.indexOf(this.listCompare[y])
          if (index !== -1) {
            this.listCompare.splice(index, 1);
          }
          y = -1
        }
      }
      i = -1
    }

  }


  private sortedCharArrayForString(word: string): string {
    return [...word.toLowerCase()].sort().join('')
  }

}
