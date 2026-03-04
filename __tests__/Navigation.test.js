import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';

describe('Navigation Component', () => {
  it('renders navigation links', () => {
    const mockSetDarkMode = jest.fn();
    render(<Navigation darkMode={true} setDarkMode={mockSetDarkMode} />);

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('toggles dark mode on button click', () => {
    const mockSetDarkMode = jest.fn();
    render(<Navigation darkMode={true} setDarkMode={mockSetDarkMode} />);

    const darkModeButton = screen.getByLabelText(/switch to light mode/i);
    darkModeButton.click();

    expect(mockSetDarkMode).toHaveBeenCalled();
  });
});
