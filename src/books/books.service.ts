import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BooksService {
    private books:any[]=[];

    getBooks(title:string, author:string, category:string):any[]{
        const books = this.books.filter((book)=>{
            let isMatch = true;
            if (title && book.title != title) {
                isMatch=false         
            } if (author && book.author != author) {
                isMatch=false         
            } if (category && book.category != category) {
                isMatch=false         
            }
            return isMatch;
        });
        return books;
    }

    getBook(id : string){
    const bookIdX=this.findBookById(id); 
    return this.books[bookIdX];
    }

    createBook(title:string, author:string, category:string){
        this.books.push({id:uuidv4(),title,author,category,}); //ini input makanya pake push
    }

    findBookById(id: string){//mencari data dalam array
        const bookIdX = this.books.findIndex((book) => book.id === id);
        if (bookIdX === -1) { //gk ketemu
            throw new NotFoundException(`id Buku ${id} tidak ketemu ngab`);
        }
        return bookIdX; //ketemu
    }

    updateBook(id:string,title:string, author:string, category:string){
        const bookIdX=this.findBookById(id); 
        this.books[bookIdX].title=title;
        this.books[bookIdX].author=author;
        this.books[bookIdX].category=category;
    }

    deleteBook(id : string){
        const bookIdX=this.findBookById(id); 
        this.books.splice(bookIdX,1); //ini delete makanya pake splice        
    }
    


}
