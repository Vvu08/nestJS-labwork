import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comments/comments.module';
import { CommentsController } from './comments/comments.controller';
import { CommentService } from './comments/comments.service';

@Module({
  imports: [CommentModule],
  controllers: [CommentsController],
  providers: [CommentService],
})
export class AppModule { }