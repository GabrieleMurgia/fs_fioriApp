sap.ui.define([
    "sap/ui/core/UIComponent",
    "fsguide/model/models",
    "sap/ui/model/odata/v4/ODataModel",
], (UIComponent, models,ODataModel) => {
    "use strict";

    return UIComponent.extend("fsguide.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            //Global models:
            var oGlobalModel = new sap.ui.model.json.JSONModel({
                utente: { nome: "Mario", loggato: true },
                impostazioni: { tema: "dark" }
            });

            // Opzione A: set globale su Core
            sap.ui.getCore().setModel(oGlobalModel, "global");
            
            // Opzione B: set come default model del component
            this.setModel(oGlobalModel, "global");

            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

            var oModel = new ODataModel({
                serviceUrl: "http://localhost:4004/odata/v4/catalog/",
                synchronizationMode: "None",
                operationMode: "Server"
            });
        
            // Assicurati che il modello sia associato al core dell'app
            sap.ui.getCore().setModel(oModel); 
        
        }
    });
});