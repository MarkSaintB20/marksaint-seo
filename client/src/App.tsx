import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import CasesPage from "./pages/CasesPage";
import Case361Sport from "./pages/cases/Case361Sport";
import CaseEspacoMind from "./pages/cases/CaseEspacoMind";
import CasePLMX from "./pages/cases/CasePLMX";
import CaseManginiRusso from "./pages/cases/CaseManginiRusso";
import CaseB20 from "./pages/cases/CaseB20";
import BlogPage from "./pages/BlogPage";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sobre"} component={Sobre} />
      <Route path={"/cases"} component={CasesPage} />
      <Route path={"/cases/361-sport"} component={Case361Sport} />
      <Route path={"/cases/espaco-mind"} component={CaseEspacoMind} />
      <Route path={"/cases/plmx"} component={CasePLMX} />
      <Route path={"/cases/mangini-russo-advogados"} component={CaseManginiRusso} />
      <Route path={"/cases/b20-conteudo-digital"} component={CaseB20} />
      <Route path={"/blog"} component={BlogPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
