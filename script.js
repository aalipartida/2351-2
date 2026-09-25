let book = {
    title: "American Psycho",
    genre: "Psychological Fiction",
    publication: 1991,
    pages: 399
};

let book2 = {
    title: "Harry Potter",
    genre: "Fantasy",
    publication: 1997,
    pages: 309
};

let book3 = {
    title: "The Notebook",
    genre: "Romance",
    publication: 1996,
    pages: 214
};

let book4 = {
    title: "It",
    genre: "Horror",
    publication: 1986,
    pages: 1138
};


let books = [book, book2, book3, book4];

for (let i = 0; i < books.length; i++) {
    console.log(books[i].title);
}


let number = 0;

while (number < books.length) {
    console.log("Book number " + (number + 1));
    number++;
}


function getBook(genre) {

    if (genre == "psychological") {
        return book;

    } else if (genre == "fantasy") {
        return book2;

    } else if (genre == "romance") {
        return book3;

    } else if (genre == "horror") {
        return book4;

    } else {
        return book;
    }
}


function makeMessage(name, book) {

    return name.toUpperCase()
        + ", your book is ... "
        + book.title + "!";
}


function pickBook() {

    let name = document.getElementById("name").value;

    let genre = document.getElementById("genre").value;

    let bookChoice = getBook(genre);


    let genreMessage;

    switch (genre) {

        case "psychological":
            genreMessage = "You chose a psychological fiction book.";
            break;

        case "fantasy":
            genreMessage = "You chose a fantasy book.";
            break;

        case "romance":
            genreMessage = "You chose a romance book.";
            break;

        case "horror":
            genreMessage = "You chose a horror book.";
            break;

        default:
            genreMessage = "You chose an unknown genre.";
    }


    let box = document.querySelector("div");

    if (genre == "psychological") {
        box.style.backgroundColor = "purple";
        box.style.border = "10px double black";

    } else if (genre == "fantasy") {
        box.style.backgroundColor = "lightgreen";
        box.style.border = "10px double darkgreen";

    } else if (genre == "romance") {
        box.style.backgroundColor = "pink";
        box.style.border = "10px double red";

    } else if (genre == "horror") {
        box.style.backgroundColor = "darkred";
        box.style.border = "10px double black";
    }


    let pageCount = bookChoice.pages;

    let message = makeMessage(name, bookChoice)
        + " " + genreMessage
        + " Page count: " + pageCount;

    document.getElementById("result").innerHTML = message;

    console.log(message);
}