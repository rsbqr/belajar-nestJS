import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
    @Get()
    getAllBooks(){
        
    }
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
}

// corepack prepare yarn@ --activate
