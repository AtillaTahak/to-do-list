export const updateLocal = (getList) => {
  localStorage.clear();
  localStorage.setItem('to-do', JSON.stringify(getList));
};

export function checkList(check, listChek) {
  check.forEach((e) => {
    e.addEventListener('change', (t) => {
      if (t.path[1].className === '') {
        t.path[1].className = 'line';
        for (let i = 0; i < listChek.length; i += 1) {
          if (listChek[i].id === e.id) {
            listChek[i].completed = true;
            updateLocal(listChek);
          }
        }
      } else {
        t.path[1].className = '';
        for (let a = 0; a < listChek.length; a += 1) {
          if (listChek[a].id === e.id) {
            listChek[a].completed = false;
            updateLocal(listChek);
          }
        }
      }
    });
  });
}
