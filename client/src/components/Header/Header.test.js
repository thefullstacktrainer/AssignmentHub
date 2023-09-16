import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('it renders without crashing', () => {
    render(
        <Router>
            <Header isLoggedIn={false} onLogout={() => { }} />
        </Router>
    );
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
});

test('it displays the login and register links when not logged in', () => {
    render(
        <Router>
            <Header isLoggedIn={false} onLogout={() => { }} />
        </Router>
    );
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/register/i)).toBeInTheDocument();
});

test('it displays the assignments and profile links when logged in', () => {
    render(
        <Router>
            <Header isLoggedIn={true} onLogout={() => { }} />
        </Router>
    );
    expect(screen.getByText(/assignments/i)).toBeInTheDocument();
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
});
