hashsplit
=========

hashsplit is JS plugin to use various values from URL fragment identifier (hash) #foo , #foo/bar or #foo=bar&amp;city=springfield

It uses the values from the hash with DOM-Id in a specific way:

* forms (inputs, selects) are filled (works only with pseudogets `&name=value` or `/name=value` )
  * checkbox get checked on 'true' or any string, but unchecked with 'false' or '' (empty string) only.
* links (`a`) get a click (e.g. you want to link on a page with an active fancybox)

[Demo](http://klml.github.com/hashsplit/)

## usage

```
    <script src="https://cdn.jsdelivr.net/gh/klml/hashsplit@master/hashsplit.js" type="text/javascript"></script>
    <script>
        hashsplit(); // activate hashspilt
        updateHash(); // get changed input values back to hash
    </script>
```

## inspiration

Initial JS from [Cristian Sanchez on stackoverflow.com](http://stackoverflow.com/questions/3729150/retrieve-specific-hash-tags-value-from-url). [accounts.google.com](https://accounts.google.com/SignUpWithoutGmail#FirstName=John&LastName=Doe&EmailAddress=example@example.com) is using the function 'InputHolder.prototype.prefill' doing similar the same as this function 'HashSplit'.

Any ideas for:
* img

## similar usage 

* [formassembly](http://help.formassembly.com/knowledgebase/articles/340353-prefill-through-the-url)
* [jQuery BBQ](http://benalman.com/projects/jquery-bbq-plugin/)
* contactform7 for wordpress [Getting Default Values from the Context](http://contactform7.com/getting-default-values-from-the-context/)
* stackoverflow questions on this:
  * [Pre-fill form field via URL in html](http://stackoverflow.com/questions/14070105/pre-fill-form-field-via-url-in-html)
  * [Prefill form through url](http://stackoverflow.com/questions/29047386/prefill-form-through-url) with this [clientside working form](http://tumblr.followd.co.nz/login.php?email=masterofcoins)

## version

* 1.0
* 3.0 removed tabs, use [CSS :target](//developer.mozilla.org/en-US/docs/Web/CSS/:target)

## todo:

* this
* hooks
* alert
