import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";

function Casa({ pagprinc }) {
  return (
    <div className="flex items-start flex-col gap-5 p-7 leading-7  text-gray-500">
      <h1 className="text-gray-700 text-2xl Orbitron">
        como descartar o lixo eletrônico
      </h1>
      <h2 className="text-gray-700">passo a passo</h2>
      <p>
        Um guia prático e direto para descartar lixo eletrônico de forma correta
        em ecopontos.
      </p>

      <h2 className="text-gray-700">1. Separe em casa</h2>
      <ul className="list-disc">
        <li>
          Reúna equipamentos e peças eletrônicas: celulares, cabos,
          carregadores, baterias, computadores, eletrônicos pequenos, pilhas
          etc.
        </li>
        <li>
          Não misture com lixo comum ou recicláveis domésticos (papel, vidro,
          plástico).
        </li>
      </ul>

      <h2 className="text-gray-700">2. Verifique o que o ecoponto aceita</h2>
      <ul className="list-disc">
        <li>
          Nem todo ecoponto aceita todos os tipos de eletrônicos. Consulte o
          site da prefeitura ou ligue antes de levar.
        </li>
      </ul>

      <h2 className="text-gray-700">3. Prepare para transporte</h2>
      <ul className="list-disc">
        <li>Remova cartões de memória, chips e discos com dados pessoais.</li>
        <li>
          Coloque itens pequenos (cabos, carregadores) em caixas ou sacos.
        </li>
        <li>Não desmonte os equipamentos por conta própria.</li>
      </ul>

      <h2 className="text-gray-700">4. No ecoponto</h2>
      <ul className="list-disc">
        <li>Procure o responsável ou leia as instruções no local.</li>
        <li>
          Coloque pilhas e baterias em recipientes próprios e outros aparelhos
          nos coletores corretos.
        </li>
        <li>Não deixe itens soltos no chão.</li>
      </ul>

      <h2 className="text-gray-700">5. Registro e comprovante</h2>
      <ul className="list-disc">
        <li>
          Alguns ecopontos registram a entrega ou fornecem comprovante, útil
          para empresas ou escolas.
        </li>
      </ul>

      <h2 className="text-gray-700">6. O que acontece depois</h2>
      <ul className="list-disc">
        <li>
          O ecoponto encaminha os materiais para empresas licenciadas, onde
          ocorre a triagem, desmontagem, reaproveitamento de materiais e
          tratamento de resíduos perigosos
        </li>
      </ul>

      <h2 className="text-gray-700">Dicas finais</h2>
      <ul className="list-disc">
        <li>Pilhas e baterias nunca devem ir para o lixo comum.</li>
        <li>Apague dados de HDs, SSDs e celulares antes do descarte.</li>
        <li>
          Verifique se a fabricante ou loja do eletrônico possui programa de
          coleta (logística reversa).
        </li>
      </ul>

      <br />

      <h1 className="text-gray-700 text-2xl Orbitron">
        O que é lixo eletronico
      </h1>
      <p className="text-gray-500">
        Lixo eletrônico (ou e-lixo) é todo tipo de equipamento eletrônico ou
        elétrico que foi descartado porque quebrou, ficou obsoleto ou
        simplesmente parou de ser usado. Isso inclui desde coisas pequenas, como
        pilhas, baterias, carregadores e fones de ouvido, até itens maiores,
        tipo computadores, televisores, geladeiras, impressoras, celulares,
        entre outros.
      </p>
      <button></button>
      <Button
        variant="outlined"
        endIcon={<ArrowRight />}
        onClick={() => pagprinc()}
      >
        Saiba mais
      </Button>
    </div>
  );
}

export default Casa;
