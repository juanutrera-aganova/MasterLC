interface Library {
    title:string;
    isRead:boolean
}

const books:Array<Library> = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];


function isBookRead(books:Array<Library>, name:string):boolean{
   const book = books.find(b=>b.title === name);
   return book? book.isRead:false;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false