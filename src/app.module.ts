import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { DataSource } from 'typeorm';
import { root } from './utils/paths';
import { CommentModule } from './comments/comments.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

console.info(root);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities,
      logging: true,
      type: 'sqlite',
      synchronize: true,
      database: `${root}/db/db.sqlite`,
    }),
    UserModule,
    PostModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}