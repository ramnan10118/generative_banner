import { Stage, Layer } from 'react-konva';
import { useState, useRef } from 'react';

const Canvas = ({ children }) => {
  const stageRef = useRef(null);
  const [stageScale, setStageScale] = useState(1);

  return (
    <div className="canvas-container">
      <Stage
        ref={stageRef}
        width={1080}
        height={1920}
        scale={{ x: stageScale, y: stageScale }}
      >
        <Layer>
          {children}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas; 