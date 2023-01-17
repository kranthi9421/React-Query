import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import RQsuperHeroes from "./RQSuperHeroes";
import SuperHeroes from "./SuperHeroes";
import RQSuperHero from "./RQSuperHero";
import ParallelQueries from "./ParallelQueries";
import DynamicParallel from "./DynamicParallel";
import DependentQueries from "./DependentQueries";
import PaginatedQueries from "./PaginatedQueries";
import InfiniteQueries from "./InfiniteQueries";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="RQsuperHeroes">RQsuperHeroes</Link>
            </li>
            <li>
              <Link to="SuperHeroes"> Traditional SuperHeroes</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="RQsuperHeroes" element={<RQsuperHeroes />} />
            <Route path="SuperHeroes" element={<SuperHeroes />} />
            <Route path="rq-super-heroes/:heroId" element={<RQSuperHero />} />
            <Route path="rq-parallel" element={<ParallelQueries />} />
            <Route path="rq-paginated" element={<PaginatedQueries />} />
            <Route path="rq-infinite" element={<InfiniteQueries/>} />
            <Route
              path="rq-dynamic-parallel"
              element={<DynamicParallel heroIds={[1, 3]} />}
            />
            <Route
              path="rq-dependent"
              element={<DependentQueries email="kranthi@gmail.com" />}
            />
          </Routes>
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpem={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
};

export default App;
