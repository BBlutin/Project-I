export {NextStudioHead} from 'next-sanity/studio/head'

// To customize it, use it as a children component:
import {NextStudioHead} from 'next-sanity/studio/head'

export default function CustomStudioHead() {
  return (
    <>
      <NextStudioHead favicons={false} />
      <title>BLK Studio</title>
      <link
        rel="icon"
        type="image/svg"
        sizes="32x32"
        href="/images/logo.svg"
      />
    </>
  )
}