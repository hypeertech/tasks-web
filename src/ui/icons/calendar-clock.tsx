import React from 'react';

export const CalendarClock: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g transform="matrix(.87 0 0 .87 1.56 1.56)">
        <defs>
          <style>{`.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}`}</style>
        </defs>
        <path
          className="a"
          d="M8.25 17.25h-6a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v4.5M.75 6.75h16.5M5.25 3.75v-3M12.75 3.75v-3"
        />
        <circle className="a" cx="17.25" cy="17.25" r="6" />
        <path className="a" d="M19.902 17.25H17.25v-2.651" />
      </g>
    </svg>
  );
};
