/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
const _ = require('lodash');

// function to count amount of overall wins per players
function countWins(arr) {
  const winners = {};
  for (let i = 0; i < arr.length; i++) {
    if (winners[arr[i].placement[0]]) {
      winners[arr[i].placement[0]] += 1;
    } else {
      winners[arr[i].placement[0]] = 1;
    }
  }
  return winners;
}

// count amount of times tracks are picked
function countTracks(arr) {
  const tracks = {};
  for (let i = 0; i < arr.length; i++) {
    if (tracks[arr[i].track]) {
      tracks[arr[i].track] += 1;
    } else {
      tracks[arr[i].track] = 1;
    }
  }
  return tracks;
}

// count amount of times characters are played
function countCharacters(arr) {
  const chars = {};
  for (let i = 0; i < arr.length; i++) {
    if (chars[arr[i].character]) {
      chars[arr[i].character] += 1;
    } else {
      chars[arr[i].character] = 1;
    }
  }
  return chars;
}

// sort winners by amount of times won, descending
function sortWinners(obj) {
  const winnersArr = Object.entries(obj);
  const sorted = winnersArr.sort((a, b) => (
    b[1] - a[1]
  ));
  return sorted;
}


/* eslint-disable */
// find championship games
function findChamps(arr) {
  return arr.filter(val => (
    val.championship = 'true'
  ));
}
/* eslint-enable */

// count winners from champ games
function countChampWins(champArr) {
  const arr = findChamps(champArr);
  const winners = {};
  for (let i = 0; i < arr.length; i++) {
    if (winners[arr[i].races[0].placement[0]]) {
      winners[arr[i].races[0].placement[0]].value += 1;
    } else {
      winners[arr[i].races[0].placement[0]] = { value: 0 };
    }
  }

  return winners;
}

// sorted champ winning data
function sortedChampWinnerData(data) {
  return sortWinners(countChampWins(data));
}

// sorted overall winning data
function sortedWinnerData(data) {
  return sortWinners(countWins(data));
}

// sorted track data
function sortedTrackData(data) {
  return sortWinners(countTracks(data));
}

// sorted character data
function sortedCharacterData(data) {
  return sortWinners(countCharacters(data));
}

// match players with chosen tracks
// use with flattened race variable
function playerTracks(arr) {
  const playTracks = {};
  for (let i = 0; i < arr.length; i++) {
    if (!playTracks[arr[i].chosen_by] && arr[i].chosen_by !== 'championship') {
      playTracks[arr[i].chosen_by] = [];
    }
    if (playTracks[arr[i].chosen_by]) {
      playTracks[arr[i].chosen_by].push(arr[i].track);
    }
  }
  return Object.entries(playTracks);
}

// players - characters
// use with flattened players variable
function playersChars(arr) {
  const playChars = {};
  for (let i = 0; i < arr.length; i++) {
    if (!playChars[arr[i].name]) {
      playChars[arr[i].name] = [];
    }
    if (playChars[arr[i].name]) {
      playChars[arr[i].name].push(arr[i].character);
    }
  }
  return Object.entries(playChars);
}


// find most frequent, can be used for tracks & characters
function findMostFreqLodash(arr) {
  const resultArr = [];
  const result = ar => (
    _.head(_(ar)
      .countBy()
      .entries()
      .maxBy('[1]'))
  );
  for (let i = 0; i < arr.length; i++) {
    resultArr.push({ name: arr[i][0], val: result(arr[i][1]) });
  }
  return resultArr;
}

module.exports = {
  countWins,
  sortWinners,
  sortedWinnerData,
  sortedChampWinnerData,
  sortedTrackData,
  sortedCharacterData,
  playerTracks,
  playersChars,
  findMostFreqLodash,
};
