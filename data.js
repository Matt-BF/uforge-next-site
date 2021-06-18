export const fluxes = [
  {
    id: "1",
    fluxTitle: "PCR",
    fluxComponents: [
      {
        id: "1",
        componentName: "Extração",
        componentImg: "extraction.png",
        componentProducts: ["Linha Sabiá"],
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
    productImg: "/beads_promega_rack.png",
    productSubproducts: [
      {
        id: "1",
        subproductName: "Kit Amostras Limpas",
        subproductTests: [
          "Saliva",
          "Swab Nasal/Orofaríngeo",
          "DNA livre em amostras de solo",
          "DNA livre em amostras de água",
        ],
        subproductPrice: "R$2500",
        subproductSize: "250 amostras",
        subproductPriceSample: "R$10",
      },
      {
        id: "2",
        subproductName: "Kit Levedura",
        subproductTests: [
          "Leveduras em meio sólido e líquido",
          "Bactérias em meio sólido e líquido",
        ],
        subproductPrice: "R$2800",
        subproductSize: "250 amostras",
        subproductPriceSample: "R$10",
      },
      {
        id: "3",
        subproductName: "Kit Gel de Agarose",
        subproductTests: [
          "Purificação de bandas de gel de agarose",
          "Purifique e amplifique novamente por PCR bandas com no mínimo 2uL de amostra no gel",
        ],
        subproductPrice: "R$2500",
        subproductSize: "250 amostras",
        subproductPriceSample: "R$10",
      },
    ],
  },
];

export const allNews = [
  {
    id: "1",
    title: "Estamos na Liga Brasileira de Bioinformática!",
    excerpt: "Confira nosso post de apresentação",
    text: " ",
    link: "https://www.instagram.com/p/CP69pGipI8w/?utm_source=ig_web_copy_link",
  },

  {
    id: "1",
    title:
      "Nossa seção de produtos vai ser diferente de tudo o que você já viu",
    excerpt: "Visite a aba de produtos a partir de 20/06",
    text: " ",
    link: "/products",
  },
];
