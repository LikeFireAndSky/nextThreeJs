'use client'
// pages/reading.js

import { useState, useEffect } from 'react';

export default function Reading() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [inputError, setInputError] = useState(false);

  function toggle() {
    if (isNaN(seconds) || seconds <= 0) {
      setInputError(true);
      setIsActive(false);
      return;
    }

    setInputError(false);
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  function handleInput(e : any) {
    setSeconds(e.target.value);
  }

  useEffect(() => {
    let interval : any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds > 0 ? seconds - 1 : 0);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (seconds === 0 && isActive) {
      alert('Time is up!');
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl text-center font-semibold my-4">Reading Encouragement</h1>
      <p className="mb-4">
        Reading books is an excellent habit. It enhances our understanding of the world, 
        enriches our vocabulary, and improves our cognitive abilities. Pick up a book and 
        let your mind wander in the world of knowledge.
      </p>
      <div>
        <label className="block mb-2">Set your reading timer (in seconds):</label>
        <input 
          type="number" 
          value={seconds} 
          onChange={handleInput} 
          className="border rounded w-full py-2 px-3 text-gray-700 mb-3"
        />
        {inputError && <p className="text-red-500">Please input a valid number greater than 0</p>}
        <div className="flex space-x-2">
          <button onClick={toggle} className="w-full flex items-center justify-center rounded-md bg-blue-600 text-white">
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={reset} className="w-full flex items-center justify-center rounded-md bg-red-600 text-white">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
