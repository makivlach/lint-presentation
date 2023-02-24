import React from 'react';
import {Route, Routes, Router } from 'react-router-dom';
import {AppLayout} from "./components/layout/AppLayout";
import {routes} from "./constants";
import {HomePage} from "./pages/Home";
import {ExhaustiveDependencies} from "./pages/ExhaustiveDependencies";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path={routes.HomePage} element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path={routes.ExhaustiveDependencies} element={<ExhaustiveDependencies />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/*<Route path="*" element={<NoMatch />} />*/}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
