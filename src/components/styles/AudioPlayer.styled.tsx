import styled from "styled-components";

const PlayerContainer = styled.div`
  max-width: 100%;
  margin: auto;
  color: var(--color-text-primary);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  width: 100%;
  font-size: 14px;
  color: var(--color-text-secondary);
`;

interface Props {
    $max: number,
    $value: number
}

const ProgressBar = styled.input.attrs({ type: "range" }) <Props> `
  width: 100%;
  appearance: none;
  height: 8px;
  background: linear-gradient(to right, teal ${(p) => (p.$value / p.$max) * 100}%, #444 ${(p) => (p.$value / p.$max) * 100}%);
  border-radius: var(--border-radius);
  outline: none;
  overflow: hidden;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 6px;
    height: 12px;
    border-radius: var(--border-radius);
    background: teal;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 6px;
    height: 12px;
    border-radius: var(--border-radius);
    background: teal;
    cursor: pointer;
  }
`;

const Button = styled.button`
  background: var(--bg-color);
  color: var(--color-text-primary);
  border: none;
  padding: 8px 12px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s ease;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    /* background: #194d5b; */
    background: teal;
  }

  &:disabled {
    background: #555;
    cursor: not-allowed;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
`;

const PlayButton = styled(Button)`
  padding: 8px 20px;
  font-size: 1rem;
`;

export {
  PlayerContainer,
  TimeDisplay,
  ProgressBar,
  Button,
  Controls,
  PlayButton,
};
