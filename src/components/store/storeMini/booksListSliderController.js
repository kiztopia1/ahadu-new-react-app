setTimeout(( ) => {
    const rightArrow =document.getElementById('rightArrow')
    const leftArrow = document.getElementById('leftArrow')
    const booksList = document.getElementById('booksList')
    const booksListWidth = document.getElementById('booksList').clientWidth

    
    rightArrow.addEventListener('click',() => {
        console.log(page )
        let currentPage =  page ++
        setPage (currentPage)
        booksList.style.transform = `translateX(-${page * booksListWidth}px)`

    })
    leftArrow.addEventListener('click',() => {
        if ( page == 0){
            
        }else{
            let currentPage =  page --
            setPage (currentPage)
        }
        booksList.style.transform = `translateX(-${page * booksListWidth}px)`

    })},1000)