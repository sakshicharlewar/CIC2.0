"use client";
import React, { useEffect, useRef, useState } from "react";

const SparkleCursor = () => {
  const canvasRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768
    ) {
      return;
    }

    setIsDesktop(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const maxParticles = 40;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2.5 + 1;
        this.speedX = Math.random() * 2.5 - 1.25;
        this.speedY = Math.random() * 2.5 - 1.25;
        this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
        this.life = 100;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 2.5;
        this.size *= 0.98;
      }

      draw() {
        ctx.globalAlpha = this.life / 100;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleMouseMove = (e) => {
      for (let i = 0; i < 4; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
      if (particles.length > maxParticles) {
        particles.splice(0, particles.length - maxParticles);
      }
    };

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default SparkleCursor;
