import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import { blogPosts } from '@/lib/blog'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)
  return post ? { title: `${post.title} | Antti Murtokangas`, description: post.summary } : {}
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) notFound()

  return (
    <><Nav /><div className="reading-progress" aria-hidden="true"><span /></div><main className="article-page page-width" data-reading-progress-source>
      <Link className="back-link" href="/blog">← All field notes</Link>
      <header className="article-header" data-reveal><p className="eyebrow">{post.date} · {post.category} · {post.readTime}</p><h1>{post.title}</h1><p>{post.summary}</p></header>
      <dl className="article-facts" aria-label="Disclosure summary">{post.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
      <article className="article-body">{post.sections.map((section) => <section key={section.heading} data-reveal><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</article>
      <footer className="article-footer"><Link href="/blog">More field notes</Link><Link href="/">Portfolio home</Link></footer>
    </main></>
  )
}
