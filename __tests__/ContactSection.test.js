import { render, screen } from '@testing-library/react';
import ContactSection from '../components/ContactSection';
import { translations } from '../utils/translations';

const t = translations['en'];

describe('ContactSection', () => {
  it('renders the section heading', () => {
    render(<ContactSection t={t} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent("Let's Work Together");
  });

  it('renders email contact link', () => {
    render(<ContactSection t={t} />);
    expect(screen.getByLabelText('Send email to Antti')).toBeInTheDocument();
  });

  it('renders LinkedIn contact link', () => {
    render(<ContactSection t={t} />);
    expect(screen.getByLabelText('Visit LinkedIn profile')).toBeInTheDocument();
  });

  it('renders GitHub contact link', () => {
    render(<ContactSection t={t} />);
    expect(screen.getByLabelText('Visit GitHub profile')).toBeInTheDocument();
  });

  it('renders the Send Me an Email button', () => {
    render(<ContactSection t={t} />);
    expect(screen.getByText('Send Me an Email')).toBeInTheDocument();
  });

  it('has correct section id for navigation', () => {
    const { container } = render(<ContactSection t={t} />);
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });
});
