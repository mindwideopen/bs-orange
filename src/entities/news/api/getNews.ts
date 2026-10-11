export type DirectusNewsItem = {
    id: string;
    slug: string;
    title: string;
    summary: string | null;
    content: string | null;
    cover: string | null;
    cover_alt: string | null;
    published_at: string | null;
};

export type DirectusNewsResponse = {
    data: DirectusNewsItem[];
};

export async function getNews(): Promise<DirectusNewsItem[]> {
    const response = await fetch(
        "http://localhost:8055/items/news?filter[status][_eq]=published&sort=-published_at"
 );

    if (!response.ok) {
        throw new Error("Не удалось получить новости из Directus");
    }

    const result: DirectusNewsResponse = await response.json();

    return result.data;
}

export async function getNewsBySlug(
    slug: string
): Promise<DirectusNewsItem | null> {
    const response = await fetch(
        `http://localhost:8055/items/news?filter[slug][_eq]=${slug}&filter[status][_eq]=published`
    );

    if (!response.ok) {
        throw new Error("Не удалось получить новость из Directus");
    }

    const result: DirectusNewsResponse = await response.json();

console.log("BUILD NEWS DATA: ",JSON.stringify( result.data))

    return result.data[0] ?? null;


}
