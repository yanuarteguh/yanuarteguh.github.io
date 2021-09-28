var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SLS_WRINGINANOM010_1 = new ol.format.GeoJSON();
var features_SLS_WRINGINANOM010_1 = format_SLS_WRINGINANOM010_1.readFeatures(json_SLS_WRINGINANOM010_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLS_WRINGINANOM010_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLS_WRINGINANOM010_1.addFeatures(features_SLS_WRINGINANOM010_1);
var lyr_SLS_WRINGINANOM010_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLS_WRINGINANOM010_1, 
                style: style_SLS_WRINGINANOM010_1,
                interactive: true,
                title: '<img src="styles/legend/SLS_WRINGINANOM010_1.png" /> SLS_WRINGINANOM (010)'
            });
var format_BS_WRINGINANOM010_2 = new ol.format.GeoJSON();
var features_BS_WRINGINANOM010_2 = format_BS_WRINGINANOM010_2.readFeatures(json_BS_WRINGINANOM010_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BS_WRINGINANOM010_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BS_WRINGINANOM010_2.addFeatures(features_BS_WRINGINANOM010_2);
var lyr_BS_WRINGINANOM010_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BS_WRINGINANOM010_2, 
                style: style_BS_WRINGINANOM010_2,
                interactive: true,
                title: '<img src="styles/legend/BS_WRINGINANOM010_2.png" /> BS_WRINGINANOM (010)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SLS_WRINGINANOM010_1.setVisible(true);lyr_BS_WRINGINANOM010_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SLS_WRINGINANOM010_1,lyr_BS_WRINGINANOM010_2];
lyr_SLS_WRINGINANOM010_1.set('fieldAliases', {'idsls': 'idsls', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'kddesa': 'kddesa', 'nmdesa': 'nmdesa', 'segmen': 'segmen', });
lyr_BS_WRINGINANOM010_2.set('fieldAliases', {'idbs': 'idbs', 'kdbs': 'kdbs', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'kddesa': 'kddesa', 'nmdesa': 'nmdesa', });
lyr_SLS_WRINGINANOM010_1.set('fieldImages', {'idsls': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'kddesa': 'TextEdit', 'nmdesa': 'TextEdit', 'segmen': 'TextEdit', });
lyr_BS_WRINGINANOM010_2.set('fieldImages', {'idbs': 'TextEdit', 'kdbs': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'kddesa': 'TextEdit', 'nmdesa': 'TextEdit', });
lyr_SLS_WRINGINANOM010_1.set('fieldLabels', {'idsls': 'inline label', 'kdkab': 'inline label', 'kdkec': 'inline label', 'kdsls': 'inline label', 'nmkab': 'inline label', 'nmkec': 'inline label', 'nmsls': 'inline label', 'kddesa': 'inline label', 'nmdesa': 'inline label', 'segmen': 'inline label', });
lyr_BS_WRINGINANOM010_2.set('fieldLabels', {'idbs': 'header label', 'kdbs': 'header label', 'kdkab': 'header label', 'kdkec': 'header label', 'nmkab': 'header label', 'nmkec': 'header label', 'nmsls': 'header label', 'kddesa': 'header label', 'nmdesa': 'header label', });
lyr_BS_WRINGINANOM010_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});