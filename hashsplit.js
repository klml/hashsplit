var HashSplit = new function () {

    (hastabber = function( htmlId ) {
        var hashtab = document.getElementsByClassName('hashtab');
        for(var i = 0; i != hashtab.length; ++i) {
            hashtab[i].style.visibility = 'hidden';
        }
        if ( htmlId == undefined) {
            hashtab[0].style.visibility = 'visible'; 
        } else {
            htmlId.style.visibility = 'visible'; // todo not hashtab
        }
    })();

    hashElement = function (getKey, getValue) { // TODO this

        var htmlId = document.getElementById( getKey ) ;
        if (htmlId == null )  return  ;

        switch( htmlId.tagName ) {
            case 'P' :
            case 'DIV' :
                hastabber( htmlId );
            break
            case 'INPUT' :

                if( htmlId.getAttribute('type') == 'checkbox' && getValue == undefined ) {
                    htmlId.checked = true 
                } else {
                    htmlId.checked = (getValue === 'true') ;
                };
                htmlId.value = getValue;
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
   })();

   window.onhashchange = this.hashrouter;

}
