function Main() {
  return (
    <div className=" flex items-center flex-col gap-5 p-7 leading-7">
      <h1 className="text-gray-700 text-2xl Orbitron">
        O que é lixo eletronico?
      </h1>
      <div className="flex flex-col-reverse">
        <img src="Lixo.png" />
        <p className="text-gray-500">
          Lixo eletrônico (ou e-lixo) é todo tipo de equipamento eletrônico ou
          elétrico que foi descartado porque quebrou, ficou obsoleto ou
          simplesmente parou de ser usado. Isso inclui desde coisas pequenas,
          como pilhas, baterias, carregadores e fones de ouvido, até itens
          maiores, tipo computadores, televisores, geladeiras, impressoras,
          celulares, entre outros.
        </p>
      </div>
      <h1 className="text-gray-700 text-2xl Orbitron">Impactos Ambientais</h1>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-gray-500">
          O crescimento acelerado da tecnologia trouxe benefícios incríveis pro
          nosso dia a dia, mas também gerou um problema que muita gente ignora:
          o lixo eletrônico. Quando esses equipamentos são descartados de forma
          incorreta, o impacto no meio ambiente é muito maior do que parece. Os
          resíduos eletrônicos possuem metais pesados como chumbo, mercúrio e
          cádmio. Quando jogados no lixo comum ou deixados em terrenos baldios,
          essas substâncias tóxicas acabam penetrando no solo e, com o tempo,
          alcançam os lençóis freáticos e rios, contaminando a água que a gente
          consome. Isso prejudica a agricultura, a vida aquática e pode
          comprometer a segurança alimentar de diversas regiões.
        </p>
        <p className="text-gray-500">
          Além disso, algumas pessoas recorrem à queima desses materiais como
          forma de "dar fim" ao problema, o que só agrava ainda mais a situação.
          A queima libera gases altamente tóxicos, como as dioxinas e os
          furanos, que poluem o ar e contribuem para o agravamento das mudanças
          climáticas. Esses poluentes permanecem no ambiente por muito tempo e
          podem se espalhar por grandes distâncias. O impacto do lixo eletrônico
          vai muito além do lugar onde ele é jogado. Ele afeta a qualidade da
          água, do solo e do ar, colocando em risco ecossistemas inteiros.
        </p>
        <img src="CaminhoLixo.png" className="w-90 h-60" />
      </div>
      <h1 className="text-gray-700 text-2xl Orbitron">
        Triagem lixo eletronico
      </h1>
      <div className="flex flex-col-reverse items-center justify-center">
        <img src="Triagem.png" className="w-70 h-60" />
        <p className="text-gray-500">
          Após a coleta, a reciclagem do lixo eletrônico tem início com a
          triagem. Nessa etapa, os equipamentos são separados entre os que ainda
          podem ser reutilizados e os que devem ser desmontados. Em seguida,
          ocorre a separação de componentes como carcaça, bateria, vidro e
          placas de circuito, cada um com destinação específica. No
          processamento, a carcaça é triturada e separada por densidade. Os
          resíduos plásticos resultantes podem ser vendidos para empresas que
          reaproveitam os polímeros, incinerados para geração de energia ou até
          derretidos e transformados em novos materiais, com propriedades
          mecânicas satisfatórias. Componentes tóxicos são armazenados em
          tanques apropriados e encaminhados para empresas especializadas. O
          vidro é classificado, moído e tratado, enquanto as baterias são
          enviadas a companhias específicas, responsáveis pelo descarte seguro
          ou pela reciclagem adequada desses materiais.
        </p>
      </div>
      <h1 className="text-gray-700 text-2xl Orbitron">
        Impactos na saude humana
      </h1>
      <div className="flex flex-col items-center">
        <p className="text-gray-500">
          O lixo eletrônico, que são aqueles aparelhos velhos ou quebrados como
          celulares, computadores, televisores e outros, contém vários materiais
          tóxicos que podem fazer um estrago na saúde das pessoas quando não são
          descartados direito. Pesquisas mostram que substâncias como chumbo,
          mercúrio, cádmio, e retardantes de chama (que tão em placas e cabos)
          são liberadas no meio ambiente e acabam entrando no nosso corpo de
          diversas formas.
        </p>
        <p className="text-gray-500">
          Por exemplo, quando esses materiais são queimados eles liberam gases
          tóxicos que, ao serem inalados, podem causar problemas sérios no
          sistema respiratório, como bronquite, asma e até câncer de pulmão.
          Além disso, o contato direto com metais pesados pode levar a problemas
          no sistema nervoso, causando dores de cabeça, dificuldades de
          concentração, e até danos irreversíveis em casos graves. Outro ponto
          importante é que o lixo eletrônico pode contaminar o solo e a água, e
          quando isso acontece, os metais pesados entram na cadeia alimentar,
          passando para plantas, animais e finalmente para as pessoas. Isso pode
          provocar intoxicações crônicas, que vão se manifestar em doenças como
          problemas renais, alterações no fígado e até na reprodução.
        </p>
        <img src="Hospital.png" className="w-70 h-60" />
      </div>
    </div>
  );
}

export default Main;
