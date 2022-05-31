export interface CRUD {
    getCapitalByCountry: (country: string) => Promise<any>;
}
