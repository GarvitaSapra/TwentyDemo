/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Define the style using Emotion's css function
const boxStyle = css`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

// Create the component
const HoverBox = () => (
  <div css={boxStyle}>
    Hover me!
  </div>
);

export default HoverBox;
