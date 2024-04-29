// Interface para funcionários que podem trabalhar remotamente
class RemoteWorkable {
    workRemotely() {
      throw new Error("Método workRemotely() deve ser implementado");
    }
  }
  
  // Interface para funcionários que podem participar de reuniões
  class MeetingParticipant {
    participateMeeting() {
      throw new Error("Método participateMeeting() deve ser implementado");
    }
  }
  
  // Interface para funcionários que podem codificar
  class Coder {
    code() {
      throw new Error("Método code() deve ser implementado");
    }
  }
  
  // Classe para desenvolvedores
  class Developer extends Coder {
    code() {
      console.log("Desenvolvedor codificando...");
    }
  }
  
  // Classe para designers
  class Designer extends RemoteWorkable {
    workRemotely() {
      console.log("Designer trabalhando remotamente...");
    }
  }
  
  // Classe para gerentes
  class Manager extends MeetingParticipant {
    participateMeeting() {
      console.log("Gerente participando de reunião...");
    }
  }
  