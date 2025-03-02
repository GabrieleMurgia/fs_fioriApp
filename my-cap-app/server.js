const cds = require('@sap/cds');
const cors = require('cors');

cds.on('bootstrap', app => {
    console.log("🚀 Avvio del server con middleware personalizzato");

    app.use(cors({
        origin: "http://localhost:8080",
        credentials: true,
        allowedHeaders: [
            'Content-Type', 
            'Authorization', 
            'x-csrf-token', 
            'sap-cancel-on-close', 
            'mime-version', 
            'odata-maxversion',
            'odata-version',   
            'if-match',
            'if-none-match'
        ],
        exposedHeaders: ['x-csrf-token', 'OData-Version'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
    }));

    // 🔥 Middleware per aggiungere OData-Version su TUTTE le risposte
    app.use((req, res, next) => {
        res.setHeader('OData-Version', '4.0');
        console.log(`✅ OData-Version impostata su tutte le risposte`);
        next();
    });

    // 🔥 Gestione delle richieste preflight (CORS OPTIONS)
    app.use((req, res, next) => {
        if (req.method === 'OPTIONS') {
            console.log(`🔍 Preflight request ricevuta da ${req.headers.origin}`);

            res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
            res.header("Access-Control-Allow-Credentials", "true");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers",
                req.headers['access-control-request-headers'] || 
                "Content-Type, Authorization, x-csrf-token, sap-cancel-on-close, mime-version, odata-maxversion, odata-version"
            );
            res.header("Access-Control-Expose-Headers", "x-csrf-token, OData-Version");
            return res.sendStatus(204);
        }
        next();
    });
});

module.exports = cds.server;
