"use client"
import React, { useState, useEffect } from 'react';

interface CounterProps {
  label: string;
  count: number;
}

const Counter: React.FC<CounterProps> = ({ label, count }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2  style={{ color: 'white' }} className="md:text-2xl lg:text-3xl text-white font-semibold">{count}</h2>
      <p style={{ color: 'white',textAlign:'center' }} className="md:text-2xl lg:text-3xl text-white">{label}</p>
    </div>
  );
};

interface AnimatedCounterProps {
  label: string;
  initialValue: number;
  targetValue: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ label, initialValue, targetValue }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const increment = Math.ceil((targetValue - initialValue) / 50);
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + increment;
        return nextCount <= targetValue ? nextCount : targetValue;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [initialValue, targetValue]);

  return <Counter label={label} count={count} />;
};

const ByTheNumbers: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Logic to check if the component is in view
      const component = document.getElementById('by-the-numbers');
      if (component) {
        const rect = component.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          // The component is in view, trigger animations
          // You can put any logic here to trigger the counter animations
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="by-the-numbers" style={{ background: '#DD5746' }} className="rounded-xl p-10">
      <h2 style={{ lineHeight: 1, fontWeight: '700', color: 'white' }} className="text-4xl md:text-6xl lg:text-8xl text-center mb-6">fusion freights by the numbers</h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-full md:flex md:justify-between mt-20 md:mt-20 md:mb-10">
          <AnimatedCounter label="Product Launched" initialValue={0} targetValue={100} />
          <div className="xl:border-l md:border-l md:border-l-secondary h-20 md:border-1 mx-4 my-2 md:my-0"></div>
          <AnimatedCounter label="Employees" initialValue={0} targetValue={500} />
          <div className="md:border-l h-20 md:border-1 md:border-l-secondary mx-4 my-2 md:my-0"></div>
          <AnimatedCounter label="Countries" initialValue={0} targetValue={50} />
          <div className="md:border-l h-20 md:border-1 md:border-l-secondary mx-4 my-2 md:my-0"></div>
          <AnimatedCounter label="Board Actions" initialValue={0} targetValue={10} />
          <div className="md:border-l h-20 md:border-1 md:border-l-secondary mx-4 my-2 md:my-0"></div>
          <AnimatedCounter label="Customers" initialValue={0} targetValue={1000} />
        </div>
      </div>
    </div>
  );
};

export default ByTheNumbers;
