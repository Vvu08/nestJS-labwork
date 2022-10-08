import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comments/comments.module';
import { CommentsController } from './comments/comments.controller';
import { CommentService } from './comments/comments.service';
import { PostModule } from './posts/posts.module';
import { PostsController } from './posts/posts.controller';
import { PostService } from './posts/posts.service';

@Module({
  imports: [CommentModule, PostModule],
  controllers: [CommentsController, PostsController],
  providers: [CommentService, PostService],
})
export class AppModule { }