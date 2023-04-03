import { GeoData } from "../Types/Types"

export async function retrieveGeoData(): Promise<GeoData[]> {
        let apiValues = await fetch('https://api.geonet.org.nz/volcano/val')
        .then(response => response.json())
        .catch(error => console.log(error))
        let geoData: GeoData[] = apiValues['features']
        return geoData
}
