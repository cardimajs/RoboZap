const Mustache = require("mustache");
const venom = require('venom-bot');
const googleTTS = require('google-tts-api');

class WPBOT {

  constructor( args ){
    this.client = null;
    this.ready = false;
    this.start();
  }

  async start(){
    this.client = await venom.create();
    this.ready = true;
  }

  async sendMassMessage({to, messages, phoneField} = {}) {
    const failedSendTo = [];
    
    for(const item of to) {
      try{
        for(const message of messages){
          
          const phoneNumber = `${item[phoneField]}@c.us`;

          if(message.type === "text"){
            const messageText = this.templateToText({template: message.data, data: item});
            await this.client.sendText(phoneNumber, messageText);
          }
          else if( message.type === "image"){
            await this.client.sendImage(phoneNumber, message.data);
          }
          else if( message.type === "location"){
            await this.client.sendLocation(phoneNumber, message.data[0], message.data[1], message.data[2]);
          }
          else if( message.type === "sticker"){
            await this.client.sendImageAsSticker(phoneNumber, message.data);
          }
          else if( message.type === "stickerGif"){
            await this.client.sendImageAsStickerGif(phoneNumber, message.data);
          }
          else if( message.type === "voice"){
            await this.client.sendVoice(phoneNumber, message.data);
          }
          else if( message.type === "tts"){
            const messageText = this.templateToText({template: message.data, data: item});
            const url = googleTTS.getAudioUrl(messageText,  { lang: 'pt-BR', slow: false });
            await this.client.sendVoice(phoneNumber, url);
          }
        }        
      }
      catch(error){
        console.log(error);
        failedSendTo.push(item);
      }
      
    }
    return {failedSendTo}   
  }


  templateToText({ template, data }) {
    return Mustache.render(template, data);
  };

}

module.exports = new WPBOT();