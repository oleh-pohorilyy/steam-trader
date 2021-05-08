import React from 'react'

type OwnProps = {
    item: React.ReactNode
    radius: number
    y: number
    x: number
}

const ArcItem: React.FC<OwnProps> = ({item, radius, y, x}) => {
    return(
        <div 
            className="arc-item"
            style={{
                width: `${radius*2}px`, 
                height: `${radius*2}px`,
                top: `${y}px`,
                left: `${x}px`}}>
            { item }
        </div>
    )
}

export default ArcItem