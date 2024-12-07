import { Stage, Layer, Rect, Transformer } from 'react-konva';
import { useState, useRef, useEffect } from 'react';
import { useGesture } from '@use-gesture/react';

const BannerWorkspace = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [rectangles, setRectangles] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const stageRef = useRef(null);
  const transformerRef = useRef(null);
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

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId) {
        setRectangles(rectangles.filter(rect => rect.id !== selectedId));
        setSelectedId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, rectangles]);

  // Update transformer on selection
  useEffect(() => {
    if (selectedId && transformerRef.current) {
      const stage = stageRef.current;
      const selectedNode = stage.findOne('#rect-' + selectedId);
      if (selectedNode) {
        transformerRef.current.nodes([selectedNode]);
        transformerRef.current.getLayer().batchDraw();
      }
    } else if (transformerRef.current) {
      transformerRef.current.nodes([]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [selectedId]);

  const addRectangle = () => {
    if (!stageRef.current) return;
    
    const stageBox = stageRef.current.container().getBoundingClientRect();
    const centerX = (-position.x + stageBox.width / 2) / scale;
    const centerY = (-position.y + stageBox.height / 2) / scale;
    
    const newRect = {
      id: Date.now(),
      x: centerX - 150,
      y: centerY - 125,
      width: 300,
      height: 250,
      fill: 'white',
      stroke: '#0096ff',
      strokeWidth: 2,
      draggable: true
    };

    setRectangles([...rectangles, newRect]);
    setSelectedId(newRect.id);
  };

  const bind = useGesture({
    onDragStart: () => {
      if (!selectedId) {
        isDragging.current = true;
        const container = stageRef.current?.container();
        if (container) {
          container.style.cursor = 'grabbing';
        }
      }
    },
    onDrag: ({ delta: [dx, dy], event }) => {
      if (!selectedId) {
        event?.preventDefault();
        requestAnimationFrame(() => {
          setPosition(pos => ({
            x: pos.x + dx * 2,
            y: pos.y + dy * 2
          }));
        });
      }
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

  const handleRectChange = (index, changes) => {
    const newRects = [...rectangles];
    newRects[index] = { ...rectangles[index], ...changes };
    setRectangles(newRects);
  };

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
          onClick={e => e.target === e.target.getStage() && setSelectedId(null)}
        >
          <Layer clipFunc={null}>
            {rectangles.map((rect, i) => (
              <Rect
                key={rect.id}
                {...rect}
                id={`rect-${rect.id}`}
                onClick={() => setSelectedId(rect.id)}
                onTap={() => setSelectedId(rect.id)}
                onDragStart={() => setSelectedId(rect.id)}
                onDragEnd={e => {
                  handleRectChange(i, {
                    x: e.target.x(),
                    y: e.target.y()
                  });
                }}
                onTransformEnd={e => {
                  const node = e.target;
                  handleRectChange(i, {
                    x: node.x(),
                    y: node.y(),
                    width: Math.abs(node.width() * node.scaleX()),
                    height: Math.abs(node.height() * node.scaleY())
                  });
                }}
              />
            ))}
            <Transformer
              ref={transformerRef}
              boundBoxFunc={(oldBox, newBox) => {
                return (
                  newBox.width < 50 || newBox.height < 50 ||
                  newBox.width > 800 || newBox.height > 600
                ) ? oldBox : newBox;
              }}
              rotateEnabled={true}
              keepRatio={false}
            />
          </Layer>
        </Stage>
      </div>

      <button
        onClick={addRectangle}
        style={{
          position: 'fixed',
          top: 20,
          left: 20,
          padding: '10px 20px',
          background: '#0096ff',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 1000
        }}
      >
        Add Rectangle
      </button>
    </div>
  );
};

export default BannerWorkspace; 