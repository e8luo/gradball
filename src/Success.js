import React, { useState } from "react";
import "./TicketsPage.css";

function TicketsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="tickets-container">
      {/* Background GIF */}
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzl2N3IzbXdvY21mdGVtdXl2aWlrdTRldDJ6bmhveGJoZ3B5cW93YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tVM0hQmU52iKcLI1Kk/giphy.gif"
        className="background-gif"
      />

      {/* Titles */}
      <h1 className="title-text">Yay thank you for being my date!!</h1>
      <h1 className="title-text">I can't wait to dance with you 🥹</h1>

      {/* Cats */}
      <div className="cat-gif-container">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTl2cXdicmVvYXJ6YndkejRpYXZsNTM0MTN3ZmU4M3E1NXJwYjdycSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/rrasLFSTyi4Th1e8Xo/giphy.gif"
          alt="Happy Cat 1"
          className="cat-gif"
        />
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTl2cXdicmVvYXJ6YndkejRpYXZsNTM0MTN3ZmU4M3E1NXJwYjdycSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/rrasLFSTyi4Th1e8Xo/giphy.gif"
          alt="Happy Cat 2"
          className="cat-gif"
        />
      </div>

      {/* Open Instructions Button */}
      <button className="open-btn" onClick={() => setOpen(true)}>
        Instructions ❤️
      </button>

      {/* Full-screen Popup */}
{open && (
  <>
    {/* GIF behind popup */}
    <img
      src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzl2N3IzbXdvY21mdGVtdXl2aWlrdTRldDJ6bmhveGJoZ3B5cW93YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tVM0hQmU52iKcLI1Kk/giphy.gif"
      alt="Popup Background"
      className="popup-background-gif"
    />

    <div className="popup-container">
      <div className="popup">
        <div className="popup-header">
          <h2 className="popup-title">Instructions</h2>
          <button className="close-popup" onClick={() => setOpen(false)}>✖</button>
        </div>

        <div className="popup-content">
          <p className="popup-text">
            Things to bring:<br /><br />
            1. A suit<br />
            2. Your best dancing shoes<br />
            3. Your pretty smile<br /><br />
            I have our tickets. See you there :)<br />
            p.s. I love you!
          </p>

          {/* Tickets at bottom */}
          <div className="tickets">
            <img src="/tickets.png" alt="Ticket" className="ticket" />
          </div>
        </div>
      </div>
    </div>
  </>
)}




    </div>
  );
}

export default TicketsPage;
