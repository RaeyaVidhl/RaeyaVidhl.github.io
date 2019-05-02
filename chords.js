var root = 0;
var chord = 0;

var noteNameList = ['Root', 'Minor Second', 'Major Second', 'Minor Third', 'Major Third', 'Perfect Fourth', 'Tritone', 'Perfect Fifth', 'Minor Sixth', 'Major Sixth', 'Minor Seventh', 'Major Seventh', 'Perfect Octave'];
var noteList = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
var chordList = [
  {
    name: 'Major',
    notes: [0, 4, 7],
  },
  {
    name: 'Minor',
    notes: [0, 3, 7],
  },
  {
    name: 'Diminished Fifth',
    notes: [0, 3, 6],
  },
  {
    name: 'Major Seventh',
    notes: [0, 4, 7, 11],
  },
  {
    name: 'Minor Seventh',
    notes: [0, 3, 7, 10],
  },
  {
    name: 'Dominant Seventh',
    notes: [0, 4, 7, 10],
  },
  {
    name: 'Suspended Second',
    notes: [0, 2, 7],
  },
  {
    name: 'Suspended Fourth',
    notes: [0, 5, 7],
  },
  {
    name: 'Augmented Fifth',
    notes: [0, 4, 8],
  },
];

function update() {
  document.getElementById('result-name').innerHTML = noteList[root] + ' ' + chordList[chord].name;
  document.getElementById('result').innerHTML = chordList[chord].notes.map(
    function(note) {
      return noteList[(note + root) % noteList.length];
    }
  ).join(' ');

  var notesElement = document.getElementById('notes');
  notesElement.innerHTML = '';
  for (var i = 0; i < noteNameList.length; ++i) {
    (function(_i) {
      var element = document.createElement('input');
      element.type = 'checkbox';
      element.textContent = noteList[_i];
      if (chordList[chord].notes.includes(_i)) {
        element.checked = true;
      }
      text = document.createElement('span');
      text.textContent = noteNameList[_i];
      notesElement.appendChild(element);
      notesElement.appendChild(text);
    })(i);
  }
}

var rootElement = document.getElementById('root');
rootElement.innerHTML = '';
for (var i = 0; i < noteList.length; ++i) {
  (function(_i) {
    var element = document.createElement('button');
    element.textContent = noteList[_i];
    element.addEventListener('click', function() {
      root = _i;
      update();
    });
    rootElement.appendChild(element);
  })(i);
}

var chordElement = document.getElementById('chord');
chordElement.innerHTML = '';
for (var i = 0; i < chordList.length; ++i) {
  (function(_i) {
    var element = document.createElement('button');
    element.textContent = chordList[_i].name;
    element.addEventListener('click', function() {
      chord = _i;
      update();
    });
    chordElement.appendChild(element);
  })(i);
}

update();