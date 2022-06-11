import styled from 'styled-components'

export const HomeMainStyles = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
    max-width: 30rem;
    padding: 2rem;

    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(0.625rem);
    -webkit-backdrop-filter: blur(0.625rem);
    box-shadow: 0 0.5rem 2rem 0 rgba(31, 38, 135, 0.37);
    border-radius: 0.5rem;

    img {
      margin-bottom: 2rem;
      width: 100%;
    }

    h1 {
      color: var(--tituloh1);
      margin-bottom: 0.5rem;
      text-align: center;

      strong {
        color: var(--strong);
        font-size: 2.5rem;
      }
    }

    p {
      color: var(--paragrafo);
      opacity: 0.8;
      margin-bottom: 2rem;
      text-align: center;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.4;
    }

    input {
      margin-bottom: 0.875rem;
      padding: 1rem;
      width: 100%;
      border-radius: 0.5rem;
      outline: none;
      border: 0.125rem solid transparent;
      font-size: 1rem;

      transition: all 0.3s ease;

      &:focus {
        border: 0.125rem solid var(--border-verde);
        border-radius: 0.625rem;
      }
    }

    .text-pergunta {
      font-weight: normal;
      margin-top: 1.875rem;
      margin-bottom: 0.625rem;
      opacity: 0.9;

      transition: opacity 1.5s ease;
    }

    .resposta {
      color: var(--resposta);
      display: block;
      font-size: 1.125rem;
      opacity: 0.9;
      
      transition: opacity 1.5s ease;
    }

    .opacity {
      opacity: 0;
    }
  }
`
