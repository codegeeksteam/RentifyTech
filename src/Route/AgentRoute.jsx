import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAgent from "../Hooks/useAgent";
import AgentLoading from "../Components/Agent-Loading/AgentLoading";

const AgentRoute = ({ children }) => {
  const { loading } = useAuth();
 const [isAgent, isAgentLoading] = useAgent();
  const location = useLocation();

  if (loading || isAgentLoading) return <AgentLoading /> ;
  if (isAgent) return children;
  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default AgentRoute;
