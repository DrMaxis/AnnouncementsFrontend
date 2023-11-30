export const announcements = [
    {
        id: 1,
        title: 'Full HTML Markup Example',
        date: "2023-12-01",
        author: 'Derick Antwi',
        content: `<hr />
<p><strong>Advertisement :)</strong></p>
<ul>
<li><strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong> - high quality and fast image
resize in browser.</li>
<li><strong><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong> - developer friendly
i18n with plurals support and easy syntax.</li>
</ul>
<p>You will like those projects!</p>
<hr />
<h1>h1 Heading 8-)</h1>
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>
<h2>Horizontal Rules</h2>
<hr />
<hr />
<hr />
<h2>Typographic replacements</h2>
<p>Enable typographer option to see result.</p>
<p>(c) (C) (r) (R) (tm) (TM) (p) (P) +-</p>
<p>test.. test... test..... test?..... test!....</p>
<p>!!!!!! ???? ,,  -- ---</p>
<p>&quot;Smartypants, double quotes&quot; and 'single quotes'</p>
<h2>Emphasis</h2>
<p><strong>This is bold text</strong></p>
<p><strong>This is bold text</strong></p>
<p><em>This is italic text</em></p>
<p><em>This is italic text</em></p>
<p>~~Strikethrough~~</p>
<h2>Blockquotes</h2>
<blockquote>
<p>Blockquotes can also be nested...</p>
<blockquote>
<p>...by using additional greater-than signs right next to each other...</p>
<blockquote>
<p>...or with spaces between arrows.</p>
</blockquote>
</blockquote>
</blockquote>
<h2>Lists</h2>
<p>Unordered</p>
<ul>
<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
<li>Sub-lists are made by indenting 2 spaces:
<ul>
<li>Marker character change forces new list start:
<ul>
<li>Ac tristique libero volutpat at</li>
</ul>
<ul>
<li>Facilisis in pretium nisl aliquet</li>
</ul>
<ul>
<li>Nulla volutpat aliquam velit</li>
</ul>
</li>
</ul>
</li>
<li>Very easy!</li>
</ul>
<p>Ordered</p>
<ol>
<li>
<p>Lorem ipsum dolor sit amet</p>
</li>
<li>
<p>Consectetur adipiscing elit</p>
</li>
<li>
<p>Integer molestie lorem at massa</p>
</li>
<li>
<p>You can use sequential numbers...</p>
</li>
<li>
<p>...or keep all the numbers as <code>1.</code></p>
</li>
</ol>
<p>Start numbering with offset:</p>
<ol start="57">
<li>foo</li>
<li>bar</li>
</ol>
<h2>Code</h2>
<p>Inline <code>code</code></p>
<p>Indented code</p>
<pre><code>// Some comments
line 1 of code
line 2 of code
line 3 of code
</code></pre>
<p>Block code &quot;fences&quot;</p>
<pre><code>Sample text here...
</code></pre>
<p>Syntax highlighting</p>
<pre><code class="language-js">var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
</code></pre>
<h2>Tables</h2>
<p>| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |</p>
<p>Right aligned columns</p>
<p>| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |</p>
<h2>Links</h2>
<p><a href="http://dev.nodeca.com">link text</a></p>
<p><a href="http://nodeca.github.io/pica/demo/" title="title text!">link with title</a></p>
<p>Autoconverted link https://github.com/nodeca/pica (enable linkify to see)</p>
<h2>Images</h2>
<p><img src="https://octodex.github.com/images/minion.png" alt="Minion" />
<img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat" /></p>
<p>Like links, Images also have a footnote style syntax</p>
<p><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat" /></p>
<p>With a reference later in the document defining the URL location:</p>
<h2>Plugins</h2>
<p>The killer feature of <code>markdown-it</code> is very effective support of
<a href="https://www.npmjs.org/browse/keyword/markdown-it-plugin">syntax plugins</a>.</p>
<h3><a href="https://github.com/markdown-it/markdown-it-emoji">Emojies</a></h3>
<blockquote>
<p>Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:</p>
<p>Shortcuts (emoticons): :-) :-( 8-) ;)</p>
</blockquote>
<p>see <a href="https://github.com/markdown-it/markdown-it-emoji#change-output">how to change output</a> with twemoji.</p>
<h3><a href="https://github.com/markdown-it/markdown-it-sub">Subscript</a> / <a href="https://github.com/markdown-it/markdown-it-sup">Superscript</a></h3>
<ul>
<li>19^th^</li>
<li>H~2~O</li>
</ul>
<h3><a href="https://github.com/markdown-it/markdown-it-ins">&lt;ins&gt;</a></h3>
<p>++Inserted text++</p>
<h3><a href="https://github.com/markdown-it/markdown-it-mark">&lt;mark&gt;</a></h3>
<p>==Marked text==</p>
<h3><a href="https://github.com/markdown-it/markdown-it-footnote">Footnotes</a></h3>
<p>Footnote 1 link[^first].</p>
<p>Footnote 2 link[^second].</p>
<p>Inline footnote^[Text of inline footnote] definition.</p>
<p>Duplicated footnote reference[^second].</p>
<p>[^first]: Footnote <strong>can have markup</strong></p>
<pre><code>and multiple paragraphs.
</code></pre>
<p>[^second]: Footnote text.</p>
<h3><a href="https://github.com/markdown-it/markdown-it-deflist">Definition lists</a></h3>
<p>Term 1</p>
<p>:   Definition 1
with lazy continuation.</p>
<p>Term 2 with <em>inline markup</em></p>
<p>:   Definition 2</p>
<pre><code>    { some code, part of Definition 2 }

Third paragraph of definition 2.
</code></pre>
<p><em>Compact style:</em></p>
<p>Term 1
~ Definition 1</p>
<p>Term 2
~ Definition 2a
~ Definition 2b</p>
<h3><a href="https://github.com/markdown-it/markdown-it-abbr">Abbreviations</a></h3>
<p>This is HTML abbreviation example.</p>
<p>It converts &quot;HTML&quot;, but keep intact partial entries like &quot;xxxHTMLyyy&quot; and so on.</p>
<p>*[HTML]: Hyper Text Markup Language</p>
<h3><a href="https://github.com/markdown-it/markdown-it-container">Custom containers</a></h3>
<p>::: warning
<em>here be dragons</em>
:::</p>`
    },

    {
        id: 2,
        title: 'Markdown Static Announcement Example',
        date: "2023-12-01",
        author: 'N. Antwi',
        content: `---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
`
    },

    {
        id: 3,
        title: 'Minimal Markdown Example',
        date: "2023-12-01",
        author: 'N. Antwi',
        content: `<hr>
                <p><strong>Advertisement 😃</strong></p>
                <ul>
                <li><strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong> - high quality and fast image
                resize in browser.</li>
                <li><strong><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong> - developer friendly
                i18n with plurals support and easy syntax.</li>
                </ul>
                <p>You will like those projects!</p>
                <hr>
                <h1>h1 Heading 😎</h1>
                <h2>h2 Heading</h2>
                <h3>h3 Heading</h3>
                <h4>h4 Heading</h4>
                <h5>h5 Heading</h5>
                <h6>h6 Heading</h6>
                <h2>Horizontal Rules</h2>
                <hr>
                <hr>`
    },

    {
        id: 4,
        title: 'Static Announcement #4',
        date: "2023-12-01",
        author: 'N. Antwi',
        content: `<hr>
                <p><strong>Advertisement 😃</strong></p>
                <ul>
                <li><strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong> - high quality and fast image
                resize in browser.</li>
                <li><strong><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong> - developer friendly
                i18n with plurals support and easy syntax.</li>
                </ul>
                <p>You will like those projects!</p>
                <hr>
                <h1>h1 Heading 😎</h1>
                <h2>h2 Heading</h2>
                <h3>h3 Heading</h3>
                <h4>h4 Heading</h4>
                <h5>h5 Heading</h5>
                <h6>h6 Heading</h6>
                <h2>Horizontal Rules</h2>
                <hr>
                <hr>`
    },

    {
        id: 5,
        title: 'Static Announcement #5',
        date: "2023-12-01",
        author: 'N. Antwi',
        content: `<hr>
                <p><strong>Advertisement 😃</strong></p>
                <ul>
                <li><strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong> - high quality and fast image
                resize in browser.</li>
                <li><strong><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong> - developer friendly
                i18n with plurals support and easy syntax.</li>
                </ul>
                <p>You will like those projects!</p>
                <hr>
                <h1>h1 Heading 😎</h1>
                <h2>h2 Heading</h2>
                <h3>h3 Heading</h3>
                <h4>h4 Heading</h4>
                <h5>h5 Heading</h5>
                <h6>h6 Heading</h6>
                <h2>Horizontal Rules</h2>
                <hr>
                <hr>`
    },

    {
        id: 6,
        title: 'Static Announcement #6',
        date: "2023-12-01",
        author: 'N. Antwi',
        content: `<hr>
                <p><strong>Advertisement 😃</strong></p>
                <ul>
                <li><strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong> - high quality and fast image
                resize in browser.</li>
                <li><strong><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong> - developer friendly
                i18n with plurals support and easy syntax.</li>
                </ul>
                <p>You will like those projects!</p>
                <hr>
                <h1>h1 Heading 😎</h1>
                <h2>h2 Heading</h2>
                <h3>h3 Heading</h3>
                <h4>h4 Heading</h4>
                <h5>h5 Heading</h5>
                <h6>h6 Heading</h6>
                <h2>Horizontal Rules</h2>
                <hr>
                <hr>`
    },
];