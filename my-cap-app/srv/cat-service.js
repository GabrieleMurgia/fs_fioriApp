const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const { Books } = this.entities;

    this.on('INSERT', Books, async (req) => {
        debugger
        if (!req.data.title) {
            req.error(400, 'Title is required!!');
        }
        return await INSERT.into(Books).entries(req.data);
    });
});
