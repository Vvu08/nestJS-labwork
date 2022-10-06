export class UpdateCommentDto {
    constructor(readonly username: string, readonly comment: string, readonly createdAt: string) {
    }
}