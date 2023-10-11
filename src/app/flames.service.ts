import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlamesService {
  constructor() {}

  calculateFlames(name1: string, name2: string): string {
    let flames = 'FLAMES';
    let result = '';

    console.log(`Initial name1: ${name1}, name2: ${name2}`);

    // Remove spaces and convert to uppercase
    name1 = name1.replace(/\s+/g, '').toUpperCase();
    name2 = name2.replace(/\s+/g, '').toUpperCase();

    console.log(`Processed name1: ${name1}, name2: ${name2}`);

    // Count the total unique characters in both names
    let totalUniqueChars = 0;
    for (let char of name1) {
      if (name2.includes(char)) {
        name2 = name2.replace(char, '');
      } else {
        totalUniqueChars++;
      }
    }
    totalUniqueChars += name2.length;

    console.log(`Total Unique Chars: ${totalUniqueChars}`);

    // Calculate the FLAMES result
    if (totalUniqueChars > 0) {
      let position = 0;
      while (flames.length > 1) {
        position = (position + totalUniqueChars - 1) % flames.length;
        flames = flames.slice(0, position) + flames.slice(position + 1);
      }
      result = flames;
    }

    // Convert the result to a meaningful string
    switch (result) {
      case 'F':
        return 'Friends';
      case 'L':
        return 'Love';
      case 'A':
        return 'Affection';
      case 'M':
        return 'Marriage';
      case 'E':
        return 'Enemies';
      case 'S':
        return 'Siblings';
      default:
        return 'Unknown';
    }

    return result;
  }
}
