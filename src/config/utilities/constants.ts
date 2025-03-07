const {VITE_BASE_URL} = import.meta.env;

export class Constants {
    static LIMIT = 8;
    static BASEURL: string = VITE_BASE_URL;
}
