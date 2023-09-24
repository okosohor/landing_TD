import React from 'react';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  const navigationLinks = ['O projekcie', 'O spółce', 'Opinie', 'Dla inwestorów', 'Jak zacząć?'];

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <ul className="navigation__list">
          {navigationLinks.map(row => (
            <li className="navigation__row" key={row}>
              <a href="/" className="navigation__link">{row}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
