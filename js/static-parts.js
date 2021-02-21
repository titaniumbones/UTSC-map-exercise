// A tiny script to generate header & footer
// separated out to make code easier to read

let menuEntries = [
  {text: "Info",
   link: 'index.html'},
  {text: "Mapping Exercise",
   link: 'spatial-history/index.html'}
];

// set this globally as we're using it twice 
let author = $('meta[name=author]')[0].content || '';

// make menu from entries
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

// get author and title from tags in <head>
function makeHeader () {
  let authorString = author ? `| ${author}` : '',
      title = `<a class="navbar-brand pull-right" href="#">${document.title} ${authorString}</a>`,
      menu=makeMenu();
  $('header.nav').append( title + menu );
}

// pull author again
function makeFooter () {
  let authorString = author ? ` by ${author}` : '',
      footerHtml=`Map Exercise${authorString}, based on code from  <a href="https://github.com/titaniumbones/UTSC-map-exercise">this repository</a>`;
  $('footer#page-footer').html(`<main>${footerHtml}</main>`);
}

// would be cleaner to wrap everything in a single function; oh well, next time!
// the perfect is the enemy of the good.
makeHeader ();
makeFooter ();
