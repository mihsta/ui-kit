# UI Kit

[![CI](https://github.com/mihsta/ui-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/mihsta/ui-kit/actions/workflows/ci.yml)
[![Release](https://github.com/mihsta/ui-kit/actions/workflows/release.yml/badge.svg)](https://github.com/mihsta/ui-kit/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/mihsta/ui-kit)](https://github.com/mihsta/ui-kit/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern React component library built with TypeScript and Tailwind CSS. Accessible, customizable, and ready for production.

## Features

- **TypeScript** — Full type definitions and strict mode
- **Tailwind CSS** — Pre-styled components with optional customization
- **Accessible** — ARIA attributes, keyboard navigation, screen reader support
- **Tree-shakeable** — ESM build, minimal bundle impact
- **React 18 & 19** — Compatible with latest React

## Installation

```bash
npm install @your-scope/ui-kit react react-dom tailwindcss
```

**Peer dependencies:** `react`, `react-dom`, `tailwindcss` (^3.0.0 or ^4.0.0)

## Quick start

```tsx
import '@your-scope/ui-kit/styles.css'
import { Button, Input } from '@your-scope/ui-kit'

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Input label="Email" placeholder="you@example.com" />
    </div>
  )
}
```

### Tailwind customization

Add the package to your Tailwind `content` for full customization:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@your-scope/ui-kit/dist/**/*.js'
  ],
  // ...
}
```

## Components

| Component | Description |
|-----------|-------------|
| **Button** | Primary, secondary, outline, ghost variants |
| **Input** | Text field with label and error states |
| **Textarea** | Multi-line input |
| **Checkbox** | Checkbox with indeterminate state |
| **Switch** | Toggle control |
| **Select** | Custom dropdown |
| **Radio** | RadioGroup, Radio |
| **Card** | Card, CardHeader, CardContent, CardFooter |
| **Modal** | Dialog with overlay |
| **Tabs** | TabList, Tab, TabPanel |
| **Badge** | Status indicators |
| **Avatar** | Image with fallback |
| **Alert** | Success, warning, error, info |
| **Tooltip** | Top, bottom, left, right positioning |

## Development

```bash
npm install
npm run storybook   # Component playground
npm run build       # Build library
npm run test        # Run tests
```

## Links

- [Releases](https://github.com/mihsta/ui-kit/releases)
- [Changelog](CHANGELOG.md)
- [Release process](RELEASE.md)

## License

MIT © [mihsta](https://github.com/mihsta)
