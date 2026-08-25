import Link from 'next/link'
import Nav from '@/components/Nav'
import BlogPostLink from '@/components/BlogPostLink'
import { blogPosts } from '@/lib/blog'
export const metadata = { title: 'Blog | Antti Murtokangas', description: 'Notes on cybersecurity, IT, automation, and practical software work.' }
export default function BlogIndex() { return <><Nav /><main className="blog-page page-width"><header className="blog-hero" data-reveal><p className="eyebrow">Field notes</p><h1>Learning in public,<br /><em>one case at a time.</em></h1><p>Notes on cybersecurity, IT, and projects I am working on.</p></header><section className="blog-list" aria-label="Blog posts" data-reveal>{blogPosts.map((post, index) => <BlogPostLink className={`blog-card ${index === 0 ? 'border-beam' : ''}`} href={`/blog/${post.slug}`} key={post.slug}><div><p className="eyebrow">{post.date} · {post.category}</p><h2>{post.title}</h2></div><p>{post.summary}</p><span className="text-link">{post.readTime} <span aria-hidden="true">→</span></span></BlogPostLink>)}</section><footer className="blog-footer"><Link href="/">← Back to portfolio</Link></footer></main></> }
