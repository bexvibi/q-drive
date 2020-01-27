var Listeners = {
    contentType: $("[data-module]:first").data('module'),
    init: function () {
        if ($('[data-module]').length > 0) {
            eval("Listeners.setup" + this.contentType + "()");
        } 
    }, 
    setupIndex: function () {}, 

};

