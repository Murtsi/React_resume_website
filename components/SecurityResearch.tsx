import { securityResearch } from '@/lib/data'
import AgentSecurityTrace from '@/components/AgentSecurityTrace'

export default function SecurityResearch() {
  return (
    <section
      id="security"
      className="section-shell security-section"
      aria-labelledby="security-heading"
    >
      <header className="section-heading">
        <span className="section-kicker" aria-hidden="true">{'// disclosure note'}</span>
        <h2 id="security-heading">Security disclosure</h2>
        <p>One SQL injection finding reported through the operator&apos;s official channel.</p>
      </header>

      <article className="security-note" aria-labelledby="security-case-heading">
        <div>
          <div className="security-case-label">
            CASE NOTE
          </div>

          <h3 id="security-case-heading">
            {securityResearch.title}
          </h3>

          <p className="security-meta">
            {securityResearch.meta}
          </p>
        </div>

        <div className="security-note-body">
          <p>
            {securityResearch.body}
          </p>
        </div>
      </article>

      <AgentSecurityTrace />
    </section>
  )
}
