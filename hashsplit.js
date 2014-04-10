var HashSplit = new function () {

    pseudoGet = function (getKey, getValue) { // TODO this
        htmlId = document.getElementById( getKey ) ;
        if (htmlId == null )  return  ;

        switch( htmlId.tagName ) {
            case 'INPUT' : // todo check checkbox
                htmlId.value = getValue;
            break
        }
    };
    
    pseudoDir = function (pseudoDir) { // TODO this
        htmlId = document.getElementById(pseudoDir) ;
        if (htmlId == null )  return  ;


        switch( htmlId.tagName ) {
            case 'P' :
            case 'DIV' :
                var hashtab = document.getElementsByClassName('hashtab');
                for(var i = 0; i != hashtab.length; ++i) {
                    hashtab[i].style.visibility = "hidden";
                }

                htmlId.style.visibility = 'visible';
            break
            case 'INPUT' :
                if( htmlId.getAttribute('type') == 'checkbox')  htmlId.checked=true
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
           pseudoGet( unescape(keyVal[0]) , (typeof keyVal[1] != "undefined") ? unescape(keyVal[1]) : keyVal[1] );
       }

       for(var i = 0; i < hashPseudoDirs.length; i++) {
           pseudoDir( hashPseudoDirs[i] );
       }


   })();

   window.onhashchange = this.hashrouter;

}
