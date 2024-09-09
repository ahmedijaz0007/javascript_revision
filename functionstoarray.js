

const books = [
    {

        title: "I am here",
        rating: "3.45"

    },
    {

        title: " I am there",
        rating: "5"

    },
    {

        title: " I am here there",
        rating: "3.45"

    },
    {

        title: " I am there there",
        rating: "3.4"

    },
    {

        title: " I am here the",
        rating: "3.00"

    },
]


console.log(books.find(book =>
book.title === "I am here"
))


console.log(books.filter(book => book.rating < 5))