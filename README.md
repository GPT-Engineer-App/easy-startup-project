# Your New App

Welcome to your new web application! This is a bare-bones structure that you can easily modify and build upon.

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/pages/`: Contains the main pages of your application
- `src/layouts/`: Includes layout components (e.g., navbar)
- `src/components/`: Place for reusable components
- `src/nav-items.jsx`: Central place to define navigation items

## Customizing Your App

1. **Adding New Pages**: 
   - Create a new file in `src/pages/`
   - Add the new page to `src/nav-items.jsx`

2. **Modifying the Layout**:
   - Edit `src/layouts/navbar/index.jsx` to change the overall layout

3. **Styling**:
   - This project uses Tailwind CSS. Modify `src/index.css` for global styles
   - Use Tailwind classes in your components for styling

4. **Adding New Features**:
   - Utilize shadcn components from `@/components/ui/` for consistent UI elements
   - Create new components in `src/components/` for reusable parts of your app

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run lint`: Runs the linter

Happy coding!