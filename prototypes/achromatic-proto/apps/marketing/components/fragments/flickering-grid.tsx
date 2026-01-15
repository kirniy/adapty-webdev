'use client';

import * as React from 'react';

type FlickeringGridProps = {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;

  maxOpacity?: number;
};

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = 'rgb(0, 0, 0)',
  width,
  height,
  className,
  maxOpacity = 0.3
}: FlickeringGridProps): React.JSX.Element {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = React.useState<boolean>(false);
  const [canvasSize, setCanvasSize] = React.useState({ width: 0, height: 0 });
  const animationFrameRef = React.useRef<number | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const lastTimeRef = React.useRef(0);

  const memoizedColor = React.useMemo(() => {
    const toRGBA = (color: string) => {
      if (typeof window === 'undefined') {
        return `rgba(0, 0, 0,`;
      }
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext('2d');
      if (!ctx) return 'rgba(255, 0, 0,';
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
      return `rgba(${r}, ${g}, ${b},`;
    };
    return toRGBA(color);
  }, [color]);

  const setupCanvas = React.useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.floor(width / (squareSize + gridGap));
      const rows = Math.floor(height / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity]
  );

  const gridRef = React.useRef<ReturnType<typeof setupCanvas> | null>(null);

  const updateSquares = React.useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity]
  );

  const drawGrid = React.useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number
    ) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j];
          ctx.fillStyle = `${memoizedColor}${opacity})`;
          ctx.fillRect(
            i * (squareSize + gridGap) * dpr,
            j * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr
          );
        }
      }
    },
    [memoizedColor, squareSize, gridGap]
  );

  const updateCanvasSize = React.useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;

    const newWidth = width || container.clientWidth;
    const newHeight = height || container.clientHeight;
    setCanvasSize((prev) => {
      if (prev.width === newWidth && prev.height === newHeight) {
        return prev;
      }
      return { width: newWidth, height: newHeight };
    });
    gridRef.current = setupCanvas(canvas, newWidth, newHeight);
  }, [height, setupCanvas, width]);

  React.useEffect(() => {
    updateCanvasSize();
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    intersectionObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [updateCanvasSize]);

  React.useEffect(() => {
    if (!isInView) {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    updateCanvasSize();
    lastTimeRef.current = 0;

    const animate = (time: number) => {
      const gridParams = gridRef.current;
      const ctx = ctxRef.current;
      if (!gridParams || !ctx) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      if (lastTimeRef.current === 0) {
        lastTimeRef.current = time;
      }
      const deltaTime = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        ctx.canvas.width,
        ctx.canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [drawGrid, isInView, updateCanvasSize, updateSquares]);

  return (
    <div
      ref={containerRef}
      className={`size-full ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height
        }}
      />
    </div>
  );
}
