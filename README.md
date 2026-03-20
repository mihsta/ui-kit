# UI Kit

React UI component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @your-scope/ui-kit react react-dom tailwindcss
```

## Usage

### Option 1: Use pre-built CSS

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

### Option 2: Add to Tailwind content (for customization)

In your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@your-scope/ui-kit/dist/**/*.js'
  ],
  // ...
}
```

Then import the base styles or use your own Tailwind setup.

## Components

- **Button** - Primary, secondary, outline, ghost variants
- **Input** - With label and error states
- **Card** - Card, CardHeader, CardContent, CardFooter
- **Modal** - Dialog with overlay
- **Select** - Custom dropdown
- **Checkbox** - With indeterminate state
- **Switch** - Toggle control
- **Tabs** - TabList, Tab, TabPanel
- **Badge** - Status indicators
- **Avatar** - With image and fallback
- **Alert** - Success, warning, error, info
- **Tooltip** - Top, bottom, left, right
- **Textarea** - Multi-line input
- **Radio** - RadioGroup, Radio

## Development

```bash
npm install
npm run build
npm run storybook
```

## Releases

Release flow is documented in `RELEASE.md` (Changesets + GitHub Actions publish pipeline).
