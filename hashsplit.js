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
            // check checkbox on 'true' or any string, but uncheck with 'false' and '' (empty string) only
            htmlId.checked = !( hashVal === 'false' || hashVal == '' ) ;
        } else {
        if( typeof hashVal == "undefined") return ;	
            htmlId.value = hashVal ;
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

var updateHash = new function () {

    var allInputs = document.getElementsByTagName("input");

    buildHash = function () {
        var newhash = "#" ;

        for(var i = 0; i < allInputs.length; i++) {
            if (i != 0 ) newhash += "&" ; // add leading "&" on 2 key-value, avoid "&" at the end

            if( allInputs[i].getAttribute('type') == 'checkbox' ) {
                newhashvalue = allInputs[i].checked ;
            } else {
                newhashvalue = allInputs[i].value ;
            }
            newhash += allInputs[i].id + "=" +  newhashvalue ;
        }
        window.location.hash = newhash;
    };

    for(var i = 0; i < allInputs.length; i++) {
        allInputs[i].onblur = function(){ buildHash() };
    }
}
