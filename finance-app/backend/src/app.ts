import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

// Rotas
import authRoutes from './routes/auth.routes';

// Configuração
dotenv.config();

// Inicialização
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: 'Muitas requisições deste IP, tente novamente mais tarde.'
});
app.use('/api/', limiter);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'meu-financeiro-backend',
    version: '1.0.0'
  });
});

// Rota padrão
app.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API do Meu Financeiro',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      docs: '/api-docs (em breve)'
    },
    status: 'operational'
  });
});

// Rotas da API
app.use('/api/auth', authRoutes);

// Tratamento de erros 404
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    path: req.originalUrl,
    method: req.method
  });
});

// Tratamento de erros global
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Erro não tratado:', error);
  
  res.status(500).json({
    error: 'Erro interno do servidor',
    message: process.env.NODE_ENV === 'development' ? error.message : undefined,
    timestamp: new Date().toISOString()
  });
});

// Inicialização do servidor
const startServer = async () => {
  try {
    console.log('='.repeat(60));
    console.log('🚀 BACKEND DO MEU FINANCEIRO');
    console.log('='.repeat(60));
    console.log(`📡 Porta: ${PORT}`);
    console.log(`🌐 URL: http://localhost:${PORT}`);
    console.log(`📁 Ambiente: ${process.env.NODE_ENV}`);
    console.log('='.repeat(60));
    console.log('');
    console.log('📋 ENDPOINTS DISPONÍVEIS:');
    console.log('');
    console.log('🔓 Rotas Públicas:');
    console.log(`   POST   http://localhost:${PORT}/api/auth/register`);
    console.log(`   POST   http://localhost:${PORT}/api/auth/login`);
    console.log('');
    console.log('🔒 Rotas Protegidas (requer token JWT):');
    console.log(`   GET    http://localhost:${PORT}/api/auth/profile`);
    console.log(`   PUT    http://localhost:${PORT}/api/auth/profile`);
    console.log(`   PUT    http://localhost:${PORT}/api/auth/change-password`);
    console.log('');
    console.log('🧪 Testes:');
    console.log(`   GET    http://localhost:${PORT}/health`);
    console.log(`   GET    http://localhost:${PORT}/`);
    console.log('='.repeat(60));
    
    app.listen(PORT, () => {
      console.log(`✅ Servidor iniciado com sucesso!`);
      console.log('');
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar servidor:', error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('🛑 Recebido SIGTERM, desligando graciosamente...');
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('🛑 Recebido SIGINT, desligando graciosamente...');
  process.exit(0);
});

startServer();