function paperRequirements(p1, p2, p3) {
    let needPagesForfirstBook = 100;
    let needPagesForSecoundBook = 200;
    let needPagesForThirdBook = 300;

    let printFirstBook = p1 * needPagesForfirstBook;
    let printSecoundBook = p2 * needPagesForSecoundBook;
    let printThirdBook = p3 * needPagesForThirdBook;

    let printTotalBooks = printFirstBook + printSecoundBook + printThirdBook;
    return printTotalBooks;
}

let firstBook = 5;
let secoundBook = 3;
let thirdBook = 10;
let totalBook = paperRequirements(firstBook, secoundBook, thirdBook);
console.log(totalBook);