// const mailService = new MailService();

class MailService {
  constructor(sender) {
    this.sender = sender;
  }
  sendMessage(message, receiver) {
    console.log(`$this(this.sender) sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);
    console.log("message sent via WhatsApp");
  }
}

const mailService = new MailService("someSender");
const whatsappService = new WhatsAppService("+6281234567890", true);

mailService.sendMessage("Hai, apa kabar?", "someReceiver");
whatsappService.sendMessage("Hai, apa kabar?", "+6289876543210");
