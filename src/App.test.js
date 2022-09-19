import {render} from '@testing-library/react';
import App from './App';

test('renders App.js', () => {
    const {container} = render(<App />);
    expect(container).toBeDefined();
});
