/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  //helper functions and general utilities

  var Utils = {};

  Utils.adjacentCells = function(i) {
    //return a list of cell objects corresponding to the neighbours of cell i

    var neighbours = [],
        j, neighbourIndex;

    //three above:
    for (j = -1; j < 2; j++) {
      neighbourIndex = i - Game.level.width + j;
      if (neighbourIndex >= 0 && Math.floor(neighbourIndex / Game.level.width) === Math.floor((i - Game.level.width) / Game.level.width)) {
        neighbours.push(Game.board.cells[neighbourIndex]);
      }
    }

    //two beside
    if (i - 1 >= Math.floor(i / Game.level.width) * Game.level.width) {
      neighbours.push(Game.board.cells[i - 1]);
    }

    if (i + 1 < Math.floor(i / Game.level.width) * Game.level.width + Game.level.width) {
      neighbours.push(Game.board.cells[i + 1]);
    }

    //three below
    for (j = -1; j < 2; j++) {
      neighbourIndex = i + Game.level.width + j;
      if (neighbourIndex < Game.level.width * Game.level.height && Math.floor(neighbourIndex / Game.level.width) === Math.floor((i + Game.level.width) / Game.level.width)) {
        neighbours.push(Game.board.cells[neighbourIndex]);
      }
    }

    return neighbours;
  };

  Utils.inArray = function(needle, haystack) {
    //Determine if item is in array
    //Borrowed from: http://stackoverflow.com/questions/784012/javascript-equivalent-of-phps-in-array
    var length = haystack.length,
        i;

    for (i = 0; i < length; i++) {
      if (haystack[i] === needle) {
        return true;
      }
    }

    return false;
  };

  window.Utils = Utils;

})();
