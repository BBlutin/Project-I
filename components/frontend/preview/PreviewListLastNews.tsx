"use client"

import { usePreview } from "../../../lib/sanity.preview"
import ListLastNews from "../news/ListLastNews"

type Props = {
    query: string;
}

function PreviewListLastNews({ query }: Props) {

    const posts = usePreview(null, query)
    return <ListLastNews posts={posts} />
}

export default PreviewListLastNews