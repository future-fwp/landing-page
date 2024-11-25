import { useEffect, useRef } from 'react';

const RadialCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Create radial gradient
        const gradient = ctx.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            0,
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2
        );

        // Add color stops
        gradient.addColorStop(0, 'rgba(168, 85, 247, 0.4)'); // Purple with opacity
        gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.2)'); // Indigo with opacity
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Transparent

        // Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] relative">
            <canvas 
                ref={canvasRef}
                className="w-full h-full absolute top-0 left-0"
            />
        </div>
    );
};

export default RadialCanvas;
