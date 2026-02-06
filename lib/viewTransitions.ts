// View Transitions API 유틸리티 (네이티브 구현)

export function supportsViewTransitions(): boolean {
  if (typeof document === 'undefined') return false;
  return 'startViewTransition' in document;
}

export function startViewTransition(callback: () => void | Promise<void>): void {
  if (!supportsViewTransitions()) {
    // Graceful degradation for unsupported browsers
    callback();
    return;
  }

  // @ts-ignore - View Transitions API is experimental
  document.startViewTransition(callback);
}

export function transitionHelper(updateCallback: () => void | Promise<void>): void {
  if (!supportsViewTransitions()) {
    updateCallback();
    return;
  }

  // @ts-ignore
  document.startViewTransition(updateCallback);
}
