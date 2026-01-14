import validator from 'validator';

export const validateEmail = (email: string): { isValid: boolean; message?: string } => {
  if (!email) {
    return { isValid: false, message: 'Email é obrigatório' };
  }
  
  if (!validator.isEmail(email)) {
    return { isValid: false, message: 'Email inválido' };
  }
  
  return { isValid: true };
};

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (!password) {
    return { isValid: false, message: 'Senha é obrigatória' };
  }
  
  if (password.length < 6) {
    return { isValid: false, message: 'Senha deve ter pelo menos 6 caracteres' };
  }
  
  return { isValid: true };
};

export const validateCPF = (cpf: string): { isValid: boolean; message?: string } => {
  if (!cpf) {
    return { isValid: true }; // CPF é opcional
  }
  
  const cleanCPF = cpf.replace(/\D/g, '');
  
  if (cleanCPF.length !== 11) {
    return { isValid: false, message: 'CPF deve ter 11 dígitos' };
  }
  
  // Validação simples de CPF (pode ser melhorada)
  if (/^(\d)\1{10}$/.test(cleanCPF)) {
    return { isValid: false, message: 'CPF inválido' };
  }
  
  return { isValid: true };
};

export const validatePhone = (phone: string): { isValid: boolean; message?: string } => {
  if (!phone) {
    return { isValid: true }; // Telefone é opcional
  }
  
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (cleanPhone.length < 10 || cleanPhone.length > 11) {
    return { isValid: false, message: 'Telefone inválido' };
  }
  
  return { isValid: true };
};