import { useRef, useEffect } from 'react';

const RadialCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        // Ensure canvas is full width and height
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        console.log('Canvas dimensions:', canvas.width, canvas.height);

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
        gradient.addColorStop(0, 'rgba(34, 197, 94, 0.4)');
        gradient.addColorStop(0.5, 'rgba(74, 222, 128, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        // Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Star drawing function
        const drawStar = (x: number, y: number, size: number, color: string) => {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.moveTo(x, y - size);
            ctx.lineTo(x + size * 0.3, y - size * 0.3);
            ctx.lineTo(x + size, y);
            ctx.lineTo(x + size * 0.3, y + size * 0.3);
            ctx.lineTo(x, y + size);
            ctx.lineTo(x - size * 0.3, y + size * 0.3);
            ctx.lineTo(x - size, y);
            ctx.lineTo(x - size * 0.3, y - size * 0.3);
            ctx.closePath();
            ctx.fill();
        };

        // Star class to manage individual star properties
        class Star {
            x: number;
            y: number;
            size: number;
            opacity: number;
            velocityX: number;
            velocityY: number;
            // hueRotation:number; 


            constructor(canvasWidth: number, canvasHeight: number) {
                // Concentrate stars in the middle 50% of the canvas height
                const centerX = canvasWidth / 2;
                const centerY = canvasHeight / 2;
                const spreadWidth = canvasWidth;
                const spreadHeight = canvasHeight * 0.5;

                this.x = centerX + (Math.random() - 0.5) * spreadWidth;
                this.y = centerY + (Math.random() - 0.5) * spreadHeight;
                this.size = Math.random() * 5 + 2;
                this.opacity = Math.random() * 0.8 + 0.2;
                
                // Reduced velocity for more subtle movement
                this.velocityX = (Math.random() - 0.5) * 1; 
                this.velocityY = (Math.random() - 0.5) * 1;
                // this.hueRotation = Math.random() * 360;
            }

            update(canvasWidth: number, canvasHeight: number) {
                // Update position with boundary checking
                // const centerX = canvasWidth / 2;
                const centerY = canvasHeight / 2;
                // const spreadWidth = canvasWidth;
                const spreadHeight = canvasHeight * 0.5;

                this.x += this.velocityX;
                this.y += this.velocityY;

                // Constrain movement to the middle area
                if (this.x < 0) this.x = 0;
                if (this.x > canvasWidth) this.x = canvasWidth;
                if (this.y < centerY - spreadHeight / 2) this.y = centerY - spreadHeight / 2;
                if (this.y > centerY + spreadHeight / 2) this.y = centerY + spreadHeight / 2;
                // this.hueRotation = (this.hueRotation + 1) % 360;
            }

            draw(ctx: CanvasRenderingContext2D) {
                if(!ctx) {
                    return ;
                }
                drawStar(this.x, this.y, this.size, `rgba(255, 255, 255, ${this.opacity})`);
            }
        }

        // Generate stars
        const numStars = 100;
        const stars: Star[] = [];
        console.log('Generating stars...');
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star(canvas.width, canvas.height));
        }

        // Water wave effect
        const waveCount = 3;
        const waveAmplitude = 50; // Increased amplitude
        const waveFrequency = 0.01;
        let time = 0;

        const animateWaves = () => {
            ctx.save();
            ctx.globalAlpha = 0.5; // Increased opacity
            ctx.fillStyle = 'rgba(74, 222, 128, 0.3)'; // More visible green

            for (let i = 0; i < waveCount; i++) {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height);
                
                for (let x = 0; x <= canvas.width; x++) {
                    const y = canvas.height - 
                        waveAmplitude * Math.sin(
                            (x * waveFrequency) + 
                            (time + i * Math.PI / waveCount)
                        ) - 
                        (i * 50); // More pronounced wave separation
                    
                    ctx.lineTo(x, y);
                }
                
                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.closePath();
                ctx.fill();
            }

            ctx.restore();
            time += 0.05;
        };

        // Animate waves
        let animationFrameId: number;
        const animate = () => {
            // Clear the entire canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Redraw gradient
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw stars
            stars.forEach(star => {
                star.update(canvas.width, canvas.height);
                star.draw(ctx);
            });

            // Animate waves
            animateWaves();

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        console.log('Animation started');

        // Cleanup
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div ref = {containerRef} className="w-full pointer-events-none">
            <canvas 
                ref={canvasRef}
                className="w-full h-full "
                style={{ zIndex: -1 }}
            />
        </div>
    );
};

export default RadialCanvas;
