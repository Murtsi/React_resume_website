import { render, screen } from '@testing-library/react';
import SkillCard from '../components/SkillCard';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />
}));

describe('SkillCard Component', () => {
  const mockProps = {
    image: '/test-image.png',
    title: 'Test Skill',
    description: 'Test Description',
    items: ['Item 1', 'Item 2', 'Item 3'],
    isVisible: true
  };

  it('renders skill card with title and description', () => {
    render(<SkillCard {...mockProps} />);
    
    expect(screen.getByText('Test Skill')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders all skill items', () => {
    render(<SkillCard {...mockProps} />);
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('applies visible styles when isVisible is true', () => {
    const { container } = render(<SkillCard {...mockProps} />);
    const card = container.firstChild;
    
    expect(card).toHaveClass('translate-y-0');
  });
});
