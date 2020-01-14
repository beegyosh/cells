import {shapes} from 'jointjs'
import {
    PortsConfig,
    WhiteRect,
    IconToUnicode,
    DarkIcon,
    Orange, SimpleIconMarkup, Blue, BlueRect, LightIcon
} from "../graph/Configs";


class QueryOutput extends shapes.devs.Model{

    constructor(icon){

        const size = {width: 40, height: 40};

        super({
            size: { ...size},
            inPorts: ['input'],
            markup: SimpleIconMarkup,
            attrs: {
                rect: { ...size, ...BlueRect},
                icon: { text: IconToUnicode(icon), ...LightIcon, fill:"white", magnet: false},
            },
            ports: PortsConfig
        });


    }

}

export default QueryOutput