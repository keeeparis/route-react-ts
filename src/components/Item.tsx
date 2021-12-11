import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

import { coordsBeautiful } from '../utils'
import { ItemPropTypes } from '../typings'

const Point = styled.div<{isDragging: boolean}>`
    padding: 10px 15px;
    margin-bottom: 8px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.isDragging ? '#bb3219' : '#fff'}
`
const Title = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    color: #000;
`
const Name = styled.p`
    font-size: 18px;
    font-weight: 700;
`
const Coords = styled.p`
    font-size: 12px;
    font-style: italic;
`
const Button = styled.button`
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    border-radius: 3px;
    box-shadow: 1px 1px 0 0px lightgrey;
    cursor: pointer;
    color: white;
    background-color: #f04323;

    &:active { background-color: #bb3219; }
`

export default function Item({item, index, handleDelete}: ItemPropTypes) {
    return (
        <Draggable draggableId={item.id} index={index}>
            {(provided, snapshot) => (
                <Point
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    style={{...provided.draggableProps.style}}
                >
                    <Title>
                        <Name>{item.name}</Name>
                        <Coords>{coordsBeautiful(item.coords)}</Coords>
                    </Title>
                    <Button onClick={() => {handleDelete(index)}}>X</Button>
                </Point>
            )}
        </Draggable>
    )
}
