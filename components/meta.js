import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/icon.webp"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/icon.webp"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/icon.webp" />
      <meta name='robots' content='noindex' />
      <meta name='googlebot' content='noindex' />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name='title' content="Jake and Reagan's Wedding Website" />
      <title>Jake and Reagan's Wedding Website</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    </Head>
  )
}
