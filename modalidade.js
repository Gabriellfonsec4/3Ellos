const seguros = {
  auto: {
    nome: "Seguro Auto",
    tag: "MOBILIDADE",
    chamada: "Mais tranquilidade para seguir o seu caminho.",
    intro:
      "O seguro auto ajuda a proteger seu veículo e a lidar com situações inesperadas na rotina ou na estrada.",
    sobre:
      "A escolha depende do veículo, do uso e do perfil de quem dirige. Nossa equipe pode ajudar você a comparar alternativas e entender as condições antes de contratar.",
    pontos: [
      "Proteção em situações como colisão, roubo ou furto, conforme a apólice.",
      "Cobertura para terceiros e assistência podem ser consideradas.",
      "Avalie franquia, limites, exclusões e serviços incluídos.",
    ],
  },
  saude: {
    nome: "Plano de Saúde",
    tag: "BEM-ESTAR",
    chamada: "Cuidado para você, sua família ou sua equipe.",
    intro:
      "Encontre uma opção de assistência à saúde alinhada às necessidades de quem você quer cuidar.",
    sobre:
      "Na escolha de um plano, vale observar a rede credenciada, a área de atendimento, a acomodação, as carências e a composição de custos. Converse com a 3 Ellos sobre as opções disponíveis.",
    pontos: [
      "Confira médicos, clínicas e hospitais da rede.",
      "Entenda abrangência geográfica, carências e coparticipação.",
      "Compare alternativas individuais, familiares ou empresariais disponíveis.",
    ],
  },
  residencial: {
    nome: "Seguro Residencial",
    tag: "PATRIMÔNIO",
    chamada: "Sua casa merece uma proteção à altura.",
    intro:
      "Uma maneira de cuidar do imóvel e dos bens que fazem parte da sua rotina.",
    sobre:
      "As opções variam segundo as características do imóvel e os riscos que você deseja considerar. A equipe pode orientar a análise de coberturas, limites e serviços adicionais.",
    pontos: [
      "Analise coberturas para incêndio e outros eventos previstos na apólice.",
      "Confira possíveis assistências para situações do dia a dia.",
      "Informe características corretas do imóvel e avalie exclusões.",
    ],
  },
  empresarial: {
    nome: "Seguro Empresarial",
    tag: "NEGÓCIOS",
    chamada: "Mais segurança para continuar crescendo.",
    intro: "Proteção pensada para o patrimônio e as atividades do seu negócio.",
    sobre:
      "Cada empresa tem operações e riscos próprios. Uma conversa ajuda a identificar necessidades e avaliar alternativas compatíveis com a atividade, o imóvel e os equipamentos.",
    pontos: [
      "Considere estrutura física, equipamentos e operação.",
      "Avalie responsabilidade civil e interrupção de atividades quando disponíveis.",
      "Observe limites, franquias e condições de cada cobertura.",
    ],
  },
  vida: {
    nome: "Seguro de Vida",
    tag: "PESSOAS",
    chamada: "Um cuidado que acompanha quem importa.",
    intro:
      "Planeje proteção financeira para você e para as pessoas importantes na sua vida.",
    sobre:
      "As características do seguro de vida variam entre produtos. A equipe pode ajudar a avaliar capitais segurados, coberturas, beneficiários e condições para contratar de forma consciente.",
    pontos: [
      "Defina quem deseja proteger e quais são suas necessidades.",
      "Compare eventos cobertos e respectivos limites.",
      "Confira regras de aceitação, carências e exclusões.",
    ],
  },
  viagem: {
    nome: "Seguro Viagem",
    tag: "EXPERIÊNCIAS",
    chamada: "Seu próximo destino começa com mais confiança.",
    intro:
      "Planeje sua viagem considerando assistência para imprevistos longe de casa.",
    sobre:
      "Destino, duração e tipo de viagem ajudam a definir as opções. Antes de contratar, confira os serviços, limites de assistência e as regras exigidas pelo destino.",
    pontos: [
      "Informe destino e datas corretas da viagem.",
      "Avalie assistência médica, bagagem e outros serviços previstos.",
      "Confira limites, exclusões e canais para acionar a assistência.",
    ],
  },
  condominios: {
    nome: "Seguro para Condomínios",
    tag: "PATRIMÔNIO COLETIVO",
    chamada: "Proteção para os espaços de todos.",
    intro:
      "Ajude a preservar áreas comuns e estruturas do condomínio com uma solução adequada.",
    sobre:
      "O tipo de condomínio e suas instalações orientam a análise. É importante observar as obrigações aplicáveis, as coberturas da apólice e o que cabe às unidades individuais.",
    pontos: [
      "Considere características da edificação e áreas comuns.",
      "Avalie coberturas e limites conforme as necessidades do condomínio.",
      "Diferencie a proteção condominial do seguro das unidades.",
    ],
  },
  engenharia: {
    nome: "Risco de Engenharia",
    tag: "OBRAS E PROJETOS",
    chamada: "Sua obra avança com mais planejamento.",
    intro:
      "Uma modalidade voltada à proteção de obras, instalações e projetos de engenharia.",
    sobre:
      "Porte, etapas e características técnicas do projeto influenciam a análise. Compartilhe as informações da obra para avaliar opções e condições disponíveis.",
    pontos: [
      "Descreva tipo, local, prazo e valores do projeto.",
      "Verifique quais danos materiais e etapas podem ser contemplados.",
      "Observe exigências, franquias e exclusões da apólice.",
    ],
  },
  "riscos-diversos": {
    nome: "Riscos Diversos",
    tag: "PROTEÇÕES ESPECÍFICAS",
    chamada: "Proteção ajustada ao que você precisa.",
    intro:
      "Alternativas para bens e situações que pedem uma análise específica.",
    sobre:
      "Esta modalidade reúne produtos com características diferentes. A identificação do bem, do uso e dos riscos é o primeiro passo para buscar uma alternativa adequada.",
    pontos: [
      "Descreva o bem e como ele é utilizado.",
      "Informe local de uso e valor para cotação.",
      "Compare riscos cobertos, limites e exclusões.",
    ],
  },
  fianca: {
    nome: "Seguro Fiança",
    tag: "LOCAÇÃO",
    chamada: "Uma alternativa para facilitar a locação.",
    intro:
      "Solução de garantia locatícia a ser avaliada por locadores, imobiliárias e inquilinos.",
    sobre:
      "As regras de análise e os serviços incluídos variam conforme o produto. Nossa equipe pode explicar as condições disponíveis para a sua negociação.",
    pontos: [
      "Confirme quais obrigações da locação são contempladas.",
      "Entenda o processo de análise e a documentação necessária.",
      "Confira valores, vigência e condições de renovação.",
    ],
  },
  "responsabilidade-civil": {
    nome: "Responsabilidade Civil",
    tag: "ATIVIDADES E PATRIMÔNIO",
    chamada: "Mais preparo diante de responsabilidades.",
    intro:
      "Avalie proteção para situações em que sua atividade possa gerar danos a terceiros.",
    sobre:
      "As modalidades de responsabilidade civil variam de acordo com a atividade e a exposição ao risco. É essencial definir corretamente o que precisa ser protegido.",
    pontos: [
      "Descreva a atividade ou operação com precisão.",
      "Avalie coberturas específicas e limites de indenização.",
      "Confira exclusões, franquias e exigências contratuais.",
    ],
  },
};

const tipo = document.body.dataset.seguro;
const item = seguros[tipo];

if (item) {
  document.title = `${item.nome} | 3 Ellos Corretora de Seguros`;

  document.querySelector('meta[name="description"]').content =
    `${item.nome} com a 3 Ellos Corretora de Seguros. Saiba mais e solicite uma cotação.`;

  document
    .querySelectorAll("[data-nome]")
    .forEach((el) => (el.textContent = item.nome));
  document
    .querySelectorAll("[data-tag]")
    .forEach((el) => (el.textContent = item.tag));
  document
    .querySelectorAll("[data-chamada]")
    .forEach((el) => (el.textContent = item.chamada));
  document
    .querySelectorAll("[data-intro]")
    .forEach((el) => (el.textContent = item.intro));
  document
    .querySelectorAll("[data-sobre]")
    .forEach((el) => (el.textContent = item.sobre));

  const lista = document.querySelector("[data-pontos]");
  item.pontos.forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });

  document.querySelectorAll("[data-cotacao]").forEach((link) => {
    const mensagem = `Olá, vim pelo site e gostaria de cotar ${item.nome}.`;
    link.href = `https://wa.me/5521996011307?text=${encodeURIComponent(mensagem)}`;
  });
}
