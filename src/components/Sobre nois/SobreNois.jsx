import React, { useState } from "react";

export default function SobreNos() {
  const [flipIndex, setFlipIndex] = useState(null);

  const membros = [
    {
      nome: "Luis Gustavo",
      idade: 17,
      sexualidade: "hominiman",
      img: "Images grup members/Senai.png",
      classeExtra: "senai formatação",
    },
    {
      nome: "Felipe Luz",
      idade: 18,
      sexualidade: "—",
      img: "Images grup members/Felipe.jpg",
      classeExtra: "Felipe formatação",
    },
    {
      nome: "Vinicius (Japa)",
      idade: 17,
      sexualidade: "—",
      img: "Images grup members/Japa.jpg",
      classeExtra: "Japa formatação",
    },
  ];

  const toggleFlip = (index) => {
    setFlipIndex(flipIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1>Sobre nós</h1>
      <p>
        Nosso grupo é composto por quatro membros: Felipe Luz, Luis Deronzi,
        Vinicius e Gustavo. Juntos, escolhemos desenvolver um projeto voltado
        para o tema da economia sustentável, pois acreditamos que esse assunto é
        cada vez mais urgente e necessário nos dias de hoje. Trabalhar em equipe
        nos permitiu reunir ideias diferentes para criar algo que realmente pode
        gerar impacto positivo na sociedade.
        <br />
        <br />A escolha desse tema veio da nossa preocupação com o jeito que os
        recursos naturais estão sendo usados e muitas vezes desperdiçados. Com o
        site, queremos mostrar como é possível aliar crescimento econômico com
        práticas conscientes, incentivando hábitos sustentáveis tanto no consumo
        quanto na produção. Nosso objetivo é informar, conscientizar e inspirar
        as pessoas a adotarem atitudes que contribuam para um futuro mais
        equilibrado e responsável.
      </p>

      <h2>Membros do grupo</h2>

      <div className="">
        {membros.map((membro, index) => (
          <div key={index}>
            <div
              className={`flip-container ${
                flipIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFlip(index)}
            >
              <div className="flip">
                <div className="front">
                  {membro.img && (
                    <img
                      src={membro.img}
                      alt={membro.nome}
                      width="200"
                      height="350"
                    />
                  )}
                </div>
                <div className={`back ${membro.classeExtra || ""}`}>
                  Nome: {membro.nome} <br />
                  Idade: {membro.idade} <br />
                  Sexualidade: {membro.sexualidade}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
