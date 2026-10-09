
let book = {
    title: "American Psycho",
    genre: "Psychological Fiction",
    publication: 1991,
    pages: 399,
    describe: function() {
        return this.title + " (" + this.publication + ")";
    }
};

let book2 = {
    title: "Harry Potter",
    genre: "Fantasy",
    publication: 1997,
    pages: 309,
    describe: function() {
        return this.title + " (" + this.publication + ")";
    }
};

let book3 = {
    title: "The Notebook",
    genre: "Romance",
    publication: 1996,
    pages: 214,
    describe: function() {
        return this.title + " (" + this.publication + ")";
    }
};

let book4 = {
    title: "It",
    genre: "Horror",
    publication: 1986,
    pages: 1138,
    describe: function() {
        return this.title + " (" + this.publication + ")";
    }
};

let books = [book, book2, book3, book4];

// Array method
books.forEach(function(item) {
    console.log(item.title);
});

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
    return name + ", your book is " + book.describe() + "!";
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
        box.style.backgroundColor = "#976f97"; // light purple
        box.style.border = "10px double #412041"; // dark purple
    } else if (genre == "fantasy") {
        box.style.backgroundColor = "#b9e9bb"; // light green
        box.style.border = "10px double #0f470f"; // dark green
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