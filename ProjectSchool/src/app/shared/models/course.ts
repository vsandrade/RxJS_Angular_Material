export interface Course {
  id: number;
  name: string;
  category: Category;
  rating: number;
  year: number;
  professor: string;
  description: string;
}

export enum Category {
  Tecnologia = 'Tecnologia',
  Arte = 'Arte',
  Culinaria = 'Culinária',
  Financas = 'Finanças',
  Psicologia = 'Psicologia',
  Marketing = 'Marketing',
  Fotografia = 'Fotografia',
  Escrita = 'Escrita',
  Musica = 'Música',
  CienciasAmbientais = 'Ciências Ambientais',
  Moda = 'Moda',
  Comunicação = 'Comunicação',
  Filosofia = 'Filosofia',
  Saude = 'Saúde',
}
