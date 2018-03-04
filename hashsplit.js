function hashsplit() {

    function hashtabber ( htmlId ) {

        var hashtabberfirstactive = 0;
        var hashtabberclass = 'hashtab'; // TODO configbl

        if (typeof htmlId == "undefined") {
            var hashtabs = document.getElementsByClassName( hashtabberclass ) ;

            for(var i = 0; i != hashtabs.length; ++i) {
                hashtabs[i].style.visibility = 'hidden';
                hashtabs[i].style.position = 'absolute';

                var siblings = hashtabs[i].parentNode.getElementsByClassName( hashtabberclass ) ;
                siblings[hashtabberfirstactive].style.visibility = 'visible';
            }
        } else { // todo not hashtab
            var siblings = htmlId.parentNode.getElementsByClassName( hashtabberclass ) ;

            for(var i = 0; i != siblings.length; ++i) {
                siblings[i].style.visibility = 'hidden';
                siblings[i].style.position = 'absolute';
            }
            htmlId.style.visibility = 'visible'; // TODO not hashtab
        }
    };

    function hashForm ( htmlId, hashVal ) {
        if( htmlId.getAttribute('type') == 'checkbox' ) {
            // check checkbox on 'true' or any string, but uncheck with 'false' and '' (empty string) only
            htmlId.checked = !( hashVal === 'false' || hashVal == '' ) ;
        } else {
        if( typeof hashVal == "undefined") return ;	
            htmlId.value = hashVal ;
        }
    };

    function hashElement (hashKey, hashVal) { // TODO this

        var htmlId = document.getElementById( hashKey ) ;
        if (htmlId == null )  return  ;

        switch( htmlId.tagName ) {
            case 'P' :
            case 'DIV' :
                hashtabber( htmlId );
            break
            case 'INPUT' :
            case 'SELECT' :
                hashForm( htmlId, hashVal );
            break
            case 'A' :
                htmlId.click();
            break
        }
    };

    (function hashrouter () {
       var hashStr = decodeURIComponent(window.location.hash), hashElements
       hashStr = hashStr.substring(1, hashStr.length);
       hashElements = hashStr.split(/[\/&]+/);
    
       for(var i = 0; i < hashElements.length; i++) {
           hashKeyVal = hashElements[i].split('=');
           hashElement( hashKeyVal[0] , hashKeyVal[1] );
       }
    })();

}
window.onhashchange = hashsplit;

function updateHash () {

    var allInputs = Array.prototype.slice.call( document.getElementsByTagName("input") ) ;
    var allSelect = Array.prototype.slice.call( document.getElementsByTagName("select") ) ;
    var allFormfields = allInputs.concat( allSelect );

    buildHash = function () {
        var newhash = "#" ;

        for(var i = 0; i < allFormfields.length; i++) {
            if (i != 0 ) newhash += "&" ; // add leading "&" on 2 key-value, avoid "&" at the end

            if( allFormfields[i].getAttribute('type') == 'checkbox' ) {
                newhashvalue = allFormfields[i].checked ;
            } else {
                newhashvalue = allFormfields[i].value ;
            }
            newhash += allFormfields[i].id + "=" +  newhashvalue ;
        }
        window.location.hash = newhash;
    };

    for(var i = 0; i < allFormfields.length; i++) {
        allFormfields[i].onblur = function(){ buildHash() };
    }
}
