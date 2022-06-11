import { ButtonStyles } from './styles'

interface ButtonProps {
  pergunta: number;
  resposta: number;
  handleClick: () => void;
}

export function Button({pergunta, resposta, handleClick }: ButtonProps) {
  return(
    <ButtonStyles 
      disabled={ pergunta === 0 || resposta !== 0 }
      onClick={handleClick}
    >
      Fazer Pergunta
    </ButtonStyles>
  )
}
