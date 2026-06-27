import { Route, Switch, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import Home from '@/pages/Home';
import Engineering from '@/pages/Engineering';
import Videography from '@/pages/Videography';
import Leadership from '@/pages/Leadership';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/not-found';
import { Nav } from '@/components/Nav';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/engineering" component={Engineering} />
      <Route path="/videography" component={Videography} />
      <Route path="/leadership" component={Leadership} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Nav />
          <div className="pt-20">
            <Router />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
