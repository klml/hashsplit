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

    hashForm = function( htmlId, hashVal ) {
        if( htmlId.getAttribute('type') == 'checkbox' ) {
            htmlId.checked = ( hashVal === 'true' || hashVal == undefined ) ;
        } else {
        htmlId.value = hashVal;
        }
    };

    hashElement = function (hashKey, hashVal) { // TODO this

        var htmlId = document.getElementById( hashKey ) ;
        if (htmlId == null )  return  ;

        switch( htmlId.tagName ) {
            case 'P' :
            case 'DIV' :
                hashtabber( htmlId );
            break
            case 'INPUT' :
                hashForm( htmlId, hashVal );
            break
            case 'A' :
                htmlId.click();
            break
        }
    };


   (this.hashrouter = function () {

       var hashStr = window.location.hash, hashElements
       hashStr = hashStr.substring(1, hashStr.length);
       hashElements = hashStr.split(/[\/&]+/);

       for(var i = 0; i < hashElements.length; i++) {
           hashKeyVal = hashElements[i].split('=');
           hashElement( hashKeyVal[0] , hashKeyVal[1] );
       }

   })();

   window.onhashchange = this.hashrouter;
}
