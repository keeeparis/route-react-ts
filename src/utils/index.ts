import { Placemark, Placemarks } from "../typings"

export const geocode = async (input: Placemark["coords"] | string, ymaps: any) => {
    const response = await ymaps.geocode(input)
    const obj = response.geoObjects.get(0)
    const newCoords: Placemark['coords'] = obj.geometry.getCoordinates()
    const address: string = obj.getAddressLine()

    return {newCoords, address}
}

const lat = (coord: number): string => coord >= 0 ? `${coord} с.ш.` : `${coord*(-1)} ю.ш.`
const lng = (coord: number): string => coord >= 0 ? `${coord} в.д.` : `${coord*(-1)} з.д.`

export const coordsBeautiful = (coords: Placemark["coords"]) => `${lat(Number(coords[0].toFixed(2)))}, ${lng(Number(coords[1].toFixed(2)))}`

export const colorPlacemark = (index: number, arr: Placemarks) => index === 0 ? '#f04323' : index === arr.length-1 ? 'green' : 'blue'
