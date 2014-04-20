var HashSplit = new function () {

    var hashtabberfirstactive = 0; 
    var hashtabberclass = 'hashtab'; // TODO configbl

    (hashtabber = function( htmlId ) {

        if (typeof htmlId == "undefined") {
            var hashtabs = document.getElementsByClassName( hashtabberclass ) ;

            for(var i = 0; i != hashtabs.length; ++i) {
                hashtabs[i].style.visibility = 'hidden';

                var siblings = hashtabs[i].parentNode.getElementsByClassName( hashtabberclass ) ;
                siblings[hashtabberfirstactive].style.visibility = 'visible';
            }
        } else { // todo not hashtab
            var siblings = htmlId.parentNode.getElementsByClassName( hashtabberclass ) ;

            for(var i = 0; i != siblings.length; ++i) {
                siblings[i].style.visibility = 'hidden';
            }
            htmlId.style.visibility = 'visible'; // TODO not hashtab
        }
    })();

    hashElement = function (getKey, getValue) { // TODO this

        var htmlId = document.getElementById( getKey ) ;
        if (htmlId == null )  return  ;

        switch( htmlId.tagName ) {
            case 'P' :
            case 'DIV' :
                hashtabber( htmlId );
            break
            case 'INPUT' :
                if( htmlId.getAttribute('type') == 'checkbox' ) {
                    htmlId.checked = ( getValue === 'true' || getValue == undefined ) ;
                } else {
                htmlId.value = getValue;
                }
            break
            case 'A' :
                htmlId.click();
            break
        }
    };


   (this.hashrouter = function () {

       var hashStr = window.location.hash, hashPseudoGets, keyVal
       hashStr = hashStr.substring(1, hashStr.length);
       hashPseudoGets = hashStr.split('&');
       hashPseudoDirs = hashStr.split('/');

       for(var i = 0; i < hashPseudoGets.length; i++) {
           keyVal = hashPseudoGets[i].split('=');
           hashElement( unescape(keyVal[0]) , (typeof keyVal[1] != "undefined") ? unescape(keyVal[1]) : keyVal[1] );
       }

       for(var i = 0; i < hashPseudoDirs.length; i++) {
           hashElement( hashPseudoDirs[i] );
       }
       // TODO not twice with singels
   })();

   window.onhashchange = this.hashrouter;

}
