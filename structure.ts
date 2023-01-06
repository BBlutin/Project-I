import Iframe from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/desk'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType }
) => {
    if(schemaType === 'post' || schemaType === 'product') {
        return S.document().views([
            S.view.form(),
            S.view
                .component(Iframe)
                .options({
                    url: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/api/preview`,
                    defaultSize: `desktop`,
                    reload: {
                        button: true, 
                        revision: true,
                    },
                    attributes: {
                        allow: 'fullscreen',
                        referrerPolicy: 'strict-origin-when-cross-origin', 
                        sandbox: 'allow-same-origin' 
                    }
                })
                .title('Preview')
        ])
    }
}
