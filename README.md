hashsplit
=========

hashsplit is JS plugin to use various values from URL fragment identifier (hash) #foo , #foo/bar or #foo=bar&amp;city=springfield

It uses the values from the hash with DOM-Id in a specific way:

* elements with the class `hashtab` are shown and all siblings are hidden
* links (`a`) get a click (e.g. you want to link on a page with an active fancybox)
* forms are filled (works only with pseudogets `&name=value` )

[Demo](http://klml.github.com/hashsplit/)

Any ideas for:
* img?

Initial JS from [Cristian Sanchez on stackoverflow.com](http://stackoverflow.com/questions/3729150/retrieve-specific-hash-tags-value-from-url) and extended from [jquery version](https://github.com/klml/usefulclassroomphrases).

Similar:

* [jQuery BBQ](http://benalman.com/projects/jquery-bbq-plugin/)


todo:
* hastabber sibbling
* this
* hooks
* alert
* checkbox no
