// Daniel Decoito
// 3-17-23
// Recreate a social media dashboard to specifications, post on github and azure
// Reviews: Really clean! Great Job! I love the use of Tailwind in this project, as well as breaking everything down into components. The responsiveness on the site is fantastic. And you did a good job of following the style guide. And the code is crazy-clean and easy to read. It was really cool to see how you wrote your code. Rock solid implementation of props to handle passing through variables to the components. I can tell you understand everything important we need to know for this assignment and more. The added drop shadow wasn’t in the prototype, but I think it makes the site look even better. The only critiques I have are tiny nitpicks that are easy to overlook. The Likes/Page View numbers on the bottom cards should have a font-weight of 700 to be bold. The dark mode toggle should have a hover state on light mode so that the color gradient background shows up. The cards should have a hover state change the mouse cursor to a pointer; you can do that by adding “cursor: pointer” in the “:hover” style. Also keep track of the which words/letters use caps. Also the top color lines on the top cards have a tapered, hooked edge in a way that the prototype doesn’t. In order to fix that, make sure the width of the border on the top is the same number of pixels as the radius of those corners. Those are just nitpicks though and aren’t that big of a deal/are easy fixes. The only thing I would for sure do is limit the width of the website so that it’s a max of around 1100px like in the prototype. Other than that, great job Dan!



import './App.css';
import MainComponent from './components/mainComponent/mainComponent';

function App() {
  return (
    <div className='dark:bg-very-dark-blue'>
      <MainComponent /> 
    </div>
  );
}

export default App;
