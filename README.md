# Digital History Map Project

**WARNING (Feb 17, 2021)** This repository is being constructed in preparation for my talk on Feb. 26. Please expect things to change. In particular, the git history is still being pruned so `git pull` may fail in future.

**NOTE:** This code has mostly been extracted from [a real assignment I use in my own Digital History class](https://github.com/DigitalHistory/advanced-topics). Please feel free to experiment with the code as you wish. 



There's a lot more to read here, but for now what you probably want is [a link to the map project code](./spatial-history/README.org).

## Viewing the repo
Because of browser security settings, this repository will not display properly when you try to view the files directly in your browser.  **This is good -- you don't want your browser to read and write sensitive files on your computer!** However, it's a bit inconvenient for us. In order to check your work, you will need to start a simple server in the repository. the easiest way to do that is to `npm run server` from the command line or by using the npm run scrpt command in VSCode. This will serve the files at `localhost:8080`; if you navigate there in your browser, you will see the live files. Your work will not always update automatically. In Chrome, open devtools and then click and hold the refresh button on the toolbar; choose "Empty Cashe and Reload".  In Firefox, [follow these instructions](https://support.mozilla.org/en-US/questions/1103414). For live reload, run `npm run watch` instead; however, this can lead to some display problems with dynamic content such as maps. I've also added a convenience function that will open the map directly: `npm run servemap`


## Markdown rendering in this repo
Markdown is rendered by [markdown-it](https://github.com/markdown-it/markdown-it), a powerful parser written in JavaScript. It enables a few extra features that we have not discussed; these are mostly discussed in its repository (linked above). **Note: not all of these features will render properly in Github and in VSCode Previews of this file. Please copy the reelvant text into one of your index.md files to see the syntax at work**.  We use the CommonMark settings, as well as some extensions: 

- [github-style tables](https://help.github.com/en/articles/organizing-information-with-tables)
- [css-like attributes](https://github.com/arve0/markdown-it-attrs)
- [footnotes](https://github.com/markdown-it/markdown-it-footnote)

you can also add emoji like in github :pizza: :maple_leaf:, though you may need to mess around with fonts to get it to work the way you want :-). See [list of emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) for options.

The rest of this section is just a review of features. 
### Use headlines in sections like this

Remember you can use _italics_ and __bold__ which can also be written *like this* or **like this**
etc. Be sure to [make use of links](http://digital.hackinghistory.ca) -- that's one of the reasons we write on the Web, and I've asked you to use links for all yor footnotes/references as well.

> make blockquotes with greater-than signs.  In the unlikely event that you wnat to nest them, that is also possible.

<section id="just-testing" class="style-me-if-you-want">

**Note:** to use markdown syntax inside of HTML tags, as has been done here, be sure to [leave empty lines below the html tag and above the closing tag](https://stackoverflow.com/questions/29368902/how-can-i-wrap-my-markdown-in-an-html-div#answers-header). You may possibly want to do this if you need to create high-level sections to use for flexbox or grid styling. 

</section>

### This Heading has a class "example" and ID "specific" {#specific .example}

add footnotes like this[^1] or like this ^[this is just some markdown text which will render as a footnote link]

footnotes willl be renumbered sequentially as you go[^note2], regardless of what label you choose. Footnote content can be added inline (see the eecond example above) or in a separate line somewhere in the page (see first and third examples). 

[^1]: note here

[^note2]: you don't have to use sequential numbers, in fact you can call them whatever you want 

### Tables

In some of your assignments, it may be useful to create tables. Here's an example: 
| Heading | Columns |
| -----   | ----    |
| test    | data    |
| test    | data    |
| test    | data    |
{.striped}

Notice the addition of a pair of curly brackets containing a CSS celector below the table -- this wil appy the class `striped` to the table when it is rendered in HTML. 

## Viewing the Live Repo

It is **really easy** to flip a switch and make this repo go live! Near the top of this page you will see a :gear: gear icon -- this is the settings page. Navigate to that page and scroll down to the heading labeled `Github Pages`.  There's a drop-down menu there currently reading "none".  Click on the box and select `master branch` instead.  Moments later, your site will appear live at the URL now displayed in a blue box within the Github Pages section.

That's it! You're Live! [You can read more about Github Pages here](https://help.github.com/en/articles/what-is-github-pages)

## Taking Control of Your Repo

At this point, you have a functioning website. If you want to keep it permanently as a personal website, you should probably assume control of it. You have two choices. 

- from the settings page (see above) scroll down to `Danger Zone` and choose `Transfer ownership`. Go through the multi-stage confirmation process. Once you're done, the repo will belong entirely to you -- there will no longer be a copy in the class Github Roganization. **Don't do this before the end of the semester!**
- alternatively, just fork your repo using the `Fork` button near the top of the page on the **root page** of your repository (probably this page!). You will probably have to set up publishing again -- see [viewing the live repo](#viewing-the-live-repo), above. 

