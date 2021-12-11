import { Map, Polyline, Placemark } from 'react-yandex-maps' 
import styled from 'styled-components'
import { Event } from 'yandex-maps'

import { mapState } from '../config'
import { CustomMapTypes } from '../typings'
import { colorPlacemark, geocode } from '../utils'

const Container = styled.div`
    margin-right: 50px;

    @media (max-width: 1024px) {
        margin-right: 0;
    }
`
const Helper = styled.div`
    margin-top: 30px;
    padding: 10px;
    font-size: 12px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Each = styled.div`
    display:flex;
`
const Square = styled.div<{backgroundColor: string}>`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-color: ${props => props.backgroundColor}
`

export default function CustomMap({ mapRef, placemarks, setPlacemarks, ymaps }: CustomMapTypes) {
    const handleDragend = async (e: Event, index: number) => {
        const newCoords = e.get('target').geometry.getCoordinates()
        const newPlacemarks = [...placemarks]

        const {address} = await geocode(newCoords, ymaps)

        newPlacemarks.splice(index, 1, {...placemarks[index], coords: newCoords, name: address})
        setPlacemarks(newPlacemarks)
    }
    
    return (
        <Container>
            <Map
                defaultState={mapState}
                instanceRef={mapRef}
                className='customMap'
            >
                {placemarks.map((elem, index, arr) => 
                    <Placemark
                        key={index}
                        geometry={elem.coords}
                        options={{
                            draggable: true,
                            iconColor: colorPlacemark(index, arr) 
                        }}
                        onDragend={(e: any) => handleDragend(e, index)}
                        properties={{
                            balloonContent: elem.name
                        }}
                    />
                )}
                <Polyline 
                    geometry={[...placemarks.map(e => e.coords)]}
                    options={{
                        strokeColor: '#000',
                        strokeWidth: 4,
                        strokeOpacity: 0.5
                    }}
                    properties={{
                        hintContent: 'This os Polyline'
                    }}
                />
            </Map>
            <Helper>
                <Each>
                    <Square backgroundColor='#f04323'></Square>
                    <p>Начальная точка</p>
                </Each>
                <Each>
                    <Square backgroundColor='blue'></Square>
                    <p>Промежуточная точка</p>
                </Each>
                <Each>
                    <Square backgroundColor='green'></Square>
                    <p>Конечная точка</p>
                </Each>
            </Helper>
        </Container>
    )
}
