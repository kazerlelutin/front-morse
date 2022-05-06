const LS = "morse";

function get(key) {
  if (!localStorage.getItem(LS)) localStorage.setItem(LS, JSON.stringify({}));
  const ls = JSON.parse(localStorage.getItem(LS));
  return key ? ls[key] : ls;
}

function set(key, value) {
  const save = get();
  save[key] = value;
  localStorage.setItem(LS, JSON.stringify(save));
  return get();
}

const bdd = {
  get: get,
  set: set,
};

export default bdd;
