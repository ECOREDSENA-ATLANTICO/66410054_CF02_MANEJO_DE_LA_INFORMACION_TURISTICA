export default {
  global: {
    componenteFormativo:
      'Promoción de productos y servicios e informes de servicio',
    descripcionCurso:
      'La promoción de productos y servicios está estrechamente ligada a los componentes de la oferta turística y a los tipos de prestadores. En su formación, el aprendiz ha investigado las necesidades del cliente y los atractivos turísticos, lo que le permite analizar estos elementos y desarrollar estrategias de promoción efectivas. Además, los informes de servicio ayudan a verificar la relevancia de la información y a ajustar continuamente las estrategias según la satisfacción del usuario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tipos de servicios turísticos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Generalidades de informes de servicio',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El mercado turístico',
      referencia: 'Ecosistema recursos SENA [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/IRDX0fHe254?si=V2dHoN7UquWR5KmR',
    },
  ],
  glosario: [
    {
      termino: 'Alojamiento turístico',
      significado:
        'establecimiento que suministra el servicio de habitación de una forma habitual, específica y profesional, en contraprestación de una tarifa y con la posibilidad de ampliar el servicio con la manutención.',
    },
    {
      termino: 'Cultura',
      significado:
        'conjunto global de los distintos hábitos o modos de vida de un determinado colectivo social heredados generacionalmente.',
    },
    {
      termino: 'Competitividad',
      significado:
        'se define como la capacidad de un destino para crear e integrar productos con valor añadido, que permitan sostener los recursos locales y conservar su posición de mercado respecto a sus competidores.',
    },
    {
      termino: 'Demanda turística',
      significado:
        'se define como el volumen de turistas que visitan un destino durante un período determinado.',
    },
    {
      termino: 'Encuesta',
      significado:
        'estudio en el cual el investigador busca recaudar datos por medio de un cuestionario prediseñado.',
    },
    {
      termino: 'Entrevista',
      significado:
        'conversación que mantiene un periodista con otra persona que contesta una serie de preguntas, dando su opinión sobre diversos temas o asuntos.',
    },
    {
      termino: 'Estrategia',
      significado:
        'es la combinación de destrezas y recursos de una organización para lograr sus objetivos en condiciones más ventajosas que sus competidores.',
    },
    {
      termino: 'Evaluación',
      significado:
        'proceso que tiene como finalidad determinar el grado de eficacia y eficiencia, con que han sido empleados los recursos destinados a alcanzar los objetivos previstos, garantizando el cumplimiento de las metas.',
    },
    {
      termino: 'Ferrocarril',
      significado:
        'sistema de transporte terrestre de personas y mercancías guiado sobre carriles.',
    },
    {
      termino: 'Formato',
      significado:
        'es la forma y tamaño de presentación de una información ya sea impresa o escrita.',
    },
    {
      termino: 'Medio de transporte',
      significado:
        'medio de locomoción utilizado para el traslado de las personas o bienes desde un punto origen a un punto destino.',
    },
    {
      termino: 'Recomendaciones',
      significado:
        'son todos los concejos y advertencias que se hacen refiriéndose a un servicio o una actividad.',
    },
    {
      termino: 'Servicio',
      significado:
        'labor o trabajo que se hace para satisfacer las necesidades de una entidad o persona.',
    },
    {
      termino: 'Satisfacción',
      significado:
        'es el cumplimento de una necesidad o deseo que cause alegría y placer.',
    },
    {
      termino: 'TIC',
      significado: 'tecnologías de la información y la comunicación.',
    },
    {
      termino: 'Turista',
      significado:
        'aquellas personas que se trasladan de su domicilio habitual a otro punto geográfico, estando ausente de su lugar de residencia habitual por más de 24 horas y pernoctando en otro sito.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abalnearios.com. (2014). Tipos de centros. recuperado el 15 de 02 de 2014, de',
      link: 'http://www.abalnearios.com/',
    },
    {
      referencia:
        'Cabarcos Novás, N. (2011). Administración de servicios turísticos, promoción y venta. Bogotá: ideas propias, ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Charles R Goeldner, B. R. (2011). Turismo, planeación, administración y perspectivas (3ra ed.). Mexico: Lymusa Wiley.',
      link: '',
    },
    {
      referencia:
        'Francés, A. (2006). Estrategias y planes para la empresa: con el cuadro de mando integral. ',
      link: '',
    },
    {
      referencia:
        'Gobierno de España. Ministerio de la Presidencia. (2009). Guía para la Evaluación de la Calidad de los Servicios Públicos. Recuperado el 14 de Noviembre de 2014, de AEVAL',
      link: '',
    },
    {
      referencia:
        'Grant, R. M. (2004). Dirección estratégica. Madrid: S.L. civitas ediciones.',
      link: '',
    },
    {
      referencia:
        'Minep - Ministerio para la economía popular. Instituto nacional de cooperación educativa. (abril de 2005). Aspectos generales de turismo y alojamiento.',
      link: 'http://es.scribd.com/doc/6801115/Turismo-y-Alojamiento',
    },
    {
      referencia:
        'Sierra Anaya, G., & Rey Moreno, M. (2006). Introducción al mercado turístico. Cartagena: universitaria.',
      link: '',
    },
    {
      referencia:
        'Vera Bustamante, S., & Godoy Reitze, F. (13 de junio de 2012). Turismo ferroviario, modelos y experiencias de turismo sobre rieles. Recuperado el febrero de 2014, de Instituto Ferroviario Chile:',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del ecosistema de recursos educativos digitales (RED)',
          centro: 'Dirección general',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mary Luz Estrada Estrada',
          cargo: 'Experta temática',
          centro: 'Centro de comercio y servicios - Regional Caldas',
        },
        {
          nombre: 'Olga Beatriz Zuleta Arango',
          cargo: 'Experta temática',
          centro: 'Centro de comercio y servicios - Regional Caldas',
        },
        {
          nombre: 'José Armando Díaz Londoño',
          cargo: 'Experto temático',
          centro: 'Centro de comercio y servicios - Regional Caldas',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de comercio y servicios - Regional Caldas',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor pedagógico',
          centro: 'Centro de comercio y servicios - Regional Caldas',
        },
        {
          nombre: 'José Armando Díaz Londoño',
          cargo: 'Líder de expertos temáticos',
          centro: 'Centro de comercio y servicios - Regional Caldas',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Hernando Junior Strusberg Perez',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Bladimir Pérez Meriño',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
