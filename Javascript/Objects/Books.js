const Book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (title, author, pages, read) {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }
}

const Teste = new Book('Título teste', 'Eu mesmo', 250, 'não lido ainda')

console.log(Teste.info())