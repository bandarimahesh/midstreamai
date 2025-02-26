import { useEffect, useRef } from "react";

const FluidPipelineBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = 500;

    class Particle {
      constructor(x, y, radius, speed, angle, pipe) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.angle = angle;
        this.pipe = pipe;
      }

      update() {
        this.angle += this.speed;
        this.x = this.pipe.cx + this.pipe.rx * Math.cos(this.angle);
        this.y = this.pipe.cy + this.pipe.ry * Math.sin(this.angle);
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#b3e0ff";
        ctx.fill();
        ctx.closePath();
      }
    }

    const pipeColors = ["#ddeeff", "#cce5ff", "#b3e0ff"];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2;

    const pipes = [];
    for (let i = 0; i < 3; i++) {
      const angle = (Math.PI * 2 * i) / 3;
      pipes.push({
        cx: centerX,
        cy: centerY,
        rx: radius * 1.2,
        ry: radius * 0.8,
        angle: angle,
        color: pipeColors[i],
      });
    }

    const drawPipelines = () => {
      ctx.lineWidth = 20;
      pipes.forEach((pipe) => {
        ctx.beginPath();
        ctx.strokeStyle = pipe.color;
        ctx.ellipse(
          pipe.cx,
          pipe.cy,
          pipe.rx,
          pipe.ry,
          pipe.angle,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      });
    };

    for (let i = 0; i < numParticles; i++) {
      const pipe = pipes[i % pipes.length];
      let angle = Math.random() * Math.PI * 2;
      let x = pipe.cx + pipe.rx * Math.cos(angle);
      let y = pipe.cy + pipe.ry * Math.sin(angle);
      let speed = Math.random() * 0.02 + 0.01;
      let particle = new Particle(
        x,
        y,
        Math.random() * 4 + 2,
        speed,
        angle,
        pipe
      );
      particles.push(particle);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPipelines();
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-screen h-screen"
    />
  );
};

export default FluidPipelineBackground;
