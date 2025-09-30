const products = [
  {
    id: 1,
    title: "Kit de Bordado Básico",
    description: "Kit ideal para principiantes que incluye aros de bordar, hilos de colores y agujas.",
    price: 25.50,
    img: "https://i.ibb.co/F8qD7y3/agujas-crochet.jpg",
    category: "bordado",
    stock: 50
  },
  {
    id: 2,
    title: "Set de Lanas para Amigurumis",
    description: "Variedad de lanas de algodón de alta calidad, perfectas para tejer amigurumis.",
    price: 35.75,
    img:"https://i.ibb.co/F8qD7y3/agujas-crochet.jpg",
    category: "manualidades",
    stock: 40
  },
  {
    id: 3,
    title: "Máquina de Coser Portátil",
    description: "Máquina de coser compacta con funciones básicas, fácil de transportar y usar.",
    price: 120.00,
    img: "https://prixton.es/wp-content/uploads/2019/03/MAQUINA-DE-COSER-P110-LILA-PUNTADAS-HOGAR-PRIXTON.jpg?_gl=1*14s3dht*_up*MQ..*_ga*MTAxNzMxNDgwNi4xNzU5MTU4OTQ4*_ga_E6H6X9X3KV*czE3NTkxNTg5NDckbzEkZzAkdDE3NTkxNTg5NDckajYwJGwwJGgw",
    category: "costura",
    stock: 15
  },
  {
    id: 4,
    title: "Agujas de Crochet Ergonómicas",
    description: "Juego de agujas de crochet con mangos suaves para mayor comodidad en proyectos largos.",
    price: 18.90,
    img: "https://i.ibb.co/F8qD7y3/agujas-crochet.jpg",
    category: "manualidades",
    stock: 65
  },
  {
    id: 5,
    title: "Tela Aida para Punto de Cruz",
    description: "Tela especial de 14ct para proyectos de punto de cruz. Tamaño 50x50 cm.",
    price: 10.20,
    img: "https://i.ibb.co/P4j2R7x/tela-aida.jpg",
    category: "bordado",
    stock: 80
  },
  {
    id: 6,
    title: "Tijeras de Sastre Profesionales",
    description: "Tijeras de acero inoxidable de alta precisión, ideales para cortar telas sin esfuerzo.",
    price: 22.00,
    img: "https://i.ibb.co/9qZ2J6T/tijeras-sastre.jpg",
    category: "costura",
    stock: 30
  },
  {
    id: 7,
    title: "Set de Hilos DMC de 100 Colores",
    description: "Colección completa de hilos de bordar DMC de 100% algodón, mercerizados y resistentes.",
    price: 55.00,
    img: "https://i.ibb.co/y4L2k9S/hilos-dmc.jpg",
    category: "bordado",
    stock: 25
  },
  {
    id: 8,
    title: "Alfiletero Magnético",
    description: "Alfiletero con base magnética que mantiene las agujas y alfileres en su lugar.",
    price: 8.50,
    img: "https://i.ibb.co/r7b2K9G/alfiletero.jpg",
    category: "costura",
    stock: 90
  },
  {
    id: 9,
    title: "Kit de Fieltro de Lana",
    description: "Kit para manualidades con fieltro, incluye lanas de varios colores, agujas y base.",
    price: 28.00,
    img: "https://i.ibb.co/t3F4b7V/fieltro-kit.jpg",
    category: "manualidades",
    stock: 55
  },
  {
    id: 10,
    title: "Bastidor de Bordado Ajustable",
    description: "Bastidor de madera con tornillo de ajuste, disponible en varios tamaños.",
    price: 14.75,
    img: "https://i.ibb.co/k2H1z3v/bastidor.jpg",
    category: "bordado",
    stock: 75
  },
  {
    id: 11,
    title: "Kit de Costura de Viaje",
    description: "Compacto estuche con lo esencial para reparaciones rápidas: hilos, agujas, tijeras pequeñas.",
    price: 9.99,
    img: "https://i.ibb.co/8YjG2dJ/kit-costura.jpg",
    category: "costura",
    stock: 100
  },
  {
    id: 12,
    title: "Tela de Lona para Bolsos",
    description: "Tela de lona resistente y duradera, perfecta para confeccionar bolsos y mochilas.",
    price: 15.50,
    img: "https://i.ibb.co/9Z0YjF4/tela-lona.jpg",
    category: "costura",
    stock: 45
  },
  {
    id: 13,
    title: "Set de Pinturas Acrílicas",
    description: "12 tubos de pintura acrílica de colores vibrantes, para todo tipo de proyectos artísticos.",
    price: 20.00,
    img: "https://i.ibb.co/v3H4jGk/pinturas-acrilicas.jpg",
    category: "manualidades",
    stock: 60
  },
  {
    id: 14,
    title: "Patrones de Bordado Floral",
    description: "Colección de patrones impresos de bordado con motivos florales y botánicos.",
    price: 7.50,
    img: "https://i.ibb.co/2nL6jG4/patrones-bordado.jpg",
    category: "bordado",
    stock: 110
  },
  {
    id: 15,
    title: "Enrollador de Bobina Automático",
    description: "Práctico dispositivo para enrollar bobinas de hilo de forma rápida y uniforme.",
    price: 30.00,
    img: "https://i.ibb.co/q6F5k2M/enrollador-bobina.jpg",
    category: "costura",
    stock: 20
  },
  {
    id: 16,
    title: "Libro 'Aprende a Tejer desde Cero'",
    description: "Guía completa para principiantes con instrucciones paso a paso e ilustraciones detalladas.",
    price: 19.95,
    img: "https://i.ibb.co/P4jG6kL/libro-tejer.jpg",
    category: "manualidades",
    stock: 35
  },
  {
    id: 17,
    title: "Cinta Métrica de Sastre Retráctil",
    description: "Cinta métrica de 150 cm con botón retráctil, ideal para tomar medidas de precisión.",
    price: 5.00,
    img: "https://i.ibb.co/q9W2Z8S/cinta-metrica.jpg",
    category: "costura",
    stock: 150
  },
  {
    id: 18,
    title: "Set de Botones de Madera",
    description: "Caja surtida con botones de madera de diferentes tamaños y formas, perfectos para adornos.",
    price: 12.50,
    img: "https://i.ibb.co/L5Jk8tP/botones-madera.jpg",
    category: "manualidades",
    stock: 70
  },
  {
    id: 19,
    title: "Hilos de Bordado Metálicos",
    description: "Hilos brillantes y resistentes para darle un toque especial y elegante a tus bordados.",
    price: 11.00,
    img: "https://i.ibb.co/8QjY7Wv/hilos-metalicos.jpg",
    category: "bordado",
    stock: 45
  },
  {
    id: 20,
    title: "Cojín de Alfileres con Forma de Tomate",
    description: "Clásico cojín con forma de tomate para clavar alfileres, con pequeño esmeril para agujas.",
    price: 6.50,
    img: "https://i.ibb.co/x8Q1J3f/cojin-tomate.jpg",
    category: "costura",
    stock: 95
  }
];

export default products