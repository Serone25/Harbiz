  //test de jest---> 1.- Descomentar el module.exports = {assignClients}  2.- npm test
  //test de cypress--> 1.- Comentar el module.exports = {assignClients} 2.- npx cypress open

  function assignClients(trainers, clients) {

    trainers.sort((a, b) => b.reputation - a.reputation);                                                   //ordeno de mayor a menor la reputacion de entrenadores

    clients.sort((a, b) => b.reputationImportance - a.reputationImportance);                                //ordeno de mayor a menor la importancia de reputación del cliente
  
    const assignment = {};
  
    clients.forEach(client => {
      let bestTrainer = null;
      let maxSatisfaction = -1;
  
      trainers.forEach(trainer => {
        if (trainer.availableSlots > 0) {
          let satisfaction = 0;                                                                             //satisfacción potencial del cliente
          satisfaction = client.reputationImportance * trainer.reputation;                                  //fórmula de satisfacción del cliente

          if (satisfaction > maxSatisfaction) {                                                             //actualizar si hay mayor satisfacción
            maxSatisfaction = satisfaction;
            bestTrainer = trainer;
          }
        }
      });

      if (bestTrainer) {                                                                                    //asignar al mejor entrenador encontrado/posible
        if (!assignment[bestTrainer.name]) {
          assignment[bestTrainer.name] = [];
        }
        assignment[bestTrainer.name].push(client.name);
        bestTrainer.availableSlots--;
      }
    });
  
    //console.log(assignment);
    return assignment;
  } 

  //module.exports = {assignClients};                                                                          //test de jest
