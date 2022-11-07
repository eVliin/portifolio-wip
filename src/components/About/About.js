import React from 'react';
import Circle from '../../Assets/circuloptd_.gif';
import pontas from '../../Assets/pontas.png';
import progs from './Listas/progs';
import * as S from './AboutS';

export default function About() {
  return (
    <S.Section>
      <S.Circle src={Circle} />
      <S.Div>
        <S.Div1>
          <S.H2>Coding!</S.H2>
          <S.Proramslng>
            {progs.map((progs, index) => (
              <S.Li>
                <img src={progs.logo} />
                <p>{progs.nome}</p>
              </S.Li>
            ))}
          </S.Proramslng>
        </S.Div1>
      </S.Div>
      <S.Div2>
        <S.BgCut src={pontas} />
        WIP
      </S.Div2>
    </S.Section>
  );
}
