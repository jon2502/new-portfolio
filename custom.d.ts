declare global {
    type Project = {
        id: number;
        Program:string;
        SetupType:string;
        Title:string;
        Text:string;
        BigImage: string;
        Info: Array<{
            Text: string;
            Image: string;
            OriginalIMG: string;
            NewIMG: string;
            Link: string;
        }>
    }
}

export default global;
