import { postBySlugQuery } from '../../lib/queries'
import { previewClient } from '../../lib/sanity.server'

function redirectToPreview(res, Location) {
  res.setDraftMode({ enable: true })
  res.writeHead(307, { Location })
  res.end()
}

export default async function preview(req, res) {
  const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET
  if (!secret && process.env.NODE_ENV === 'production') {
    throw new TypeError(`Missing SANITY_STUDIO_PREVIEW_SECRET`)
  }
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: 'Invalid secret' })
  }
  if (!req.query.slug) {
    return redirectToPreview(res, '/')
  }
  const post = await previewClient.fetch(postBySlugQuery, {
    slug: req.query.slug,
  })
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }
  redirectToPreview(res, `/posts/${post.slug}`)
}
