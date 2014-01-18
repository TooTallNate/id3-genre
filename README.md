id3-genre
=========
### Map of ID3 "Genre" field names to byte number



Installation
------------

Install with `npm`:

``` bash
$ npm install id3-genre
```


Example
-------

``` js
var genre = require('id3-genre');

// byte number to name (for reading ID3v1)
genre(93);
// "Psychedelic Rock"

genre(107);
// "Booty Bass"

genre(200);
// "Unknown"


// name to byte number (for generating ID3v2)
genre('Hip-Hop');
// 7

// `null` for unknown names
genre('Bad Mamma Jamma');
// null
```


API
---

### genre(String|Number value) → Number|String

If a `Number` is passed in, then the byte number is looked in in the genres table
and the matching `String` genre is returned, or `"Unknown"` if a value &lt; 0 or
&gt; 147. This is useful for reading the ID3v1 __genre__ byte for human display.

If a `String` is passed in, then the genre name is looked up in the genres table,
and the byte number for the given genre is returned, or `null` if an unknown genre
is given. This is useful for getting the byte number when saving ID3v1 tags.


License
-------

(The MIT License)

Copyright (c) 2014 Nathan Rajlich &lt;nathan@tootallnate.net&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[pac-file-docs]: https://web.archive.org/web/20070602031929/http://wp.netscape.com/eng/mozilla/2.0/relnotes/demo/proxy-live.html
[pac-wikipedia]: http://wikipedia.org/wiki/Proxy_auto-config
