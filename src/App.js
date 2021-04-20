import './App.css';
import CategoryMenu from './components/CategoryMenu';
import AddRecipeForm from './components/AddRecipeForm';
import RecipesContainer from './components/RecipesContainer';

function App() {
  return (
    <div className="App">
      <CategoryMenu />
      <AddRecipeForm />
      <RecipesContainer />
    </div>
    
  );
}

export default App;
