( function($) {

function oxygenKeyDownSwitcher(event) {
    switch (String.fromCharCode(event.which).toLowerCase()) {
        // Save Button
        case 's':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.savePage();
            break;

        // General Functions
        case 'z':
            event.preventDefault();
            let confirmation = confirm( 'Are you sure?' );
            if ( confirmation == true ) {
                angular.element('#ct-controller-ui').scope().iframeScope.removeActiveComponent();
            }
            break;

        case 'd':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.duplicateComponent();
            break;
           
        // Edit text block (instead of double-click)
        case 't':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().enableContentEdit(angular.element('#ct-controller-ui').scope().iframeScope.getActiveComponent());
            break;

        // Common Blocks & Imagery
        case '1':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.addComponent('ct_section');
            break;
        case '2':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.addComponent('ct_div_block');
            break;
        case '3':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.addComponent('ct_new_columns');
            break;
        case '4':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.addComponent('ct_fancy_icon');
            break;
        case '5':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.addComponent('ct_image');
            break;
        case '6':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.addComponent('ct_video');
            break;

        // Common Text & Links
        case 'q':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.addComponent('ct_headline');
            break;
        case 'w':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.addComponent('ct_text_block');
            break;
        case 'e':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.addComponent('ct_link_text');
            break;
        case 'r':
            event.preventDefault();
            angular.element('#ct-controller-ui').scope().iframeScope.addComponent('ct_link_button');
            break;
    }
}

$(window).bind('keydown', function(event) {
    if ( (event.ctrlKey || event.metaKey) && event.altKey) {
        oxygenKeyDownSwitcher(event);
    }
});

$(document).ready(function(){
    $("#ct-artificial-viewport").load(function(){
        $(this).contents().bind('keydown', function(event) {
            if ( (event.ctrlKey || event.metaKey) && event.altKey ) {
                oxygenKeyDownSwitcher(event);
            }
        });
    });
});

})( jQuery );
