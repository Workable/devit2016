import $ from 'jquery';

const ENDPOINT = 'http://localhost:1337/spoilers';

export default function requestSpoiler(name = '') {
  return $.getJSON(ENDPOINT, {name});
}
