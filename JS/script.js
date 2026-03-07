// ISSUE 3: FILTER SYSTEM

document.getElementById("applyFilters").addEventListener("click", function () {

    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const shipping = document.getElementById("shipping").value;

    const books = document.querySelectorAll(".book-card");

    books.forEach(function(book){

        let showBook = true;

        const bookCategory = book.dataset.category;
        const bookPrice = parseFloat(book.dataset.price);
        const bookShipping = book.dataset.shipping;

        // CATEGORY FILTER
        if(category !== "all" && category !== bookCategory){
            showBook = false;
        }

        // PRICE FILTER
        if(price === "under10" && bookPrice >= 10){
            showBook = false;
        }

        if(price === "10to20" && (bookPrice < 10 || bookPrice > 20)){
            showBook = false;
        }

        if(price === "over20" && bookPrice <= 20){
            showBook = false;
        }

        // SHIPPING FILTER
        if(shipping !== "all" && shipping !== bookShipping){
            showBook = false;
        }

        // SHOW OR HIDE BOOK
        if(showBook){
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });

});