import React, { useEffect } from "react";
import { About } from "./about/about.container";
import { Landing } from "./landing/landing.container";
import { Portfolio } from "./portfolio/portfolio.container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AllBlogPosts, BlogContainer } from "./blog/blog.container";
import { QueryClient, QueryClientProvider } from "react-query";
import { BlogPost } from "./blog/blogPost";

export const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
      const anchorEl = document.getElementById(anchor);
      if (anchorEl) {
        anchorEl.scrollIntoView();
      }
    }
  }, [window.location]);

  return (
    <div className="font-heebo text-gray-700">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route exact path="/blog">
              <BlogContainer>
                <AllBlogPosts />
              </BlogContainer>
            </Route>
            <Route path="/blog/:id">
              <BlogContainer>
                <BlogPost />
              </BlogContainer>
            </Route>
            <Route path="/">
              <div className="w-full relative">
                <div className="z-10 flex flex-col items-center justify-center">
                  <Landing />
                  <Portfolio />
                  <About />
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  );
};
