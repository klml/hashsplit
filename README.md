hashsplit
=========

hashsplit is JS plugin to use various values from URL fragment identifier (hash) #foo , #foo/bar or #foo=bar&amp;city=springfield

It uses the values from the hash with DOM-Id in a specific way:

* elements with the class `hashtab` are shown and all siblings are hidden
* links (`a`) get a click (e.g. you want to link on a page with an active fancybox)
* forms are filled (works only with pseudogets `&name=value` or `/name=value` )
  * checkbox get checked on 'true' or any string, but unchecked with 'false' or '' (empty string) only.

[Demo](http://klml.github.com/hashsplit/)

Any ideas for:
* img?

Initial JS from [Cristian Sanchez on stackoverflow.com](http://stackoverflow.com/questions/3729150/retrieve-specific-hash-tags-value-from-url) and extended from [jquery version](https://github.com/klml/usefulclassroomphrases).

## similar usage 

* [formassembly](http://help.formassembly.com/knowledgebase/articles/340353-prefill-through-the-url)
* [jQuery BBQ](http://benalman.com/projects/jquery-bbq-plugin/)
* contactform7 for wordpress [Getting Default Values from the Context](http://contactform7.com/getting-default-values-from-the-context/)
* stackoverflow questions on this:
  * [Pre-fill form field via URL in html](http://stackoverflow.com/questions/14070105/pre-fill-form-field-via-url-in-html)
  * [Prefill form through url](http://stackoverflow.com/questions/29047386/prefill-form-through-url) with this [clientside working form](http://tumblr.followd.co.nz/login.php?email=masterofcoins)



## todo:

* hashtabber sibbling
* this
* hooks
* alert
