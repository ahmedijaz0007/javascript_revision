const books = [{
    title:"abc",price:1
},
{
    title:"xyz",price:1
},
{
    title:"uvw",price:1
},
{
    title:"lmnop",price:1
}
]


console.log(books.map(function(element){
    return element.title.split('').join('.')
}))