sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/odata/v4/ODataModel",
], (BaseController,ODataModel) => {
  "use strict";

  return BaseController.extend("fsguide.controller.App", {
      onInit() {
        var oModel = new ODataModel({
          serviceUrl: "http://localhost:4004/odata/v4/catalog/",
          synchronizationMode: "None",
          operationMode: "Server"
        });
  
        this.getView().setModel(oModel);

        debugger
      }
  });
});