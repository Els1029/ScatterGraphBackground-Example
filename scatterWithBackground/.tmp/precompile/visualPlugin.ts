import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var scatterWithBackgroundBB85772C6CF74D3F8C26B389403E2C62_DEBUG: IVisualPlugin = {
    name: 'scatterWithBackgroundBB85772C6CF74D3F8C26B389403E2C62_DEBUG',
    displayName: 'scatterWithBackground',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["scatterWithBackgroundBB85772C6CF74D3F8C26B389403E2C62_DEBUG"] = scatterWithBackgroundBB85772C6CF74D3F8C26B389403E2C62_DEBUG;
}

export default scatterWithBackgroundBB85772C6CF74D3F8C26B389403E2C62_DEBUG;