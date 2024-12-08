import { Stage, Layer } from 'react-konva';
import { useState, useRef, useEffect } from 'react';
import { useGesture } from '@use-gesture/react';

const BannerWorkspace = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const stageRef = useRef(null);
  const isDragging = useRef(false);

  // Update dimensions and center stage
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        setDimensions({
          width: window.innerWidth * 2,
          height: (window.innerHeight - 100) * 2
        });
        setPosition({
          x: -window.innerWidth / 2,
          y: -(window.innerHeight - 100) / 2
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const bind = useGesture({
    onDragStart: () => {
      isDragging.current = true;
      const container = stageRef.current?.container();
      if (container) {
        container.style.cursor = 'grabbing';
      }
    },
    onDrag: ({ delta: [dx, dy], event }) => {
      event?.preventDefault();
      requestAnimationFrame(() => {
        setPosition(pos => ({
          x: pos.x + dx * 2,
          y: pos.y + dy * 2
        }));
      });
    },
    onDragEnd: () => {
      isDragging.current = false;
      const container = stageRef.current?.container();
      if (container) {
        container.style.cursor = 'grab';
      }
    },
    onWheel: ({ delta: [dx, dy], event }) => {
      event?.preventDefault();
      
      const isTrackpad = Math.abs(event.deltaY) < 50;

      if (isTrackpad && !event.ctrlKey) {
        requestAnimationFrame(() => {
          setPosition(pos => ({
            x: pos.x - dx * 2,
            y: pos.y - dy * 2
          }));
        });
      } else {
        requestAnimationFrame(() => {
          const scaleBy = 1.1;
          const newScale = dy > 0 
            ? scale * (1 / scaleBy)
            : scale * scaleBy;

          const boundedScale = Math.min(Math.max(newScale, 0.1), 5);
          const pointer = stageRef.current?.getPointerPosition();
          if (!pointer) return;

          const mousePointTo = {
            x: (pointer.x - position.x) / scale,
            y: (pointer.y - position.y) / scale,
          };

          setPosition({
            x: pointer.x - mousePointTo.x * boundedScale,
            y: pointer.y - mousePointTo.y * boundedScale,
          });
          setScale(boundedScale);
        });
      }
    }
  }, {
    drag: { filterTaps: true, threshold: 1 }
  });

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#fafafa' }}>
      <div {...bind()} style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 100,
        overflow: 'hidden', 
        touchAction: 'none',
        cursor: isDragging.current ? 'grabbing' : 'grab',
      }}>
        <Stage
          ref={stageRef}
          width={dimensions.width}
          height={dimensions.height}
          scale={{ x: scale, y: scale }}
          position={position}
          draggable={false}
        >
          <Layer clipFunc={null} />
        </Stage>
      </div>
    </div>
  );
};

export default BannerWorkspace; 