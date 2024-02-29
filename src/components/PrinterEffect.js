import React, { useEffect, useState } from 'react';

const PrinterEffect = ({ text, speed = 100 }) => {
  const [printedText, setPrintedText] = useState('');

  useEffect(() => {
    if (text.length > printedText.length) {
      setTimeout(() => {
        setPrintedText(text.substring(0, printedText.length + 1));
      }, speed);
    }
  }, [printedText, text, speed]);

  return <div>{printedText}</div>;
};

export default PrinterEffect;
