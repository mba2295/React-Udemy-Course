import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h3>Someting wnet wrong</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
