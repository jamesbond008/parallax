import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[RsiMaze ErrorBoundary]:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="w-full p-6 rounded-2xl bg-[#141415] border border-[#ef4444]/40 text-center flex flex-col items-center justify-center my-4">
          <div className="w-10 h-10 rounded-xl bg-[#ef4444]/15 flex items-center justify-center text-[#ef4444] mb-3">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-[#fafaf9]">
            Simulation Encountered a State Discrepancy
          </h4>
          <p className="text-xs text-[#a8a29e] mt-1 max-w-md font-mono">
            {this.state.error?.message || 'Recoverable canvas or solver cycle failure.'}
          </p>
          <button
            onClick={this.handleReset}
            className="mt-4 px-4 py-2 rounded-xl bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0a0a0b] text-xs font-bold font-mono transition-all flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Sandbox State
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
