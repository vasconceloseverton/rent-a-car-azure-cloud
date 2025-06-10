const express = require('express');
const cors = require('cors');
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
const { ServiceBusClient } = require("@azure/service-bus");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/locacao', async (req, res) => {
  const { nome, email } = req.body;

  const veiculo = {
    modelo: "BMW 320i", // Exemplo de modelo de veículo
    placa: "ABC-1234", // Exemplo de placa de veículo
    ano: 2025,  // Exemplo de ano do veículo
    valorDiaria: 150, // Exemplo de valor da diária
    valorTotal: 1050, // Exemplo de valor total da locação
    tempoAluguel: "2 semanas",  // Exemplo de tempo de aluguel
  };

  const mensagem = {
    nome,
    email,
    ...veiculo,
    data: new Date().toISOString(),
  };

  try {
    const credential = new DefaultAzureCredential();
    const keyVaultUrl = process.env.KEY_VAULT_URL;
    const secretClient = new SecretClient(keyVaultUrl, credential);

    const serviceBusConnection = " "//Coloque aqui a conexão do Service Bus

    const sbClient = new ServiceBusClient(serviceBusConnection);
    const sender = sbClient.createSender("queue-locacoes");

    const message = {
      body: mensagem,
      contentType: "application/json",
    };

    await sender.sendMessages(message);
    await sender.close();
    await sbClient.close();

    res.status(200).send("Locação enviada para o service bus com sucesso");
  } catch (err) {
    console.error("Erro ao enviar mensagem para o service bus:", err);
    res.status(500).send("Erro interno");
  }
});

app.listen(3001, () => console.log("BFF rodando na porta 3001"));