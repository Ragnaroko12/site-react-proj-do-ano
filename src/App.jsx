import BodyEletronic from "./components/LixoEletronico/BodyEletronic";
import Texto from "./components/Geral/Text";
import { useState } from "react";
import NavBar from "./components/LixoEletronico/NavBar";

function App() {
  const [menuClick, setMenuClick] = useState(false);
  const [mapaclick, setmapaclick] = useState(false);
  function clicado() {
    setMenuClick((F) => !F);
  }
  function setmapa() {
    setmapaclick((F) => !F);
  }

  if (menuClick == false) {
    return (
      <div className="bg-blue h-screen w-screen">
        <div className="bg-blue">
          <BodyEletronic clicado={clicado} verificar={menuClick} />
          <Texto title="Oque é lixo eletronico" position={1} link="1.png">
            Lixo eletrônico (ou e-lixo) é todo tipo de equipamento eletrônico ou
            elétrico que foi descartado porque quebrou, ficou obsoleto ou
            simplesmente parou de ser usado. Isso inclui desde coisas pequenas,
            como pilhas, baterias, carregadores e fones de ouvido, até itens
            maiores, tipo computadores, televisores, geladeiras, impressoras,
            celulares, entre outros.
          </Texto>
          <Texto position={2} title="Impactos Ambientais">
            O crescimento acelerado da tecnologia trouxe benefícios incríveis
            pro nosso dia a dia, mas também gerou um problema que muita gente
            ignora: o lixo eletrônico. Quando esses equipamentos são descartados
            de forma incorreta, o impacto no meio ambiente é muito maior do que
            parece. Os resíduos eletrônicos possuem metais pesados como chumbo,
            mercúrio e cádmio. Quando jogados no lixo comum ou deixados em
            terrenos baldios, essas substâncias tóxicas acabam penetrando no
            solo e, com o tempo, alcançam os lençóis freáticos e rios,
            contaminando a água que a gente consome. Isso prejudica a
            agricultura, a vida aquática e pode comprometer a segurança
            alimentar de diversas regiões.
          </Texto>
          <Texto position={3} link="1.png">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis velit aut quidem nobis natus veniam quasi! Magni
            ratione excepturi harum quod a doloribus, repudiandae suscipit
            eligendi quo laboriosam, non dolor! Illo voluptates voluptas dolorum
            sequi! Quibusdam odit aspernatur porro quae et sequi maxime dolore
            neque deserunt molestiae a ipsa nesciunt veritatis, itaque culpa
            eveniet? Rem quisquam nulla exercitationem esse ab. Ipsam pariatur
            recusandae molestias ea maxime repudiandae vero magni, dignissimos
            earum in mollitia quasi deleniti labore sed magnam ratione
            accusantium eius perferendis ipsum eaque tenetur sint error. Vitae,
            repellat. Maiores!
          </Texto>
        </div>
      </div>
    );
  } else if (mapaclick == true) {
    <NavBar clicado={clicado} mapa={setmapa} />;
    <h1>OITO</h1>;
  } else {
    return (
      <div>
        <NavBar clicado={clicado} mapa={setmapa} />
      </div>
    );
  }
}

export default App;
