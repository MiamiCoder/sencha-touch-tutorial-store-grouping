Ext.define('App.store.Products', {
    extend: 'Ext.data.Store',
    config: {
        model: 'App.model.Product',
        remoteSort:false,
        data: [
            { productCode: 'S10_1678', productName: '1969 Harley Davidson Ultimate Chopper', productLine: 'Motorcycles', color:'Red' },
            { productCode: 'S10_1949', productName: '1952 Alpine Renault 1300', productLine: 'Classic Cars', color: 'Silver' },
            { productCode: 'S10_2016', productName: '1996 Moto Guzzi 1100i', productLine: 'Motorcycles', color: 'Silver' },
            { productCode: 'S10_4698', productName: '2003 Harley-Davidson Eagle Drag Bike', productLine: 'Motorcycles', color: 'Silver' },
            { productCode: 'S12_1666', productName: '1958 Setra Bus', productLine: 'Trucks and Buses', color: 'Green' },
            { productCode: 'S10_4757', productName: '1972 Alfa Romeo GTA', productLine: 'Classic Cars', color: 'Red' },
            { productCode: 'S12_4473', productName: '1957 Chevy Pickup', productLine: 'Trucks and Buses', color: 'Brown' },
            { productCode: 'S18_1097', productName: '1940 Ford Pickup Truck', productLine: 'Trucks and Buses', color: 'Red' }
        ],
        grouper: {
            property: 'productLine',
            direction:'ASC'
        },
        sorters: [{
            property: 'productCode',
            direction: 'ASC'
        }]
    }
});