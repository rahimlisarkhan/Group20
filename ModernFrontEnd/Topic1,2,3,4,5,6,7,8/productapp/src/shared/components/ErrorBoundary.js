import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // slack.log(this.props.name, error);
    // console.log(this.props.name, error);
    // console.log("errorInfo", error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UIX
      return <p>Something went wrong.</p>;
    }

    return this.props.children;
  }
}
