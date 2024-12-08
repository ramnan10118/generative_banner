import { Stage, Layer, Rect, Group } from 'react-konva';
import { useState, useRef } from 'react';

const Canvas = ({ children }) => {
  const stageRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0.4);

  const handleWheel = (e) => {
    e.evt.preventDefault();
    
    const scaleBy = 1.1;
    const stage = stageRef.current;
    const oldScale = scale;
    const pointer = stage.getPointerPosition();

    const mousePointTo = {
      x: (pointer.x - position.x) / oldScale,
      y: (pointer.y - position.y) / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;
    const boundedScale = Math.min(Math.max(newScale, 0.1), 2);

    setPosition({
      x: pointer.x - mousePointTo.x * boundedScale,
      y: pointer.y - mousePointTo.y * boundedScale,
    });
    setScale(boundedScale);
  };

  return (
    <div className="canvas-container">
      <Stage
        ref={stageRef}
        width={1080}
        height={1920}
        scale={{ x: scale, y: scale }}
        position={position}
        draggable
        onWheel={handleWheel}
        onDragMove={(e) => {
          setPosition(e.target.position());
        }}
      >
        <Layer>
          <Rect
            x={0}
            y={0}
            width={1080}
            height={1920}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: 1080, y: 1920 }}
            fillLinearGradientColorStops={[
              0, 'rgba(158, 87, 189, 1)',
              0.6588, 'rgba(94, 47, 127, 1)',
              0.9390, 'rgba(85, 41, 120, 1)'
            ]}
          />
          <Group
            clipFunc={(ctx) => {
              ctx.beginPath();
              ctx.rect(0, 0, 1080, 1920);
              ctx.closePath();
            }}
          >
            {children}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas; 