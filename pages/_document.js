import React from 'react'
import Document,{Head,Html,Main,NextScript} from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head> 
                <link ref="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                </Head>
                <body>
                 <Main/>
                 <NextScript/>
                </body>
            </Html>
        )
    }
}