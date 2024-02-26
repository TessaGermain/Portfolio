export interface Project {
    name: string,
    date: Date,
    time: string,
    type: string,
    image: string,
    languages: string[],
    shortDescription: string,
    tasks: string[],
    detailedDescription: string,
    info?: string,
    link?: string
}