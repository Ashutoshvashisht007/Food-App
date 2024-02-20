import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/*
  1. Create a simple web app that displays food recipes
  2. users should be able to login and search for food recipes based om name or the ingredients used.
  3. Once the user selects one of the recipes, transition to a new page hwere you will display images, description, ingredients and the steps related to the recipe.
  4. additionaly a user should be able to sign up, login and add/edit his/her own recipes.
*/


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
