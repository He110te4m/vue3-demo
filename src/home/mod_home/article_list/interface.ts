export interface Article {
    id: number;
    created_at: string;
    updated_at: string;
    title: string;
    desc: string;
    view_count: number;
    comment_count: number;
    category_id: number;
    cover: string;
    content: string;
}
