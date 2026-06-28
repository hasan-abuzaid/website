import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
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
import { Footer } from '@/components/Footer';

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/engineering" component={Engineering} />
          <Route path="/videography" component={Videography} />
          <Route path="/leadership" component={Leadership} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div className="flex min-h-[100dvh] flex-col">
            <Nav />
            <main className="flex-1 pt-20">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
