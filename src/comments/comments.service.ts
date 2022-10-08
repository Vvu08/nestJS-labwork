import { Injectable } from '@nestjs/common';
import { randomIntFromInterval } from 'src/utils/randomizer';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './comments.interface';

@Injectable()
export class CommentService {
    private comments: Comment[] = []

    findAll() {
        return this.comments
    }

    findAllByPostId(postId: number) {
        return this.comments.filter(comment => comment.postId === postId)
    }

    findById(id: number) {
        const index = this.comments.findIndex(p => p.id === id)

        if (index < 0) throw new Error("Not found")

        return this.comments[index]
    }

    create(comment: CreateCommentDto) {
        const _comment: Comment = {
            id: randomIntFromInterval(1, 1000),
            createdAt: new Date().toDateString(),
            ...comment
        }
        this.comments.push(_comment)
        return _comment
    }

    update(id: number, comment: UpdateCommentDto) {
        const index = this.comments.findIndex(p => p.id === id)

        if (index < 0) throw new Error("Not found")

        const _comment: Comment = {
            ...this.comments[index],
            ...comment
        }

        this.comments[index] = _comment
        return _comment
    }

    delete(id: number) {
        this.comments = this.comments.filter(p => p.id !== id)
    }

}