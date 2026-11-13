const pessoal = {
  nome: 'Gabriel Pedrosa',
  email: 'gabrielpedrosa346@gmail.com',
  github: 'https://github.com/GabrielPedrosa0',
  linkedin: 'https://www.linkedin.com/in/gabriel-pedrosa-6618a6343/',
  whatsapp: '',
  curriculo: 'curriculo.pdf',
  foto: 'img/foto.jpg',
}

const projetosBase = {
  sigch: {
    id: 'sigch',
    nome: 'SIGCH',
    imagem: 'projetos/sigch.png',
    stack: ['React 19', 'Vite', 'Tailwind CSS 4', 'PostgreSQL', 'Auth', 'Realtime'],
    links: { demo: 'https://sigch-apresentacao.vercel.app', codigo: '', docs: 'https://github.com/GabrielPedrosa0/sigch-docs' },
  },
}

const pt = {
  meta: {
    titulo: 'Gabriel Pedrosa | Desenvolvedor full stack',
  },
  nav: {
    inicio: 'Início',
    sobre: 'Sobre',
    servicos: 'O que faço',
    projetos: 'Projetos',
    contato: 'Contato',
    trocarIdioma: 'Mudar o site para inglês',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
  },
  hero: {
    saudacao: 'Olá, eu sou',
    funcoes: ['desenvolvedor full stack'],
    texto:
      'Desenvolvi sozinho o SIGCH, sistema de chamados de manutenção e suporte que está em produção no Hospital Municipal Raimundo Célio Rodrigues, em Pacatuba (CE).',
    botaoProjetos: 'Ver projetos',
    botaoContato: 'Entrar em contato',
  },
  sobre: {
    titulo: 'Sobre mim',
    subtitulo: 'Desenvolvedor full stack em Fortaleza, Ceará, e estudante de Análise e Desenvolvimento de Sistemas na Unifor',
    paragrafos: [
      'Trabalho no Hospital Municipal Raimundo Célio Rodrigues, em Pacatuba (CE), desde fevereiro de 2025. Entrei como auxiliar de almoxarifado e, desde julho de 2026, sou desenvolvedor full stack e auxiliar administrativo. Antes, fui estagiário administrativo e de almoxarifado na MS Serviços.',
      'Percebi gargalos nos processos do hospital e criei o SIGCH, que hoje faz parte da rotina das equipes. Cuido de tudo sozinho: levantamento de requisitos, banco de dados, interface, autenticação, deploy, correção de erros e suporte aos usuários. Uso React e PostgreSQL no dia a dia.',
      'No SIGCH, os perfis de acesso são aplicados por políticas RLS no PostgreSQL, com isolamento de dados entre organizações. Na faculdade, trabalho com Java, testes unitários e padrões de projeto. Estou no 3º semestre de Análise e Desenvolvimento de Sistemas na Unifor, com conclusão prevista em 2028.',
    ],
    botaoCurriculo: 'Baixar currículo',
    botaoContato: 'Fale comigo',
    altFoto: 'Foto de Gabriel',
    altArte: 'Ilustração em pixel art de um monitor e de uma caixa de almoxarifado',
  },
  tecnologias: {
    titulo: 'Tecnologias',
    grupos: [
      { nome: 'Front-end', itens: ['JavaScript', 'React 19', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
      {
        nome: 'Back-end e dados',
        itens: ['PostgreSQL', 'SQL', 'APIs REST', 'Edge Functions', 'Java', 'Spring Boot (em estudo)'],
      },
      { nome: 'Segurança', itens: ['RLS', 'Multi-tenant'] },
      { nome: 'Engenharia', itens: ['Programação Orientada a Objetos (POO)', 'SOLID', 'GRASP', 'Padrões GoF', 'Estruturas de dados'] },
      { nome: 'Ferramentas', itens: ['Git', 'GitHub', 'Linux', 'Python'] },
    ],
  },
  trajetoria: {
    titulo: 'Trajetória',
    itens: [
      {
        icone: 'codigo',
        periodo: 'Desde julho de 2026',
        cargo: 'Desenvolvedor full stack e auxiliar administrativo',
        local: 'Hospital Municipal Raimundo Célio Rodrigues · Pacatuba, CE',
        texto: 'Desenvolvo e mantenho o SIGCH em paralelo à função administrativa e dou suporte aos usuários. Cuido também das rotinas administrativas e da comunicação entre os setores assistenciais e administrativos, com sigilo de informações.',
      },
      {
        icone: 'caixa',
        periodo: 'Fevereiro de 2025 a junho de 2026',
        cargo: 'Auxiliar de almoxarifado',
        local: 'Hospital Municipal Raimundo Célio Rodrigues · Pacatuba, CE',
        texto: 'Controle de entrada e saída de materiais e apoio ao fechamento do inventário. Percebi gargalos nos processos do hospital e criei o SIGCH, que hoje faz parte da rotina das equipes.',
      },
      {
        icone: 'maleta',
        periodo: 'Agosto a dezembro de 2024',
        cargo: 'Auxiliar administrativo e de almoxarifado (estágio)',
        local: 'MS Serviços',
        texto: 'Rotinas administrativas e controle de materiais do almoxarifado.',
      },
      {
        icone: 'formacao',
        periodo: '3º semestre · conclusão prevista em 2028',
        cargo: 'Análise e Desenvolvimento de Sistemas',
        local: 'Universidade de Fortaleza (Unifor)',
        texto: '',
      },
    ],
  },
  servicos: {
    titulo: 'O que eu faço',
    subtitulo: 'Trabalhos que já fiz no SIGCH e que posso repetir em outros projetos.',
    itens: [
      {
        icone: 'app',
        titulo: 'Sistemas web internos',
        texto: 'Aplicações em React para rotinas de equipe, como abertura e acompanhamento de chamados.',
      },
      {
        icone: 'banco',
        titulo: 'Banco de dados',
        texto: 'Modelagem e SQL em PostgreSQL, com regras no próprio banco, como o cálculo do tempo de resolução por trigger.',
      },
      {
        icone: 'tv',
        titulo: 'Painéis de acompanhamento',
        texto: 'Telas que se atualizam sozinhas, como o painel público de TV do SIGCH.',
      },
      {
        icone: 'escudo',
        titulo: 'Perfis de acesso',
        texto: 'Autenticação e políticas RLS que definem o que cada perfil pode ler e alterar, com isolamento de dados entre organizações.',
      },
      {
        icone: 'ciclo',
        titulo: 'Do requisito ao suporte',
        texto: 'Levantamento de requisitos com quem vai usar, deploy, correção de erros e suporte aos usuários.',
      },
      {
        icone: 'responsivo',
        titulo: 'Telas responsivas',
        texto: 'Interfaces em Tailwind CSS que funcionam no computador do setor e no celular.',
      },
    ],
  },
  projetos: {
    titulo: 'Projetos',
    subtitulo: 'Sistema em produção no Hospital Municipal Raimundo Célio Rodrigues, em Pacatuba (CE).',
    emProducao: 'Em produção',
    verDetalhes: 'Ver detalhes',
    codigo: 'Ver código no GitHub',
    demo: 'Ver apresentação',
    docs: 'Ver documentação',
    fechar: 'Fechar',
    tituloFatos: 'O que o sistema faz hoje',
    tituloStack: 'Stack',
    altImagem: 'Tela do',
    itens: [
      {
        ...projetosBase.sigch,
        titulo: 'Chamados de manutenção e suporte para hospital',
        resumo:
          'As equipes do hospital abrem, atribuem e acompanham chamados de manutenção e suporte pelo sistema. Em uso desde julho de 2026.',
        fatos: [
          'De julho a outubro de 2026: 74 chamados registrados, 91% concluídos e tempo médio de resolução de 8h11min.',
          'Painel de TV nos corredores, atualizado a cada 15 segundos, sem expor dados pessoais.',
          'Quatro perfis de acesso (solicitante, técnico, administrador e desenvolvedor) aplicados por políticas RLS no PostgreSQL, com isolamento de dados entre organizações.',
          'Tempo de resolução calculado por trigger no banco quando o chamado é concluído.',
          'Cada técnico vê apenas os chamados da sua categoria de problema.',
          'Campo para registrar dependência de terceiros, com histórico de alterações.',
          'Página de atualizações do sistema, com registro de quem já leu cada novidade.',
        ],
      },
    ],
  },
  contato: {
    titulo: 'Fale comigo',
    tituloForm: 'Envie uma mensagem',
    nome: 'Nome',
    email: 'E-mail',
    mensagem: 'Mensagem',
    enviar: 'Enviar mensagem',
    aviso: 'O botão abre o seu programa de e-mail com a mensagem pronta.',
    erro: 'Preencha nome, e-mail e mensagem para enviar.',
    assunto: 'Contato pelo portfólio',
    texto:
      'Estou procurando uma vaga de desenvolvedor. Também respondo mensagens sobre sistemas para hospitais e clínicas.',
    topicos: [
      'Vagas de desenvolvimento',
      'Sistemas web sob medida',
      'Banco de dados e perfis de acesso',
      'Sistemas para hospitais e clínicas',
    ],
    tituloRedes: 'Onde me encontrar',
  },
  rodape: {
    texto: 'Feito com React e Twind.',
    topo: 'Voltar ao topo',
  },
}

const en = {
  meta: {
    titulo: 'Gabriel Pedrosa | Full-stack developer',
  },
  nav: {
    inicio: 'Home',
    sobre: 'About',
    servicos: 'What I do',
    projetos: 'Projects',
    contato: 'Contact',
    trocarIdioma: 'Switch the site to Portuguese',
    abrirMenu: 'Open menu',
    fecharMenu: 'Close menu',
  },
  hero: {
    saudacao: "Hi, I'm",
    funcoes: ['full-stack developer'],
    texto:
      'I built SIGCH on my own, a maintenance and support ticketing system that runs in production at Raimundo Célio Rodrigues Municipal Hospital, a public hospital in Pacatuba, Ceará, Brazil.',
    botaoProjetos: 'See projects',
    botaoContato: 'Get in touch',
  },
  sobre: {
    titulo: 'About me',
    subtitulo: 'Full-stack developer in Fortaleza, Brazil, and Systems Analysis and Development student at Unifor',
    paragrafos: [
      'I have worked at Raimundo Célio Rodrigues Municipal Hospital, in Pacatuba, Brazil, since February 2025. I started as a storeroom assistant and, since July 2026, I have been a full-stack developer and administrative assistant. Before that, I was an administrative and storeroom intern at MS Serviços.',
      "I spotted bottlenecks in the hospital's processes and built SIGCH, which is now part of the teams' daily routine. I handle everything on my own: requirements gathering, database, interface, authentication, deployment, bug fixes and user support. I work with React and PostgreSQL every day.",
      "In SIGCH, access roles are enforced by PostgreSQL RLS policies, with data isolation between organizations. At university I work with Java, unit testing and design patterns. I'm in the 3rd semester of Systems Analysis and Development at Unifor, expected to finish in 2028.",
    ],
    botaoCurriculo: 'Download CV',
    arquivoCurriculo: 'curriculo-en.pdf',
    botaoContato: 'Contact me',
    altFoto: 'Photo of Gabriel',
    altArte: 'Pixel art of a computer monitor and a storeroom box',
  },
  tecnologias: {
    titulo: 'Tech stack',
    grupos: [
      { nome: 'Front-end', itens: ['JavaScript', 'React 19', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
      {
        nome: 'Back-end and data',
        itens: ['PostgreSQL', 'SQL', 'REST APIs', 'Edge Functions', 'Java', 'Spring Boot (studying)'],
      },
      { nome: 'Security', itens: ['RLS', 'Multi-tenant'] },
      { nome: 'Engineering', itens: ['Object-Oriented Programming (OOP)', 'SOLID', 'GRASP', 'GoF patterns', 'Data structures'] },
      { nome: 'Tools', itens: ['Git', 'GitHub', 'Linux', 'Python'] },
    ],
  },
  trajetoria: {
    titulo: 'Background',
    itens: [
      {
        icone: 'codigo',
        periodo: 'Since July 2026',
        cargo: 'Full-stack developer and administrative assistant',
        local: 'Raimundo Célio Rodrigues Municipal Hospital · Pacatuba, Brazil',
        texto: 'I build and maintain SIGCH alongside my administrative role and support its users. I also handle administrative routines and communication between clinical and administrative departments, keeping information confidential.',
      },
      {
        icone: 'caixa',
        periodo: 'February 2025 to June 2026',
        cargo: 'Storeroom assistant',
        local: 'Raimundo Célio Rodrigues Municipal Hospital · Pacatuba, Brazil',
        texto: "Controlled incoming and outgoing supplies and helped close the inventory. I spotted bottlenecks in the hospital's processes and built SIGCH, which is now part of the teams' routine.",
      },
      {
        icone: 'maleta',
        periodo: 'August to December 2024',
        cargo: 'Administrative and storeroom assistant (internship)',
        local: 'MS Serviços',
        texto: 'Administrative routines and storeroom supply control.',
      },
      {
        icone: 'formacao',
        periodo: '3rd semester · expected to finish in 2028',
        cargo: 'Systems Analysis and Development',
        local: 'University of Fortaleza (Unifor)',
        texto: '',
      },
    ],
  },
  servicos: {
    titulo: 'What I do',
    subtitulo: 'Work I have already done on SIGCH and can do again on other projects.',
    itens: [
      {
        icone: 'app',
        titulo: 'Internal web apps',
        texto: 'React apps for team routines, such as opening and tracking tickets.',
      },
      {
        icone: 'banco',
        titulo: 'Databases',
        texto: 'PostgreSQL modeling and SQL, with rules in the database itself, such as resolution time calculated by a trigger.',
      },
      {
        icone: 'tv',
        titulo: 'Status dashboards',
        texto: 'Screens that refresh on their own, like the SIGCH public TV panel.',
      },
      {
        icone: 'escudo',
        titulo: 'Access roles',
        texto: 'Authentication and RLS policies that define what each role can read and change, with data isolation between organizations.',
      },
      {
        icone: 'ciclo',
        titulo: 'From requirements to support',
        texto: 'Requirements gathering with the people who will use the system, deployment, bug fixes and user support.',
      },
      {
        icone: 'responsivo',
        titulo: 'Responsive screens',
        texto: 'Tailwind CSS interfaces that work on department desktops and on phones.',
      },
    ],
  },
  projetos: {
    titulo: 'Projects',
    subtitulo: 'A system in production at Raimundo Célio Rodrigues Municipal Hospital, in Pacatuba, Brazil.',
    emProducao: 'In production',
    verDetalhes: 'View details',
    codigo: 'View code on GitHub',
    demo: 'See overview (in Portuguese)',
    docs: 'Read the docs (in Portuguese)',
    fechar: 'Close',
    tituloFatos: 'What the system does today',
    tituloStack: 'Stack',
    altImagem: 'Screenshot of',
    itens: [
      {
        ...projetosBase.sigch,
        titulo: 'Maintenance and support tickets for a hospital',
        resumo:
          'Hospital teams open, assign and track maintenance and support tickets through the system. In use since July 2026.',
        fatos: [
          'From July to October 2026: 74 tickets logged, 91% resolved and an average resolution time of 8h11min.',
          'TV panel in the hallways that refreshes every 15 seconds without exposing personal data.',
          'Four access roles (requester, technician, admin and developer) enforced by PostgreSQL RLS policies, with data isolation between organizations.',
          'Resolution time calculated by a database trigger when the ticket is closed.',
          'Each technician only sees tickets in their problem category.',
          'Field to track third-party dependencies, with a change history.',
          'In-app updates page that records who has read each change.',
        ],
      },
    ],
  },
  contato: {
    titulo: 'Get in touch',
    tituloForm: 'Send a message',
    nome: 'Name',
    email: 'Email',
    mensagem: 'Message',
    enviar: 'Send message',
    aviso: 'The button opens your email app with the message ready to send.',
    erro: 'Fill in name, email and message to send.',
    assunto: 'Message from your portfolio',
    texto: "I'm looking for a developer role. I also answer messages about systems for hospitals and clinics.",
    topicos: [
      'Development roles',
      'Custom web systems',
      'Databases and access roles',
      'Systems for hospitals and clinics',
    ],
    tituloRedes: 'Find me online',
  },
  rodape: {
    texto: 'Built with React and Twind.',
    topo: 'Back to top',
  },
}

export default { pessoal, pt, en }
