import React from 'react';
import Pic from '../../Assets/pfpc.png';
import Eve from '../../Assets/evelyn.png';
import Git from '../../Assets/mediaIcons/github.png';
import Ln from '../../Assets/mediaIcons/linkedin.png';
import Zap from '../../Assets/mediaIcons/whatsapp.png';
import arrow from '../../Assets/arrow-down.gif';
import * as S from './HomeS';

export default function Home() {
  return (
    <S.Section>
      <S.Opndiv>
        {/* foto com apresentação */}
        <S.Picdiv>
          <S.Pfpic src={Pic} />
          <S.Intro>
            <img src={Eve} />
          </S.Intro>
        </S.Picdiv>
        <S.Arrow src={arrow} />
      </S.Opndiv>
      <S.Infodiv>
        <S.About>
          Meu nome é Evelyn Lima Barreto, tenho 17 anos, sou Dev júnior e
          artista.
        </S.About>
        <S.Icondiv>
          {/* icones */}
          <S.Li>
            <a target="_blank" href="https://github.com/eVliin">
              <img src={Git} />
              <p>https://github.com/eVliin</p>
            </a>
          </S.Li>
          <S.Li>
            <a target="_blank" href="https://contate.me/evelynma">
              <img src={Zap} />
              <p>+55 (21) 96884-6855</p>
            </a>
          </S.Li>
          <S.Li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/evelyn-lima-barreto/"
            >
              <img src={Ln} />
              <p>Evelyn Lima Barreto</p>
            </a>
          </S.Li>
        </S.Icondiv>
      </S.Infodiv>
    </S.Section>
  );
}
