const axios = require('axios');

const call = async () => {

  const body = {
    "messages": [
      {
        "type": "tts",
        "data": "olá {{name}}, eu sou a voz do google, e estou te convidando para a conferencia de estaca da Estaca Pirituba"
      }
    ],
    "phoneField": "phone",
    "to": [
      {
        "name": "Alexandre",
        "phone": "5511932047045"
      }
    ]
  }

  const response = await axios.post('http://190.11.213.3:27015/send', body);
  console.log(response.data);
}

call();

