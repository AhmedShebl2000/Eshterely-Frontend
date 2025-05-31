import Button from "@/UI/Button";
import { useNavigate, useRouteError } from "react-router";

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-4">Page Not Found</h2>

        <p className="text-muted-foreground mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <div className="flex gap-4 justify-center border-2 border-yellow-50">
          <Button
            type="secondary"
            width={92}
            onClick={() => navigate(-1)}
            className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
