//ini file yg fokus kendali untuk service books

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { title } from 'process';
import { arrayBuffer } from 'stream/consumers';

@Controller('books')
export class BooksController {
//private booksService: BooksService;
//cara cepet
    constructor(private booksService:BooksService){
        //this.booksService=booksService;
    }
    //ambil data semua buku
    @Get()
    getBooks(
        @Query('title') title : string,
        @Query('author') author : string,
        @Query('category') category : string,
        ){
        return this.booksService.getBooks(title, author, category);
    }

    @Get('/:id')
    getBook(
        @Param('id') id : string        
    ){
        return this.booksService.getBook(id);     
    }

    //kirim data
    @Post()
    createBook(
        @Body('title') title:string, 
        @Body('author') author:string, 
        @Body('category') category:string,
        ){
        // return this.booksService.getAllBooks();
        return this.booksService.createBook(title,author,category); //create book ada pada book service
    }

    @Put('/:id')
    updateBook(
    @Param('id')id : string, 
    @Body('title') title:string, 
    @Body('author') author:string, 
    @Body('category') category:string,
    ) {
    return this.booksService.updateBook(id,title,author,category);
    }

    @Delete('/:id')
    deleteBook(@Param('id') id : string)
    {
        return this.booksService.deleteBook(id);
    }


}





















    //latihan yg dibawah ini
    // { 
    // @Get('/:name')    
    // @Get('/sapa')
    // hello(@Param('name')name:string){
    //     return `Hello ${name} !!`;
    // }

    // //mengambil semua data payLoad
    // // @Post()
    // // createBook(@Body() payLoad:any){
    // //     console.log(payLoad);
    // // }

    // //ambil payLoad name saja via postman
    // @Post()
    // createBook(@Body('name') name:string){
    //     console.log(name);
    // }
// }

// corepack prepare yarn@ --activate
