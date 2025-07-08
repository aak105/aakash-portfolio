
import { Router, Route } from "wouter";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import DataAssets from "./pages/DataAssets";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Route path="/" component={Index} />
    <Route path="/admin" component={Admin} />
    <Route path="/data-assets" component={DataAssets} />
    <Route path="/aakash-portfolio/data-assets" component={DataAssets} />
    <Route component={NotFound} />
  </Router>
);

export default App;
