/* 
Stores - client-side grouping.
*/

var loopsCounter = 0;

Ext.application({
    name: 'App',
    models: ['Product'],
    stores: ['Products'], 
    launch: function () {

        // Use the getStore function to get a reference to a store added via the stores config.
        var productsStore = Ext.getStore('Products');

        productsStore.on({
            load: this.onStoreLoad
        });

        productsStore.load();

        productsStore.setGrouper({
            property: 'color',
            direction: 'DESC'
        });

        // You have to reload for the new grouper to take effect.
        productsStore.load();

        productsStore.setGroupField('productLine');
        productsStore.setGroupDir('DESC');
        productsStore.load();

        productsStore.setGrouper({
            groupFn: function (record) {
                return record.get('productName').substring(0,2);
            },
            sortProperty: 'productName'
        });

        productsStore.load();
    },

    onStoreLoad: function (store, records) {

        var grouper = store.getGrouper();

        if (loopsCounter < 3) {

            console.log('Records grouped by ' + grouper.getProperty() + ' ' + grouper.getDirection() + ':');
            store.each(function (record) {
                console.log('- ' + record.get(grouper.getProperty()) + ' - ' + record.get('productName'));
            });
        } else {
            console.log('Records grouped by first two chars of productName ' + grouper.getDirection() + ':');
            store.each(function (record) {
                console.log('- ' + record.get('productName'));
            });
        }

        loopsCounter++;
    }
});      