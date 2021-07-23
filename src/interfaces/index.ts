export interface ProjectI {
    title: string;
    desc: string;
    img: {
        url: string;
        alt: string;
    },
    links: {
        details: {
            title: string;
            url: string;
        },
        live: {
            title: string;
            url: string;
        },
        sourceCode: {
            title: string | undefined;
            url: string | undefined;
        }
    }
}

export interface MessageI {
    email: string;
    message: string;
}
