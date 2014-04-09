
var HashSplit = new function () {

    pseudoGet = function (id, value) { // TODO this

        id = document.getElementById(id) ;
        if (id == null )  return  ;

        switch( id.tagName ) {
            case 'INPUT' : // todo checkbox
                id.value = value;
            break
        }
    };
    
    pseudoDir = function (pseudoDir) { // TODO this
        id = document.getElementById(pseudoDir) ;
        if (id == null )  return  ;

        switch( id.tagName ) {
            case 'P' :
            case 'DIV' :
                document.getElementsByClassName('hashtab').visibility = "hidden"; // FIXME // TOD siblings
                id.style.visibility = 'visible';
            break
            case 'INPUT' : // todo checkbox
                id.checked=true
            break
            case 'A' :
                id.click();
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
