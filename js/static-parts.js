// use this file to set constant elements that don't change
// across individual pages

let menuEntries = [
  {text: "Map",
   link: 'index.html'},
];


let authorName='YOUR NAME HERE',
    footerHtml=`Map Exercise by ${authorName}, based on code from  <a href="https://github.com/titaniumbones/UTSC-map-exercise">this repository</a>`;


function makeMenu (items= menuEntries) {
  let prefix = '',
      html = '',
      basedir = window.location.pathname.split(/\//g).splice(-2)[0]; // check which dir we're in
    // console.log("checking location");
    // console.log(basedir);
    // console.log(window.location.pathname)
    if (! (basedir === 'advanced-topics' || basedir === "")) {
    prefix = '../';
  }
  for (let i of items) {
    html += `<a href="${prefix}${i.link}">${i.text}</a>`;
  }
  html = '<div class="nav-right">' + html + "</div>";
  return html
}

function makeHeader (items = menuEntries) {
  let title = `<a class="navbar-brand pull-right" href="#">${document.title}</a>`,
      menu = makeMenu (items);
  $('header.nav').append( title + menu);
}

function makeFooter (html) {
  $('footer#page-footer').html(`<main>${html}</main>`);
}

makeHeader (menuEntries);
makeFooter (footerHtml);



