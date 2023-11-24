import { useRef } from 'react';
import CardTarotImg from '../../assets/carta-tarot-01.jpg'
import styled from '../../styles/card.module.scss'
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

interface CardProps {
  image?: string
  title?: string;
  description?: string;
}

export function Card({ image = CardTarotImg, title = 'Leitura Simples', description = 'leitura direta.' }: CardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rippleRef = useRef<any>(null)

  const onRippleStart = (e: unknown) => {
    rippleRef.current.start(e);
  };
  const onRippleStop = (e: unknown) => {
    rippleRef.current.stop(e);
  };

  return (
    <div onMouseDown={onRippleStart} onMouseUp={onRippleStop} className={styled.container}>
      <img src={image} alt={title} height="68px" width="68px" />

      <div className={styled.container_description}>
        <span className={styled.title}>{title}</span>
        <br />
        <span className={styled.description}>{description}</span>

      </div>
      <TouchRipple ref={rippleRef} />
    </div>
  )
}