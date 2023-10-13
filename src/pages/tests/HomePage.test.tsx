import HomePage from '../../pages/HomePage';
import { render, screen } from '../../test-utils/testing-library-utils';

// component testing
describe('Home Page', () => {
  it('should have a welcome message', () => {
    render(<HomePage />);

    const welcome = screen.getByTestId('welcome-message');
    // 'the slash slash i' removes case sensitivity WElCome ----> welcome
    expect(welcome).toHaveTextContent(/welcome/i);
  });
});
