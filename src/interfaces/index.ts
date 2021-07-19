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
        source_code: {
            title: string | undefined;
            url: string | undefined;
        }
    }
}