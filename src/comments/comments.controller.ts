import { Controller, Get, Param, Post, Put, Delete, Body, ParseIntPipe, HttpCode, HttpStatus,/* Request, Response,*/ Query, Header, Redirect, BadRequestException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentService: CommentService) {
    }

    @Get()
    findAll (){
        return this.commentService.findAll()
    }

    @Get(":id")
    getById(@Param('id', new ParseIntPipe()) id: number) {
        return this.commentService.findById(id)
    }

    @Get()
    findAllByPostId (@Query('postId', new ParseIntPipe()) postId: number){
        return this.commentService.findAllByPostId(postId)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreateCommentDto) {
        //throw new BadRequestException
        return this.commentService.create(body)
    }

    @Put(":id")
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Param('id', new ParseIntPipe()) id: number, @Body() body: UpdateCommentDto) {
        return this.commentService.update(id, body)
    }

    @Delete(":id")
    delete(@Param('id', new ParseIntPipe()) id: number) {
        return this.commentService.delete(id)
    }
}