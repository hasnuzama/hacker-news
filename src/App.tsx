import { Redirect, Route, Switch } from "react-router-dom";
import StoriesPage from "./pages/StoriesPage";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/ui/Layout";
import StoryItemPage from "./pages/StoryItemPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/stories/view/:id" exact>
          <StoryItemPage></StoryItemPage>
        </Route>
        <Route path="/users/:name" exact>
          <UserPage></UserPage>
        </Route>
        <Route path="/stories/:type(top|new|best)">
          <StoriesPage></StoriesPage>
        </Route>
        <Route path="/" exact>
          <Redirect to="/stories/top" />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
