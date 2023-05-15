import {View, ScrollView} from 'react-native';
import { WebView } from 'react-native-webview';
import estilo from './estilo';

export default function Series() {

return (
    <WebView
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled
            style={{ height: 500, width: 300 }}
            // source={{
            //     html: `
            //         <!DOCTYPE html>
            //         <html>
            //             <head>
            //                 <meta charset="UTF-8">
            //                 <meta http-equiv="X-UA-Compatible" content="IE=edge">
            //                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
            //             </head> // <--add header styles if needed
            //             <body>
            //             <div>
            //             <iframe name=Player "" src="https://sinalpublico.com/player3/ch.php?canal=tnt" frameborder=0 height=400 scrolling=no width=640 allowFullScreen> </iframe>
            //             </div>
            //             </body>
            //             </html>
            //             `,
            //         }}
            automaticallyAdjustContentInsets={false} 
            originWhitelist={['*']}
            source={{ html: '<h1><center>Hello world</center></h1>' }}
    />
    );
}
{/* <div id="baseDiv">${iframeString}</div> //<--- add your iframe here */}
