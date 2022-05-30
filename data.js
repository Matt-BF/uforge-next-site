export const fluxes = [
  {
    id: "1",
    fluxTitle: "PCR",
    fluxComponents: [
      {
        id: "1",
        componentName: "Extração",
        componentImg: "extraction.png",
        componentProducts: ["Linha Sabiá", "Linha Maracajá"],
      },
      {
        id: "2",
        componentName: "PCR",
        componentImg: "pcr.png",
        componentProducts: [],
      },
      {
        id: "3",
        componentName: "Eletroforese",
        componentImg: "gel.png",
        componentProducts: ["Linha Sabiá"],
      },
      {
        id: "4",
        componentName: "RT-qPCR",
        componentImg: "rtpcr.png",
        componentProducts: [],
      },
    ],
  },
  {
    id: "2",
    fluxTitle: "Acessórios",
    fluxComponents: [
      {
        id: "1",
        componentName: "Racks Magnéticas",
        componentImg: "extraction.png",
        componentProducts: ["Racks"],
      },
      {
        id: "2",
        componentName: "Plásticos",
        componentImg: "ponteiras.png",
        componentProducts: ["Placas Deep-Well", "Ponteiras", "Tip-Combs"],
      },
    ],
  },
];

export const products = [
  {
    id: "1",
    productName: "Linha Sabiá",
    productDescription:
      "A Linha Sabiá compõe kits de extração de ácidos nucleicos (DNA e RNA) por beads magnéticas para diversos organismos.\
      Tem como premissa a captura magnética dos ácidos nucleicos, que se ligam nas beads por conta de diferença de cargas\
      elétricas. Dentre suas vantagens sobre outros métodos de extração, destacamos a velocidade dos protocolos\
      (variando de 20 minutos a 1 hora), extração de quantidades diminutas de DNA ou RNA (para aplicações forenses ou\
      amostras degradadas por exemplo) e uso de reagentes pouco tóxicos (contrastando com extrações como de Fenol-Clorofórmio).",
    productImg: "/sabia_2.jpg",
    productSubproducts: [
      {
        id: "1",
        subproductName: "Kit Amostras Limpas",
        subproductTests: [
          "Saliva",
          "Swab Nasal/Orofaríngeo",
          "DNA livre em amostras de água",
        ],
        subproductUses: [
          "Extração de RNA viral para exames de COVID-19 e Influenza",
          "Extração de DNA humano para realização de painéis genéticos",
        ],
        subproductPrice: "R$15/extração",
        subproductSize: "A partir de 50 reações",
      },
      {
        id: "2",
        subproductName: "Kit Microrganismos",
        subproductTests: [
          "Leveduras em meio sólido e líquido",
          "Bactérias em meio sólido e líquido",
          "Creme de levedura",
        ],
        subproductUses: [
          "Genotipagem de microrganismos",
          "Extração de DNA ou RNA total",
        ],
        subproductPrice: "R$18/extração",
        subproductSize: "A partir de 50 reações",
      },
      {
        id: "3",
        subproductName: "Kit Purificação",
        subproductTests: [
          "Purificação de bandas de gel de agarose",
          "Purificação de produtos de PCR",
          "Purifique e amplifique novamente por PCR bandas com no mínimo 2uL de amostra no gel",
        ],
        subproductUses: [
          "Purificação de produto de PCR para clonagem",
          "Purificação de produto de PCR para nested-PCR",
        ],
        subproductPrice: "R$15/extração",
        subproductSize: "A partir de 50 reações",
      },
      {
        id: "4",
        subproductName: "Kit Tecidos",
        subproductTests: [
          "Nadadeira de peixes",
          "Diversos tecidos humanos (Cerebral, Renal, Cardíaco, etc.)",
          "Utilize menos de 50mg de tecido para sua extração!",
        ],
        subproductUses: [
          "Extração de DNA/RNA de células tumorais",
          "Extração de DNA para genotipagem de animais",
        ],
        subproductPrice: "R$18/extração",
        subproductSize: "A partir de 25 reações",
      },
      {
        id: "4",
        subproductName: "Kit Sêmen",
        subproductTests: [],
        subproductUses: [
          "Extração de DNA forense",
          "Extração de DNA de equinos ou outros animais para genotipagem",
        ],
        subproductPrice: "R$18/extração",
        subproductSize: "A partir de 25 reações",
      },
      /*{
        id: "5",
        subproductName: "Kit cfDNA",
        subproductTests: [
          "DNA livre de células tumorais",
          "DNA livre de células para diagnóstico de sexagem fetal",
        ],
        subproductUses: [],
        subproductPrice: "R$18/extração",
        subproductSize: "A partir de 15 reações",
      },*/
    ],
  },
  {
    id: "2",
    productName: "Linha Maracajá",
    productDescription:
      "A Linha Maracajá compõe soluções para Lise Rápida de células, com a finalidade de acelerar os procedimentos laboratoriais,\
      principalmente em análises clínicas, diminuindo expressivamente o tempo até que se tenha um laudo ou resultado de exame, sem perder qualidade ou\
      sensibilidade.",
    productImg: "/maracaja.jpeg",
    productSubproducts: [
      {
        id: "1",
        subproductName: "Solução de Lise Rápida",
        subproductTests: ["Saliva", "Swab Nasal/Orofaríngeo"],
        subproductUses: ["Lise rápida para exame de COVID-19 por RT-qPCR"],
        subproductPrice: "R$3/extração",
        subproductSize: "A partir de 100 reações",
      },
    ],
  },
  {
    id: "1",
    productName: "Placas Deep-Well",
    productDescription:
      "Placas Deep-Well de 2mL confeccionadas com Polipropileno, indicadas para realização de extrações de ácidos nucleicos, ensaios enzimáticos, armazenamento de amostras, dentre outras aplicações.",
    productImg: "/placa_dw.jpg",
    productSubproducts: [
      {
        id: "1",
        subproductName: "Placa Deep-Well",
        subproductTests: [],
        subproductUses: [],
        subproductPrice: "R$55/placa",
        subproductSize: "",
      },
    ],
  },
  {
    id: "2",
    productName: "Racks",
    productDescription:
      "Racks Magnéticas para atender todas as suas demandas de extração em diferentes tipos de placas, tubos, ou equipamentos automatizados",
    productImg: "/rack.jpeg",
    productSubproducts: [
      {
        id: "1",
        subproductName: "Rack para placas",
        subproductTests: [],
        subproductUses: [],
        subproductPrice: "R$800",
        subproductSize: "96 amostras",
      },
      {
        id: "2",
        subproductName: "Rack para tubos",
        subproductTests: [],
        subproductUses: [],
        subproductPrice: "R$1000",
        subproductSize: "16 extrações",
      },
      {
        id: "3",
        subproductName: "Rack para robôs",
        subproductTests: [],
        subproductUses: [],
        subproductPrice: "A combinar",
        subproductSize: "A combinar",
      },
    ],
  },
  {
    id: "3",
    productName: "Ponteiras",
    productDescription: "Ponteiras ",
    productImg: "/ponteiras.jpeg",
    productSubproducts: [
      {
        id: "1",
        subproductName: "Ponteira p1000",
        subproductTests: [],
        subproductUses: [],
        subproductPrice: "R$960",
        subproductSize: "1000 ponteiras",
      },
    ],
  },
  {
    id: "3",
    productName: "Tip-Combs",
    productDescription: "Tip-Combs para extração em robô",
    productImg: "/tip-comb.jpeg",
    productSubproducts: [
      {
        id: "1",
        subproductName: "Tip-Comb 8",
        subproductTests: [],
        subproductUses: [],
        subproductPrice: "R$10",
        subproductSize: "",
      },
      {
        id: "2",
        subproductName: "Tip-Comb 96",
        subproductTests: [],
        subproductUses: [],
        subproductPrice: "R$15",
        subproductSize: "",
      },
    ],
  },
];
