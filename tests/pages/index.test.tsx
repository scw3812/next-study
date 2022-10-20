import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/index';

describe('Home', () => {
  it('renders a home text', () => {
    const { container } = render(<Home />);

    const homeTextElements = screen.getAllByText('Home');

    homeTextElements.forEach((el) => expect(el).toBeInTheDocument());

    expect(container).toMatchSnapshot();
  });
});
