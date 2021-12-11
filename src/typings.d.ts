import { PlacemarkGeometry } from "react-yandex-maps";

export interface Placemark {
    coords: PlacemarkGeometry;
    id: string;
    name: string;
}

export type Placemarks = Array<Placemark>

export interface CustomMapTypes {
    // TODO: мне не нравится так много any - подумать как правильно определить типы
    mapRef: any,
    placemarks: Placemarks,
    setPlacemarks: any,
    ymaps: any
}

export interface ItemPropTypes {
    item: Placemark,
    index: number,
    handleDelete: (index: number) => void
}