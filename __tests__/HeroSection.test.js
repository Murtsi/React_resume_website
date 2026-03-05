import { render, screen } from '@testing-library/react';
import HeroSection from '../components/HeroSection';
import { translations } from '../utils/translations';

const t = translations['en'];

describe('HeroSection', () => {
  it('renders the name heading', () => {
    render(<HeroSection t={t} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Antti Murtokangas');
  });

  it('renders subtitle', () => {
    render(<HeroSection t={t} />);
    expect(screen.getByText(t.hero.subtitle)).toBeInTheDocument();
  });

  it('renders Get In Touch CTA link', () => {
    render(<HeroSection t={t} />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders Download CV link', () => {
    render(<HeroSection t={t} />);
    expect(screen.getByText('Download CV')).toBeInTheDocument();
  });

  it('renders social links with aria labels', () => {
    render(<HeroSection t={t} />);
    expect(screen.getByLabelText('Send email to Antti')).toBeInTheDocument();
    expect(screen.getByLabelText('Visit LinkedIn profile')).toBeInTheDocument();
    expect(screen.getByLabelText('Visit GitHub profile')).toBeInTheDocument();
  });
});
