import { render, screen } from '@testing-library/react';
import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  it('renders search input', () => {
    render(<SearchInput value="" onChange={() => {}} />);

    expect(screen.getByPlaceholderText('Search event')).toBeInTheDocument();
  });
});
