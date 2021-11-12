import { deleteAllFnc, deleteTaskIm } from '../js/delete.js';

describe('Delete function test', () => {
  const testingObject = [
    {
      description: 'Task1',
      completed: false,
      id: 2,
    },
    {
      description: 'Task2',
      completed: false,
      id: 1,
    },
  ];
  document.body.innerHTML = `
    <div class="list-body">
     <button id="deleteAll">Delete</button>

    </div>

    `;

  test('should  return 1 ', () => {
    expect(deleteTaskIm(1, testingObject)).toHaveLength(1);
  });
  test('should not return null', () => {
    expect(deleteTaskIm(2, testingObject)).not.toBeNull;// eslint-disable-line
  });
  test('should  return 1', () => {
    expect(deleteAllFnc(testingObject)).not.toBeNull;// eslint-disable-line
  });
});