import { createTask } from '../js/functionality.js';

describe('Added items check', () => {
  test('Added items end resut', () => {
    const testingObject = [
      {
        description: 'Task1',
        completed: false,
        id: Math.random().toString(16).slice(2),
      },
      {
        description: 'Task2',
        completed: false,
        id: Math.random().toString(16).slice(2),
      },
    ];
    document.body.innerHTML = `
        <div class="list-body">
    
        </div>
        `;
    expect(createTask(testingObject)).toHaveLength(2);
  });
});
