export interface User {
  id: string;
  nome: string;
  email: string;
  cpf?: string;
  telefone?: string;
  dataNascimento?: Date;
  avatarUrl?: string;
  ativo: boolean;
  emailVerificado: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user: Omit<User, 'senhaHash'>;
  token: string;
  refreshToken?: string;
}

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface RegisterRequest {
  nome: string;
  email: string;
  senha: string;
  cpf?: string;
  telefone?: string;
  dataNascimento?: string;
}

export interface DecodedToken {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}