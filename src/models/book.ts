export interface Book {
    chapter_ids: number[]
    id: number;
    title: string;
}

export interface Image {
    id: number;
    file: string;
    width: number;
    height: number;
    created_at: string;
    updated_at: string;
}

export interface Page {
    id: number;
    page_index: number;
    image: Image;
}

export interface Chapter {
    id: number;
    title: string;
    book: {
        id: number;
        title: string;
        chapter_ids: number[];
    };
    chapter_index: number;
    pages: Page[];
}
