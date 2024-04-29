// Abstração para um canal de entrega de mensagem
class MessageSender {
    sendMessage(message) {
      throw new Error("sendMessage() deve ser implementado");
    }
  }
  
  // Implementação concreta para envio de e-mails
  class EmailSender extends MessageSender {
    sendMessage(message) {
      console.log(`Enviando e-mail: ${message}`);
    }
  }
  
  // Implementação concreta para envio de SMS
  class SMSSender extends MessageSender {
    sendMessage(message) {
      console.log(`Enviando SMS: ${message}`);
    }
  }
  
  // Implementação concreta para envio de notificações push
  class PushNotificationSender extends MessageSender {
    sendMessage(message) {
      console.log(`Enviando notificação push: ${message}`);
    }
  }
  
  // Classe de alto nível que depende de abstrações, não de implementações concretas
  class NotificationService {
    constructor(sender) {
      this.sender = sender;
    }
  
    sendNotification(message) {
      this.sender.sendMessage(message);
    }
  }
  