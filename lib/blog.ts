export interface BlogSection { heading: string; paragraphs: string[] }
export interface BlogFact { label: string; value: string }
export interface BlogPost { slug: string; title: string; date: string; category: string; summary: string; readTime: string; facts: BlogFact[]; sections: BlogSection[] }

export const blogPosts: BlogPost[] = [
  {
    slug: 'security-disclosure-checkout',
    title: 'SQL injection in campaign-code validation during checkout',
    date: '22/05/26',
    category: 'Security notes',
    readTime: '4 min read',
    summary: 'How I confirmed a checkout SQL injection, limited the test, and reported it without exposing customer data.',
    facts: [
      { label: 'Reported', value: '22/05/26' },
      { label: 'Classification', value: 'SQL injection (CWE-89)' },
      { label: 'Affected input', value: 'Campaign-code validation' },
      { label: 'Status', value: 'Patched' },
    ],
    sections: [
      {
        heading: 'Summary',
        paragraphs: [
          'While testing a public membership checkout, I found SQL injection behavior in the campaign-code field. A limited test also showed that the issue could be used to bypass payment during signup.',
          'I stopped once the finding and its impact were clear. The operator is not named here, and I have left out the payload and reproduction details that would make the issue easier to misuse.',
        ],
      },
      {
        heading: 'What I found',
        paragraphs: [
          'The checkout accepted campaign-code input that changed the database query behavior. The finding fits SQL injection, classified as CWE-89.',
          'I did not have access to the application source, so I could not verify how the query was built internally. The report described the behavior I could reproduce from the checkout rather than guessing at the vendor\'s implementation.',
        ],
      },
      {
        heading: 'Testing boundary',
        paragraphs: [
          'I tested only the campaign-code path needed to confirm the issue. No customer data was accessed or changed. I did not run automated scans, test unrelated endpoints, or attempt destructive database operations.',
          'Once I had a repeatable result and understood the payment impact, more testing would only have added risk. It would not have made the report more useful.',
        ],
      },
      {
        heading: 'Impact',
        paragraphs: [
          'The confirmed impact was a payment bypass in the membership checkout. That was enough to make the issue financially relevant without testing whether other database operations or data were reachable.',
          'The public version of this case stays with that observed result. Broader attack scenarios were not tested and are not presented as findings.',
        ],
      },
      {
        heading: 'Disclosure',
        paragraphs: [
          'On 22/05/26, I sent the report to the operator\'s data protection officer and relevant security contacts. It included a description of the issue, limited reproduction steps, the observed payment impact, and the boundaries of my testing.',
          'The affected path was later patched.',
        ],
      },
      {
        heading: 'Recommended fix',
        paragraphs: [
          'The primary fix is to use parameterized queries or prepared statements for every database operation that includes user input. Strict server-side validation of campaign-code formats is useful as an additional control, but it should not replace parameterization.',
          'Generic user-facing errors and internal security logging would also make the checkout safer to operate and easier to monitor.',
        ],
      },
      {
        heading: 'After the report',
        paragraphs: [
          'The biggest lesson was knowing when to stop. Once I could show the issue and its effect, continued testing would have created more risk without helping the operator fix it.',
          'Since then, I start security reviews by looking for places where unauthenticated input reaches a database or affects payment logic. That gives me a clearer test boundary before I begin.',
        ],
      },
    ],
  },
]
