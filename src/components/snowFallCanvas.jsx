"use client";
import React, { useEffect, useRef } from "react";

const SnowfallCanvas = ({
  snowflakeImageSrc = "../assets/snowflakes.png",
  numFlakes = 100,
  speed = 2,
  color = "#ffffff",
  wind = 1,
  sizeRange = [3, 8],
  opacityRange = [0.6, 1],
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const flakes = [];
    let snowflakeImage = new Image();
    snowflakeImage.src = snowflakeImageSrc;

    class Snowflake {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size =
          Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
        this.speedY = Math.random() * speed + 0.5;
        this.speedX = (Math.random() - 0.5) * wind;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity =
          Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Reset flake when it goes off screen
        if (
          this.y > canvas.height ||
          this.x > canvas.width + 50 ||
          this.x < -50
        ) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(
          snowflakeImage,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        );
        ctx.restore();
      }
    }

    // Initialize flakes
    for (let i = 0; i < numFlakes; i++) {
      flakes.push(new Snowflake());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flakes.forEach((flake) => {
        flake.update();
        flake.draw();
      });

      requestAnimationFrame(animate);
    };

    const onImageLoad = () => {
      animate();
    };

    snowflakeImage.onload = onImageLoad;

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      snowflakeImage.onload = null;
    };
  }, [
    snowflakeImageSrc,
    numFlakes,
    speed,
    color,
    wind,
    sizeRange,
    opacityRange,
  ]);

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

export default SnowfallCanvas;
