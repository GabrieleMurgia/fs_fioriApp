sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fsguide.controller.View2", {
        onInit() {
            var oRouter = this.getOwnerComponent().getRouter();
            
            // Controlliamo che il router sia inizializzato prima di agganciare l'evento
            if (oRouter) {
                oRouter.getRoute("RouteView2") // 🛠 Nome corretto della route!
                    .attachPatternMatched(this._onPatternMatched, this);
            } else {
                console.error("Router non disponibile in View2.controller.js");
            }

        },
        _onPatternMatched: function(oEvent) {
          var sId = oEvent.getParameter("arguments").id;
          // Usa sId per binding
          debugger
        },
        onConfirm(e){
            // Ottieni il router dal Component
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView1");

            
            var oModelT = sap.ui.getCore().getModel("global");
            var oModelY = this.getOwnerComponent().getModel("global");

            debugger
       }

    });
});