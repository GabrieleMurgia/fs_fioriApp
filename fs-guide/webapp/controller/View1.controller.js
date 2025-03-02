sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel",
], (Controller,ODataModel) => {
    "use strict";

    return Controller.extend("fsguide.controller.View1", {
        onInit() {

        },
        onConfirm(e){
             // Ottieni il router dal Component
             let oRouter = this.getOwnerComponent().getRouter();
             oRouter.navTo("RouteView2",{id: "123"});
             
             var oModelT = sap.ui.getCore().getModel("global");
             var oModelY = this.getOwnerComponent().getModel("global");

             debugger
        },
        onSaveBook: function() {
            let oView = this.getView();
            let oModel = oView.getModel();
        
            if (!oModel) {
                console.error("❌ ODataModel non è stato trovato!");
                return;
            }
        
            // Prendi il binding della tabella
            let oTable = oView.byId("booksTable");
            let oBinding = oTable.getBinding("items");
        
            if (!oBinding) {
                console.error("❌ Il binding della tabella non è stato trovato!");
                return;
            }
        
            let oNewBook = {
                ID: this._generateUUID(), 
                title: oView.byId("inputTitle").getValue(),
                stock: parseInt(oView.byId("inputStock").getValue(), 10)
            };
        

            oBinding.create(oNewBook)
                .then(() => {
                    sap.m.MessageToast.show("✅ Libro aggiunto con successo!");
                })
                .catch(err => {
                    console.error("❌ Errore nell'aggiunta del libro:", err);
                    sap.m.MessageToast.show("Errore nell'aggiunta del libro.");
                });
        },
        
        // Genera un UUID valido
        _generateUUID: function() {
            return crypto.randomUUID();
        },
        onFilterBooks: function() {
            let oTable = this.getView().byId("booksTable");
            let oBinding = oTable.getBinding("items");

            debugger
        
            let oFilter = new sap.ui.model.Filter("stock", "GT", 10);
            oBinding.filter([oFilter]);  // 🔥 Applica il filtro su stock > 10
        }
    });
});