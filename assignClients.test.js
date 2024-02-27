const { assignClients } = require('./assignClients');

test('asigna correctamente clientes a entrenadores', () => {
    const trainers = [
        { name: 'A', reputation: 4.5, availableSlots: 1 },
        { name: 'B', reputation: 3.2, availableSlots: 4 },
        { name: 'C', reputation: 1.2, availableSlots: 3 },
        { name: 'D', reputation: 3.4, availableSlots: 2 }
    ];

    const clients = [
        { name: 'q', reputationImportance: 2.6 },
        { name: 'r', reputationImportance: 3.7 },
        { name: 's', reputationImportance: 8.5 },
        { name: 't', reputationImportance: 9.7 },
        { name: 'u', reputationImportance: 2.6 },
        { name: 'v', reputationImportance: 4.7 },
        { name: 'w', reputationImportance: 5.6 },
        { name: 'x', reputationImportance: 3.7 },
        { name: 'y', reputationImportance: 8.1 },
        { name: 'z', reputationImportance: 2.5 }
      ];

  const expectedAssignment = [
    { trainer: 'A', clients: ['r'] },
    { trainer: 'B', clients: ['s', 't', 'v', 'x'] },
    { trainer: 'C', clients: ['q', 'u', 'z'] },
    { trainer: 'D', clients: ['t', 'v'] }
  ];

  
  expect(assignClients(trainers, clients)).toEqual(expectedAssignment);
});

test('asigna correctamente clientes a entrenadores', () => {
    const trainers = [
        { name: 'A', reputation: 4.5, availableSlots: 1 },
        { name: 'B', reputation: 3.2, availableSlots: 4 },
        { name: 'C', reputation: 1.2, availableSlots: 3 },
        { name: 'D', reputation: 3.4, availableSlots: 2 }
    ];

    const clients = [
        { name: 'q', reputationImportance: 2.6 },
        { name: 'r', reputationImportance: 3.7 },
        { name: 's', reputationImportance: 8.5 },
        { name: 't', reputationImportance: 9.7 },
        { name: 'u', reputationImportance: 2.6 },
        { name: 'v', reputationImportance: 4.7 },
        { name: 'w', reputationImportance: 5.6 },
        { name: 'x', reputationImportance: 3.7 },
        { name: 'y', reputationImportance: 8.1 },
        { name: 'z', reputationImportance: 2.5 }
      ];

  const expectedAssignment2 = {"A": ["t"], "B": ["w", "v", "r", "x"], "C": ["q", "u", "z"], "D": ["s", "y"]};

  
  expect(assignClients(trainers, clients)).toEqual(expectedAssignment2);
});