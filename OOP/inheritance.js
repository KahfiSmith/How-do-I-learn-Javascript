//tanpa inheritance
// class MailService {
//   constructor(sender) {
//     this.sender = sender;
//   }

//   sendMessage(message, receiver) {
//     console.log(`${this.sender}, sent ${message} to ${receiver}`);
//   }

//   sendDelayMessage(message, receiver, delay) {
//     setTimeout(() => {
//       this.sendMessage(message, receiver);
//     }, delay);
//   }

//   sendBroadcastMessage(message, receivers) {
//     for (const receiver of receivers) {
//       this.sendMessage(message, receiver);
//     }
//   }
// }

// const whatsapp = new MailService('+6281234567890');
// const email = new MailService('dimas@dicoding.com');

// whatsapp.sendDelayedMessage(); 
// email.sendBroadcastMessage(); 

//menggunakan inheritance
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
 
whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
// whatsapp.sendDelayedMessage(); // Error
 
email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
// email.sendBroadcastMessage(); // Error

console.log(whatsapp instanceof WhatsAppService);
console.log(whatsapp instanceof EmailService);
console.log(whatsapp instanceof MailService);
 
console.log(email instanceof EmailService);
console.log(email instanceof WhatsAppService);
console.log(email instanceof MailService);