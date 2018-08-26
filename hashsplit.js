function hashsplit() {

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
       hashStr = hashStr.substring(1, hashStr.length); /* remove number sign, hash, or pound sign (#) from fragment identifier */
       hashElements = hashStr.split(/[\/&]+/);         /*  split in array like URL query string (&) or directories (/)  */

       for(var i = 0; i < hashElements.length; i++) {
           hashKeyVal = hashElements[i].split('=');    /* in case like URL query string, split in key value */
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
