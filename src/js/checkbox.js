export const updateLocal = (getList) => {
  localStorage.clear();
  localStorage.setItem('to-do', JSON.stringify(getList));
};

export function checkList(check, listChek) {
  check.forEach((e) => {
    e.addEventListener('change', (t) => {
      if (t.path[1].className === '') {
        t.path[1].className = 'line';
        listChek.forEach((e) => {
          if (e.id === t.target.id) {
            e.completed = true;
          }
        });
        updateLocal(listChek);
      } else {
        t.path[1].className = '';
        listChek.forEach((e) => {
          if (e.id === t.target.id) {
            e.completed = false;
          }
        });
        updateLocal(listChek);
      }
    });
  });
}
