import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import ArcItem from './arc-item/ArcItem'
import './ArcMenu.css'

type OwnProps = {
    childRadius?: number
    radius?: number
    rotateBy?: number
}

const ArcMenu: React.FC<OwnProps> = ({children, radius, childRadius, rotateBy}) => {

    const [isOpened, setIsOpened] = useState(false)

    const toDeg = 180/Math.PI
    const toRad = Math.PI/180
    const root = useRef<HTMLDivElement>(null)

    const _rotateBy = rotateBy ?? 0
    const _radius = radius ?? 300
    const _childRadius = childRadius ?? 70

    const onMouseMove = useCallback((event: MouseEvent) => {
        console.log('moving')
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', (e: KeyboardEvent) => e.code == 'KeyQ' && setIsOpened(true))
        window.addEventListener('keyup', (e: KeyboardEvent) => e.code == 'KeyQ' && setIsOpened(false))
    }, [])
    useEffect(() => {
        if(isOpened) window.addEventListener('mousemove', onMouseMove)
        else window.removeEventListener('mousemove', onMouseMove)

        return () => window.removeEventListener('mousemove', onMouseMove)
    }, [isOpened])

    const getWrappedChildren = () => {
        const step = 360/React.Children.count(children)
        const offset = _radius - _childRadius
        return React.Children.map(children, (child, index) => {
            const deg = (_rotateBy+step*index) * toRad
            const y = Math.sin(deg) * _radius + offset
            const x = Math.cos(deg) * _radius + offset
            return <ArcItem item={child} radius={_childRadius} y={y} x={x}/>
        })
    }

    return(
        <CSSTransition in={isOpened} timeout={500} classNames="arc-wrapper" unmountOnExit>
        <div id="arc-wrapper">
            <div 
            id="arc-root"
            ref={root} 
            style={{width: `${_radius*2}px`, height: `${_radius*2}px`}}
            >
                { getWrappedChildren() }
            </div>
        </div>
        </CSSTransition>
    )
}

export default ArcMenu