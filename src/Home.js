import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();
  const yesRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Position the No button relative to Yes button
useEffect(() => {
  const updatePosition = () => {
    if (yesRef.current) {
      const rect = yesRef.current.getBoundingClientRect();
      setPosition({
        top: `${rect.top}px`,
        left: `${rect.right + 20}px`,
      });
    }
  };

  // Run after a short delay to ensure layout is done
  const timer = setTimeout(updatePosition, 50);

  // Also recalc on window resize
  window.addEventListener("resize", updatePosition);

  return () => {
    clearTimeout(timer);
    window.removeEventListener("resize", updatePosition);
  };
}, []);

  const moveButton = () => {
    const buttonWidth = 150; // approximate width of button
    const buttonHeight = 50; // approximate height
    const maxTop = window.innerHeight - buttonHeight;
    const maxLeft = window.innerWidth - buttonWidth;

    const randomTop = Math.random() * maxTop;
    const randomLeft = Math.random() * maxLeft;

    setPosition({
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
    });
  };

  return (
    <div className="home-container">
      {/* Fullscreen shimmer background GIF */}
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2hib3c0cnkzM2YycmNzdjRqdWpreGw2YnFienI5YzZkNXhzanF5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26n6G8lRMOrYC6rFS/giphy.gif"
        alt="Shimmer Background"
        className="background-gif"
      />

      {/* Disco Ball + Text */}
      <div className="gif-container">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzh4ZzNxMWVsZG8xdnlsa3JmNHRseTh5cDZoa2c2b3F4dTZ6aHJ4ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K20uJQyNnchq0/giphy.gif"
          alt="Disco Ball"
          className="disco-gif"
        />
        
        <h1 className="title-text"> Dear Louis-Victor, </h1>
        <h1 className="title-text">Will you be my date to the ball? 💃🕺</h1>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button
          ref={yesRef}
          className="yes-btn"
          onClick={() => navigate("/yes")}
        >
          Yes of course my darling 💖
        </button>

        <button
          className="no-btn"
          onMouseEnter={moveButton}
          onClick={moveButton}
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          No ☹️
        </button>
      </div>
    </div>
  );
}

export default Home;
