import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import CardComment from '../CardComment';
import { gsap } from 'gsap';


jest.mock("gsap", () => ({
  timeline: jest.fn(() => ({
    fromTo: jest.fn().mockReturnThis(),
    kill: jest.fn(),
    repeat: jest.fn().mockReturnThis(),
    yoyo: jest.fn().mockReturnThis(),
  })),
  gsap: {
    timeline: jest.fn(() => ({
      fromTo: jest.fn().mockReturnThis(),
      kill: jest.fn(),
      repeat: jest.fn().mockReturnThis(),
      yoyo: jest.fn().mockReturnThis(),
    })),
  },
}));

// Utility function to render with router
const renderWithRouter = (ui:any, { route = '/' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  );
};

describe('CardComment Component', () => {
  const mockProps = {
    webappName: 'Retool',
    description: 'Internal tools platform',
    sourceImage: 'https://example.com/source-logo.png',
    haveStar: true,
    listImageUrlOfPeople: ['https://example.com/user1.jpg', 'https://example.com/user2.jpg'],
    numberpeopleLikes: '42'
  };

  it("triggers GSAP animations", () => {
    renderWithRouter(<CardComment {...mockProps} />);

    // Query border elements
    const borderTop = screen.getByTestId("border-top");
    const borderRight = screen.getByTestId("border-right");
    const borderBottom = screen.getByTestId("border-bottom");
    const borderLeft = screen.getByTestId("border-left");

    expect(borderTop).toBeInTheDocument();
    expect(borderRight).toBeInTheDocument();
    expect(borderBottom).toBeInTheDocument();
    expect(borderLeft).toBeInTheDocument();

    // Verify GSAP.timeline is called
    expect(gsap.timeline).toHaveBeenCalledWith({
      repeat: -1,
      yoyo: true
    });
  });

  it('does not render the star icon if haveStar is false', () => {
    renderWithRouter(<CardComment {...mockProps} haveStar={false} />);
    const starElement = screen.queryByAltText('');
    expect(starElement).not.toBeInTheDocument();
  });

  it('does not render people images if listImageUrlOfPeople is empty', () => {
    renderWithRouter(<CardComment {...mockProps} listImageUrlOfPeople={[]} />);
    const images = screen.queryAllByRole('img', { name: /User/i });
    expect(images.length).toBe(0);
  });

  it('does not render likes if numberpeopleLikes is undefined', () => {
    renderWithRouter(<CardComment {...mockProps} numberpeopleLikes={undefined} />);
    expect(screen.queryByText(/42/i)).not.toBeInTheDocument();
  });

  it('renders the card comment correctly', () => {
    renderWithRouter(<CardComment {...mockProps} />);

    // Check if main elements are rendered
    const webappNameElement = screen.getByText(mockProps.webappName);
    const descriptionElement = screen.getByText(mockProps.description);
    
    expect(webappNameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders star when haveStar is true', () => {
    renderWithRouter(<CardComment {...mockProps} />);
    
    const starElement = screen.getByAltText('');
    expect(starElement).toBeInTheDocument();
    expect(starElement.getAttribute('src')).toBe('https://preview.cruip.com/stellar/images/star.svg');
  });

  it('renders correct number of people likes', () => {
    renderWithRouter(<CardComment {...mockProps} />);
    
    const likesElement = screen.getByText(mockProps.numberpeopleLikes);
    expect(likesElement).toBeInTheDocument();
  });
});