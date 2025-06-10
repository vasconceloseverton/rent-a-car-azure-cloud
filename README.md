# Rent-a-Car Azure Cloud

Este projeto é uma solução básica para fins de teste para locação de veículos, composta por:

- **Back-end:** Node.js utilizando Azure Functions (em `backend/functions`), Cosmos DB (infraestrutura Cloud Azure) e PostgreSQL.
- **Front-end:** React Native (mobile).
- **Documentação visual:** Diagrama do fluxo do sistema.

---

## 📁 Estrutura Completa do Projeto

```
rent-a-car-azure-cloud/
│
├── backend/                              # Código-fonte do back-end (API)
│   ├── functions/                        # Azure Functions (serverless, Node.js)
│   ├── host.json                         # Configuração do Azure Functions
│   ├── local.settings.json               # Configuração local (NÃO subir para produção)
│   ├── package.json                      # Dependências e scripts do backend
│   └── ...                               # Outros arquivos do backend
│
├── frontend/
│   └── rent-car-azure-frontend/
│       ├── App.js                        # Tela principal de locação (React Native)
│       ├── components/                   # Componentes reutilizáveis (ex: Header, Footer)
│       ├── screens/                      # Telas (ex: Locação, Histórico, Sobre)
│       ├── assets/                       # Imagens e estilos
│       ├── app.json                      # Configuração do app React Native
│       └── ...                           # Outros arquivos do React Native
│
├── Project-diagram.png                  # Imagem do diagrama do projeto
│
├── README.md                             # Este arquivo
│
└── .gitignore                            # Arquivos e pastas ignorados pelo git
```

---

## 🖥️ Telas do Sistema

- **Tela Principal:**  
 
---

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (v18+)
- npm
- Azure Functions Core Tools (`npm install -g azure-functions-core-tools@4`)
- Emulador do Cosmos DB (opcional para testes locais)
- PostgreSQL local ou em nuvem
- React Native CLI ou Expo CLI

### 1. Back-end (Azure Functions)

```sh
cd backend
npm install
cd functions
func start
```
O back-end estará disponível em `http://localhost:7071/api`.

### 2. Front-end (React Native)

```sh
cd frontend/rent-car-azure-frontend
npm install
npx expo start
```
O app pode ser aberto em um emulador ou dispositivo físico via Expo Go.

---

## 🗂️ Diagrama do Projeto

Veja o arquivo `Project-diagram.png` na raiz para entender o fluxo e arquitetura do sistema.

---

## ☁️ Deploy na Azure

- **Back-end:** Publique as Azure Functions (pasta `functions`) e configure as conexões com Cosmos DB (Azure Cloud) e PostgreSQL via Azure Portal.
- **Front-end:** Publique o app React Native nas lojas (Google Play, App Store) ou use Expo.
- Consulte a [documentação oficial da Azure](https://docs.microsoft.com/azure/) para detalhes.

---

## 📄 Licença

Projeto open-source para fins educacionais.

---

Desenvolvido por Everton Vasconcelos