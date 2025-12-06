import { render, screen } from '@testing-library/react';
import { HeaderNav } from './HeaderNav';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('HeaderNav', () => {
  it('renders navigation', () => {
    render(<HeaderNav />);

    expect(screen.getByText('Sessions')).toBeInTheDocument();
    expect(screen.getByText('My Agenda')).toBeInTheDocument();
  });
});
