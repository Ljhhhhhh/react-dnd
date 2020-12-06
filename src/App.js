import React from 'react';
import { DndProvider, useDrag  } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const [, drager] = useDrag({
    item: { type: 'Box' }
})
  return (
      <div ref={drager}>可拖拽组件 Box</div>
  )
}
export default App;
