import Texto from "../Geral/Text";
import NavBar from "./NavBar";

function BodyEletronic({ pagmap, pagprinc, pagsobre }) {
  return (
    <div>
      <NavBar pagmap={pagmap} pagprinc={pagprinc} pagsobre={pagsobre} />
      <div className="ml-40 mr-40 mt-10 bg-gray-100">
        <h1 className="Orbitron text-7xl text-yellow">LIXO ELETRONICO</h1>
        <h2 className=" Orbitron text-4xl text-white text-center">
          "O impacto invisível dos resíduos eletrônicos"
        </h2>
      </div>
      <div className="bg-gray-100">
        <Texto title="Oque é lixo eletronico" position={1} link="1.jpg">
          Lixo eletrônico (ou e-lixo) é todo tipo de equipamento eletrônico ou
          elétrico que foi descartado porque quebrou, ficou obsoleto ou
          simplesmente parou de ser usado. Isso inclui desde coisas pequenas,
          como pilhas, baterias, carregadores e fones de ouvido, até itens
          maiores, tipo computadores, televisores, geladeiras, impressoras,
          celulares, entre outros.
        </Texto>
        <Texto position={2} title="Impactos Ambientais">
          O crescimento acelerado da tecnologia trouxe benefícios incríveis pro
          nosso dia a dia, mas também gerou um problema que muita gente ignor.
          Quando esses equipamentos são descartados da: o lixo eletrônicoe forma
          incorreta, o impacto no meio ambiente é muito maior do que parece. Os
          resíduos eletrônicos possuem metais pesados como chumbo, mercúrio e
          cádmio. Quando jogados no lixo comum ou deixados em terrenos baldios,
          essas substâncias tóxicas acabam penetrando no solo e, com o tempo,
          alcançam os lençóis freáticos e rios, contaminando a água que a gente
          consome. Isso prejudica a agricultura, a vida aquática e pode
          comprometer a segurança alimentar de diversas regiões.
        </Texto>
        <Texto position={3} link="1.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          velit aut quidem nobis natus veniam quasi! Magni ratione excepturi
          harum quod a doloribus, repudiandae suscipit eligendi quo laboriosam,
          non dolor! Illo voluptates voluptas dolorum sequi! Quibusdam odit
          aspernatur !
        </Texto>
      </div>
    </div>
  );
}

export default BodyEletronic;
