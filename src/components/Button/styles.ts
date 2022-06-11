import styled from 'styled-components'

export const ButtonStyles = styled.button`
  background: linear-gradient(135deg, var(--bg-button), var(--bg-button2));
  display: block;
  padding: 1.125rem;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover::not(:disabled) {
    filter: brightness(1.3);
    border-radius: 0.625rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
