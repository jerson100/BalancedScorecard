const COLUMNS_ORG = [
  {
    title: "Objetivos",
    dataIndex: "objetivo",
    width: "25%",
  },
  {
    title: "Metas",
    dataIndex: "meta",
    width: "25%",
  },
  {
    title: "Indicadores",
    dataIndex: "indicador",
    width: "25%",
  },
  {
    title: "Iniciativas",
    dataIndex: "iniciativa",
    width: "25%",
  },
];
const COLUMNS_TI = [
  {
    title: "Perspectivas",
    dataIndex: "perspectiva",
    width: "33.33%",
  },
  {
    title: "Misión",
    dataIndex: "mision",
    width: "33.33%",
  },
  {
    title: "Estrategias",
    dataIndex: "estrategia",
    width: "33.33%",
  },
];

const DATA_TI = [
  {
    key: 1,
    perspectiva:
      "ORIENTACION A LOS CLIENTES\n¿Como ven los ciudadanos y usuarios ven al departamento TI?",
    mision: "Ser los suministradores de sistemas de información preferidas",
    estrategia:
      "Suministradores preferidos de aplicaciones\nSuministradores preferidos de operaciones o sugeridores de la mejor solución de cualquier fuente.\nAsociación con los usuarios Satisfacción de los Usuarios",
  },
  {
    key: 2,
    perspectiva:
      "EXCELENCIA OPERACIONAL\n¿Como de efectivos y eficientes son los procesos TI?",
    mision: "Ofrecer servicios y aplicaciones TI efectivas y eficientes",
    estrategia:
      "Desarrollo eficiente y efectivo\nOperaciones eficientes efectivas",
  },
  {
    key: 3,
    perspectiva:
      "CONTRIBUCION A LA ORGANIZACION\n¿Como ve la dirección el departamento TI?",
    mision: "Obtener de la organización una inversión razonable en TI",
    estrategia:
      "Control del gasto en TI Valor para las organizaciones de los proyectos TI.\nProveer nuevas capacidades de negocio ",
  },
  {
    key: 4,
    perspectiva:
      "ORIENTACION FUTURA\n¿Como están posicionadas las TI para satisfacer las necesidades futuras?",
    mision: "Desarrollar oportunidades para contestar a  desafíos futuros",
    estrategia:
      "Entrenamiento y educación de la dirección TI.\nExperiencia de la dirección TI.\nInvestigación en tecnologías emergentes.\nAntigüedad de las Aplicaciones",
  },
];

const DATA_ORG = [
  {
    key: 1,
    objetivo:
      "Perspectivas financieras:\nAumentar las ventas y reducir los costos",
    meta:
      "Aumentar en un 15 % las ventas netas y disminuir en un 10 % el coste operativo",
    indicador: "Estados financieros",
    iniciativa: "Negociar con los proveedores",
  },
  {
    key: 2,
    objetivo:
      "Perspectiva del cliente:\nSer una referencia por la variedad de productos",
    meta:
      "Aumentar en un 15 % el lanzamiento de nuevos productos cada trimestre",
    indicador: "Número de nuevos productos lanzados por trimestre",
    iniciativa: "Crear un comité de innovación y desarrollo",
  },
  {
    key: 3,
    objetivo:
      "Perspectiva de los procesos internos:\nSer capaz de desarrollar nuevos productos constantemente",
    meta:
      "Iniciar al menos cinco proyectos de desarrollo de nuevos productos cada mes",
    indicador: "Informes de proyectos de innovación",
    iniciativa:
      "Adquirir un software específico para la gestión de desarrollo de productos",
  },
  {
    key: 4,
    objetivo:
      "Perspectiva de aprendizaje y crecimiento:\nContar con personal altamente calificado en el desarrollo de productos",
    meta: "Tener al menos dos profesionales con una maestría en el sector",
    indicador:
      "Número de profesionales de empresas con un título de maestría en el sector",
    iniciativa:
      "Seleccionar un empleado para recibir una beca de maestría y contratar a otro con una maestría en el sector",
  },
];

export { COLUMNS_ORG, DATA_ORG, COLUMNS_TI, DATA_TI };
