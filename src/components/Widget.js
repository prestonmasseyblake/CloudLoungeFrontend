import React, { Fragment, useState, useRef } from 'react'
import { useDrag, useDrop } from "react-dnd";
import WIDGET from "../data/widgetType";
const Widget = ({item, index, moveItem, status}) => {
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: WIDGET,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: WIDGET,
        item: {WIDGET, ...item, index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });
    return (
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
                >
                <div className={"color-bar"} style={{ backgroundColor: status.color }}/>
                <p className={"item-title"}>{item.content}</p>
                <h3>Widget</h3>
                <p className={"item-status"}>{item.icon}</p>
            </div>
            
        </Fragment>
    )
}

export default Widget;
