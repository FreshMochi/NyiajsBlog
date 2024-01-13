import React, { useState, useEffect } from 'react';

export default function About() {
  // State to control the visibility of the iframe
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    // Set a timer to change the showIframe state after 1 second
    const timer = setTimeout(() => {
      setShowIframe(true); // After 1 second, set showIframe to true
    }, 1000);

    // Clear the timer if the component unmounts before the timer finishes
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  return (
    <div>
      {showIframe && (''
      )}
    </div>
  );
}
