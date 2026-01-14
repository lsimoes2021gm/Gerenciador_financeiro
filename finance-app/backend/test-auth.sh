#!/bin/bash

echo "🧪 TESTANDO SISTEMA DE AUTENTICAÇÃO 🧪"
echo "======================================="
echo ""

BASE_URL="http://localhost:3001/api/auth"

# 1. Testar registro
echo "1. Testando Registro de Usuário:"
echo "--------------------------------"
REGISTER_RESPONSE=$(curl -s -X POST "$BASE_URL/register" \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@teste.com",
    "senha": "123456",
    "cpf": "12345678901",
    "telefone": "11999999999",
    "dataNascimento": "1990-01-01"
  }')

echo "$REGISTER_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$REGISTER_RESPONSE"
echo ""

# Extrair token do registro
TOKEN=$(echo "$REGISTER_RESPONSE" | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -n "$TOKEN" ]; then
  # 2. Testar perfil com token
  echo "2. Testando Obter Perfil (com token):"
  echo "-------------------------------------"
  PROFILE_RESPONSE=$(curl -s -X GET "$BASE_URL/profile" \
    -H "Authorization: Bearer $TOKEN")
  
  echo "$PROFILE_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$PROFILE_RESPONSE"
  echo ""

  # 3. Testar login
  echo "3. Testando Login:"
  echo "------------------"
  LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/login" \
    -H "Content-Type: application/json" \
    -d '{
      "email": "joao@teste.com",
      "senha": "123456"
    }')
  
  echo "$LOGIN_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$LOGIN_RESPONSE"
  echo ""

  # 4. Testar sem token (deve falhar)
  echo "4. Testando Perfil sem token (deve falhar):"
  echo "-------------------------------------------"
  NO_TOKEN_RESPONSE=$(curl -s -X GET "$BASE_URL/profile")
  echo "$NO_TOKEN_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$NO_TOKEN_RESPONSE"
  echo ""
fi

echo "✅ Testes concluídos!"