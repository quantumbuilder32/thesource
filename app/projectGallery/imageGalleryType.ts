export type collectionType = {
    collection: true,
    before: imageType[],
    after: imageType[],
}

export type imageType = {
    collection?: false,
    image: any;
    title: string;
    summary: string
}

export type galleryObj = imageType | collectionType