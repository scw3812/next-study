import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Header';

describe('Header', () => {
  it('renders buttons', () => {
    const { container } = render(<Header />);

    const homeButton = screen.getByText('Home');
    const aboutButton = screen.getByText('About');

    expect(homeButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
