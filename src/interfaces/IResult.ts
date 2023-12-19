interface ILocation {
    name: string;
    url: string;
  }
  
  interface IPerson {
    id: number; 
    name: string; 
    gender: string; 
    species: string;
    created: string;
    image: string;
    status: string;
    type: string;
    url: string;
    episode: string[];
    location: ILocation;
    origin: ILocation;
  }
  
  interface IInfo {
    count: number;
    next: string;
    page: number;
    prev: null
  }
  
  interface ICharacters {
    info: IInfo;
    results: IPerson[];
  }

  export type {ICharacters, IPerson, IInfo};