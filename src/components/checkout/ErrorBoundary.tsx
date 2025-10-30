import React from 'react'

type State = { hasError: boolean; error?: any }
export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { hasError: false }
  static getDerivedStateFromError(error: any) { return { hasError: true, error } }
  componentDidCatch(error: any, info: any) { console.error('UI ErrorBoundary:', error, info) }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, color: '#b91c1c' }}>
          <h2>Ups, algo falló al renderizar.</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
