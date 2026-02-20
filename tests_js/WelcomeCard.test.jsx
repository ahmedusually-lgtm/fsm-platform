import { render, screen } from '@testing-library/react';
import WelcomeCard from '../ui/WelcomeCard.jsx';

test('renders welcome card with heading', () => {
  render(<WelcomeCard />);
  const heading = screen.getByRole('heading', { name: /welcome to fsm platform/i });
  expect(heading).toBeInTheDocument();
});