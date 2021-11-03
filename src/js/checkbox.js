export const updateLocal = (getList) => {
  localStorage.clear();
  localStorage.setItem('to-do', JSON.stringify(getList));
};

export function checkList(check, listChek) {
  check.forEach((e) => {
    e.addEventListener('change', (t) => {
      if (t.path[1].className === '') {
        console.log('object');
        t.path[1].className = 'line';
        listChek[t.target.id].completed = true;
        updateLocal(listChek);
      } else {
        t.path[1].className = '';
        listChek[t.target.id].completed = false;
        updateLocal(listChek);
      }
    });
  });
}
