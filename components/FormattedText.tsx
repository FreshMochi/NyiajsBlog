// components/FormattedText.tsx
import React from 'react';
import style from '../styles/FormattedText.module.css'; // Import CSS for styling

interface FormattedTextProps {
  content: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ content }) => {
  // Split the text into paragraphs using a regular expression
  const paragraphs = content.split(/\n\s*\n/).map((paragraph) => paragraph.trim());

  return (
    <div className={style.paragraphContainer}>
      {paragraphs.map((paragraph, index) => (
        <React.Fragment key={index}>
          <p className={style.paragraph}>{paragraph}</p>
          {index < paragraphs.length - 1 && <br />} {/* Add <br /> except after the last paragraph */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FormattedText;
