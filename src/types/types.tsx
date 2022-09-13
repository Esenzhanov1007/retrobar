export {};

export interface PlaceData {
    placeName: string,
    eventName: string,
    eventDate: string,
    views: number,
    photographName: string,
    photos: string[],
}

export interface PhotoEvent {
    date: string,
    eventname: string,
    eventphotos: string[],
    id: number,
    link: string,
    photographerId: number,
    pubId: number,
    views: number
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





