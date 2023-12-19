import { ICharacters } from "./interfaces/IResult";

export default async function (url: string) {
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });

    const response = await fetch(request)
    const jsonData: ICharacters = await response.json()
    return jsonData
  }
  