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
        componentImg: "extraction.png",
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
    productImg: "/sabia_2.jpeg",
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
        subproductPrice: "R$3750",
        subproductSize: "250 reações",
        subproductPriceSample: "R$15",
      },
      {
        id: "2",
        subproductName: "Kit Microrganismos",
        subproductTests: [
          "Leveduras em meio sólido e líquido",
          "Bactérias em meio sólido e líquido",
          "Creme de levedura",
        ],
        subproductPrice: "R$4500",
        subproductSize: "250 reações",
        subproductPriceSample: "R$18",
      },
      {
        id: "3",
        subproductName: "Kit Gel de Agarose",
        subproductTests: [
          "Purificação de bandas de gel de agarose",
          "Purifique e amplifique novamente por PCR bandas com no mínimo 2uL de amostra no gel",
        ],
        subproductPrice: "R$3750",
        subproductSize: "250 reações",
        subproductPriceSample: "R$15",
      },
      {
        id: "4",
        subproductName: "Kit Tecidos",
        subproductTests: [
          "Nadadeira de peixes",
          "Diversos tecidos humanos (Cerebral, Renal, Cardíaco, etc.)",
          "Utilize menos de 50mg de tecido para sua extração!",
        ],
        subproductPrice: "R$3750",
        subproductSize: "250 reações",
        subproductPriceSample: "R$15",
      },
      {
        id: "4",
        subproductName: "Kit Sêmen",
        subproductTests: [],
        subproductPrice: "R$3750",
        subproductSize: "250 reações",
        subproductPriceSample: "R$15",
      },
      {
        id: "5",
        subproductName: "Kit cfDNA",
        subproductTests: [
          "DNA livre de células tumorais",
          "DNA livre de células para diagnóstico de sexagem fetal",
        ],
        subproductPrice: "R$1500",
        subproductSize: "100 reações",
        subproductPriceSample: "R$15",
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
        subproductName: "Rack para placas deep-well",
        subproductTests: [],
        subproductPrice: "R$800",
        subproductSize: "",
        subproductPriceSample: "",
      },
      {
        id: "2",
        subproductName: "Rack para tubos",
        subproductTests: [],
        subproductPrice: "R$1000",
        subproductSize: "16 extrações",
        subproductPriceSample: "",
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
        subproductPrice: "R$960",
        subproductSize: "1000 ponteiras",
        subproductPriceSample: "",
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
        subproductPrice: "R$10",
        subproductSize: "",
        subproductPriceSample: "",
      },
      {
        id: "1",
        subproductName: "Tip-Comb 96",
        subproductTests: [],
        subproductPrice: "R$15",
        subproductSize: "",
        subproductPriceSample: "",
      },
    ],
  },
];
