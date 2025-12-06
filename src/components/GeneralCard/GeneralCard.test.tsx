import { render, screen } from '@testing-library/react';
import { GeneralCard } from './GeneralCard';

describe('GeneralCard', () => {
  it('renders card with children', () => {
    render(
      <GeneralCard>
        <div>React Best Practices</div>
        <div>John Doe</div>
      </GeneralCard>
    );

    expect(screen.getByText('React Best Practices')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
