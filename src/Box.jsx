import React from 'react';
import { useDrag } from 'react-dnd';
import Dustbin from './Dustbin';

const style = {
  width: 200,
  height: 50,
  lineHeight: '50px',
  background: 'pink',
  margin: '30px auto'
}

const Box = () => {
    // 使用 useDrag
    const [, drager] = useDrag({
        item: { type: 'Box' }
    })
    return (
        // 将第二个参数赋值给 ref
        <div ref={ drager } style={ style }>可拖拽组件 Box</div>
    )
}

export default Box;