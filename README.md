[Demo](http://reactjsdevelopment.github.io/viewer)
master2improved  - new branch

Create a manga viewer website like the video below from scratch.

**Functions:**

- **Booklist**: On the top of the screen, there are buttons with the manga book title. Book is switched by clicking the button (0:06-0:12)
- **Chapter list**: Below the title buttons, there are buttons with the chapter number. A chapter can be switched by clicking the buttons (0:14-0:24)
- **Page transition**: By clicking the left side of the image, you can move to the next page. By clicking the right side of the image, you can move to the previous page. (0:27-0:40)
- **Page transition between chapters**: If you try to move to the next page from the last page of each chapter, you can go to the next chapter (0:47-0:58)

### **API**

Manga data can be fetched from our prepared API server.  You can use this API to get manga titles, image URLs, etc.

- URL of API: [http://18.177.140.79:8080/](http://18.177.140.79:8080/)
- List of APIs:
    - `/books/` : list of books
    - `/books/:bookId/` : detail of books
    
    - `/chapters/:chapterId/` : detail of chapters
    
    (Note: you need to append slash "/" at the end of URL like [`http://18.177.140.79:8080/books/`](http://18.177.140.79:8080/books/), not  [`http://18.177.140.79:8080/](http://18.177.140.79:8080/)book`