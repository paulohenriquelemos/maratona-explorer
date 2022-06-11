import { useState } from 'react'
import { Button } from '../../components/Button'

import { HomeMainStyles } from './styles'

export function Home() {
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')
  const [opacity, setOpacity] = useState('')

  const respostas = [
    "Conterteza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."
  ]

  function handleClick() {
    let numAleatorio = Math.floor(Math.random() * respostas.length)
    setResposta(respostas[numAleatorio])

    setTimeout(() => {
      setOpacity('opacity')
    }, 4000)
  }
  return(
    <HomeMainStyles>
      <div className="container">
        <img src="/images/Owl.svg"
          alt="Imagem de uma coruja" />
        <h1>Vou revelar o seu <strong>destino</strong>!</h1>
        <p>Clique em fazer pergunta para que seu destino seja revelado.</p>
        <input type="text" placeholder="Digite sua pergunta"
          value={pergunta} onChange={e => {
            setPergunta(e.target.value)
            setResposta('')
          }}
          onFocus={() => {
            setPergunta('')
            setResposta('')
            setOpacity('')
          }}
          name="" id=""
        />
        <Button handleClick={handleClick} pergunta={pergunta.length} resposta={resposta.length} />
        <p className={`text-pergunta ${opacity}`}>
          {resposta.length === 0 ? '' : pergunta}
        </p>
        <h3 className={`resposta ${opacity}`}>
          {resposta}
        </h3>
      </div>
    </HomeMainStyles>
  )
}
