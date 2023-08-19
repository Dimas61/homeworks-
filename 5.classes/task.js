class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix () {
       return this.state *= 1.5;
    }

    set state (value) {
        if(value < 0) {
          return this._state = 0;

        } else if (value > 100) {
           return this._state = 100;
        
        } else {
           return this._state = value;
        }
    }

    get state () {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.state = 100;
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.state = 100;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'novel';
    }
} 

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'fantastic';
    }
} 

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'detective';
    }
} 



let booking = new DetectiveBook('Lermontov', 'Грокаем алгоритмы', 2005, 292);
let booking2 = new FantasticBook('Аркадий и Борис Стругацкие', 'Пикник на обочине', 1972, 168);


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state < 30) return;
        this.books.push(book);
    }

    findBookBy(type, value) {
        return this.books.find(item => item[type] === value) || null;
    }

    giveBookByName(bookName) {
      let result = this.books.findIndex((elem) => elem.name === bookName);
      if (result !== -1) {
        return this.books.splice(result, 1)[0]
      } else {
      return null;
      }
    }
}

let newLibrary = new Library('Библиотека им. Ленина');
newLibrary.addBook(booking);
newLibrary.addBook(booking2);

// console.log(newLibrary.findBookBy('pagesCount', 'Пикник на обочине'));
console.log(newLibrary.giveBookByName('Пикник на обочине'));

// console.log(newLibrary)



