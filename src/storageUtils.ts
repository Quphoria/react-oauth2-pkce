// Storage implementation for SSR
// This does nothing, but prevents errors due to localStorage / sessionStorage not being defined
class SSRStorage implements Storage {
  length: number

  constructor() {
    this.length = 0
  }

  clear() {}

  getItem(_key: string): string | null {
    return null
  }

  key(_index: number): string | null {
    return null
  }

  removeItem(_key: string): void {}

  setItem(_key: string, _value: string): void {}
}

export function getStorageImplementation(type: 'session' | 'local'): Storage {
  if (typeof window === 'undefined') {
    return new SSRStorage()
  }
  return type === 'session' ? window.sessionStorage : window.localStorage
}
