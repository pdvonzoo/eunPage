function $(app) {
  document.addEventListener('DOMContentLoaded', app);
}

function $on(eventName, target, handler) {
  target.addEventListener(eventName, handler);
}

function $id(id) {
  return document.getElementById(id);
}

function $el(tag) {
  return document.createElement(tag);
}
