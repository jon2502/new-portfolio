declare global {
    type Project = {
        id: number;
        Program:string;
        SetupType:string;
        Title:string;
        Text:string;
        BigImage: string;
        Info: string[]
        ImageGallery: string[][]
    }
}

export default global;
