export {};

export interface PlaceData {
    placeName: string,
    eventName: string,
    eventDate: string,
    views: number,
    photographName: string,
    photos: string[],
}

export interface AdData {
    title: string,
    description: string,
}

export interface ReportVideo
{
    views: number,
    id: number,
    eventName: string,
    date: string,
    link: string,
    eventVideos: string[],
    preview: string[],
    "pubId": number,
    "photographerId": number
}





