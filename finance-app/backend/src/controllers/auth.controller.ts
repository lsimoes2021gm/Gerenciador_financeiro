import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../config/auth';
import { 
  validateEmail, 
  validatePassword, 
  validateCPF, 
  validatePhone 
} from '../utils/validators';

const prisma = new PrismaClient();

export class AuthController {
  // Registrar novo usuário
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { nome, email, senha, cpf, telefone, dataNascimento } = req.body;

      // Validações
      const emailValidation = validateEmail(email);
      if (!emailValidation.isValid) {
        res.status(400).json({
          success: false,
          message: emailValidation.message
        });
        return;
      }

      const passwordValidation = validatePassword(senha);
      if (!passwordValidation.isValid) {
        res.status(400).json({
          success: false,
          message: passwordValidation.message
        });
        return;
      }

      const cpfValidation = validateCPF(cpf || '');
      if (!cpfValidation.isValid) {
        res.status(400).json({
          success: false,
          message: cpfValidation.message
        });
        return;
      }

      const phoneValidation = validatePhone(telefone || '');
      if (!phoneValidation.isValid) {
        res.status(400).json({
          success: false,
          message: phoneValidation.message
        });
        return;
      }

      // Verificar se email já existe
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });

      if (existingUser) {
        res.status(409).json({
          success: false,
          message: 'Email já está em uso'
        });
        return;
      }

      // Hash da senha
      const salt = await bcrypt.genSalt(12);
      const senhaHash = await bcrypt.hash(senha, salt);

      // Criar usuário
      const user = await prisma.user.create({
        data: {
          nome,
          email,
          senhaHash,
          cpf: cpf?.replace(/\D/g, ''),
          telefone: telefone?.replace(/\D/g, ''),
          dataNascimento: dataNascimento ? new Date(dataNascimento) : null,
          ativo: true,
          emailVerificado: false
        }
      });

      // Gerar token
      const token = generateToken(user.id, user.email);

      // Remover senhaHash da resposta
      const { senhaHash: _, ...userWithoutPassword } = user;

      res.status(201).json({
        success: true,
        message: 'Usuário registrado com sucesso',
        data: {
          user: userWithoutPassword,
          token
        }
      });

    } catch (error) {
      console.error('Erro no registro:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno no servidor'
      });
    }
  }

  // Login de usuário
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, senha } = req.body;

      // Validações básicas
      if (!email || !senha) {
        res.status(400).json({
          success: false,
          message: 'Email e senha são obrigatórios'
        });
        return;
      }

      // Buscar usuário
      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        res.status(401).json({
          success: false,
          message: 'Credenciais inválidas'
        });
        return;
      }

      // Verificar se usuário está ativo
      if (!user.ativo) {
        res.status(403).json({
          success: false,
          message: 'Usuário desativado'
        });
        return;
      }

      // Verificar senha
      const isPasswordValid = await bcrypt.compare(senha, user.senhaHash);
      
      if (!isPasswordValid) {
        res.status(401).json({
          success: false,
          message: 'Credenciais inválidas'
        });
        return;
      }

      // Gerar token
      const token = generateToken(user.id, user.email);

      // Remover senhaHash da resposta
      const { senhaHash, ...userWithoutPassword } = user;

      res.status(200).json({
        success: true,
        message: 'Login realizado com sucesso',
        data: {
          user: userWithoutPassword,
          token
        }
      });

    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno no servidor'
      });
    }
  }

  // Obter perfil do usuário atual
  static async getProfile(req: Request, res: Response): Promise<void> {
    try {
      // O middleware de autenticação já adicionou o usuário à request
      const userId = (req as any).user?.userId;

      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'Não autenticado'
        });
        return;
      }

      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          nome: true,
          email: true,
          cpf: true,
          telefone: true,
          dataNascimento: true,
          avatarUrl: true,
          ativo: true,
          emailVerificado: true,
          createdAt: true,
          updatedAt: true
        }
      });

      if (!user) {
        res.status(404).json({
          success: false,
          message: 'Usuário não encontrado'
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: user
      });

    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno no servidor'
      });
    }
  }

  // Atualizar perfil
  static async updateProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user?.userId;
      const { nome, telefone, dataNascimento } = req.body;

      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'Não autenticado'
        });
        return;
      }

      // Atualizar usuário
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          nome,
          telefone: telefone?.replace(/\D/g, ''),
          dataNascimento: dataNascimento ? new Date(dataNascimento) : undefined
        },
        select: {
          id: true,
          nome: true,
          email: true,
          cpf: true,
          telefone: true,
          dataNascimento: true,
          avatarUrl: true,
          ativo: true,
          emailVerificado: true,
          createdAt: true,
          updatedAt: true
        }
      });

      res.status(200).json({
        success: true,
        message: 'Perfil atualizado com sucesso',
        data: updatedUser
      });

    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno no servidor'
      });
    }
  }

  // Alterar senha
  static async changePassword(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user?.userId;
      const { senhaAtual, novaSenha } = req.body;

      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'Não autenticado'
        });
        return;
      }

      // Buscar usuário
      const user = await prisma.user.findUnique({
        where: { id: userId }
      });

      if (!user) {
        res.status(404).json({
          success: false,
          message: 'Usuário não encontrado'
        });
        return;
      }

      // Verificar senha atual
      const isPasswordValid = await bcrypt.compare(senhaAtual, user.senhaHash);
      
      if (!isPasswordValid) {
        res.status(401).json({
          success: false,
          message: 'Senha atual incorreta'
        });
        return;
      }

      // Validar nova senha
      const passwordValidation = validatePassword(novaSenha);
      if (!passwordValidation.isValid) {
        res.status(400).json({
          success: false,
          message: passwordValidation.message
        });
        return;
      }

      // Hash da nova senha
      const salt = await bcrypt.genSalt(12);
      const novaSenhaHash = await bcrypt.hash(novaSenha, salt);

      // Atualizar senha
      await prisma.user.update({
        where: { id: userId },
        data: { senhaHash: novaSenhaHash }
      });

      res.status(200).json({
        success: true,
        message: 'Senha alterada com sucesso'
      });

    } catch (error) {
      console.error('Erro ao alterar senha:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno no servidor'
      });
    }
  }
}