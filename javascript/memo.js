function Todo() {
  this.insertKey = 13;
  this.temTemplate = null;
  this.items = [];

  this.loadAssets();

  $('.new-memo').on('keypress', this.onCreate.bind(this));
}

Todo.prototype.loadAssets = function() {
  let template = $('#item-template').html();

  this.itemTemplate = Handlebars.compile(template);
};

Todo.prototype.create = function(title) {
  this.items.push({
    id: this.items.length + 1,
    title: title,
    completed: false
  });
};

Todo.prototype.updateComplate = function(id, completed) {
  for(let i=0; i < this.items.length; i++) {
    if (this.items[i].id === id) {
      this.items[i].completed = completed;
      return;
    }
  }
};

Todo.prototype.delete = function(id) {
  if (typeof id !== 'number') {
    id = Number(id);
  }

  this.items = this.items.filter(item => item.id !== id);
};

Todo.prototype.onCreate = function(event) {
  if (event.which === this.insertKey) {
    this.create(event.target.value);

    event.target.value = '';

    this.render();
  }
};

Todo.prototype.onToggleComplete = function(event) {
  this.updateComplate(Number(event.target.value), event.target.checked);
  this.render();
};

Todo.prototype.onDelete = function(event) {
  this.delete(event.target.dataset.id);
  this.render();
};

Todo.prototype.render = function() {
    let $list = $('.memo-list');

    $list.html('');

    for(let i=0; i<this.items.length; i++) {
      $list.append(this.itemTemplate( this.items[i] ));
    }

    $('.toggle').on('change', this.onToggleComplete.bind(this));
    $('.destroy').on('click', this.onDelete.bind(this));
};

function startApp() {
  let app = new Todo();
}

$(startApp);
