# AGENTS.md

## Cursor Cloud specific instructions

This is a React UI component library (`@your-scope/ui-kit`) built with TypeScript, Tailwind CSS, and Vite. There are no backend services, databases, or external APIs.

### Key commands

All standard dev commands are in `package.json` scripts. Reference the README `Development` section for the canonical list:

- **Lint:** `npm run lint`
- **Test:** `npm run test` (Vitest, 5 test files / 10 tests)
- **Build:** `npm run build` (TypeScript → Vite library build → Tailwind CSS)
- **Storybook:** `npm run storybook` (dev server on port 6006, `--no-open` flag already set)

### Non-obvious notes

- ESLint uses flat config (`eslint.config.js`) with `--ext ts,tsx` and `--max-warnings 0`. Any warning will cause lint to fail.
- The `build` script chains three steps: `tsc && vite build && npm run build:css`. A TypeScript error will block the Vite build.
- Storybook runs on port **6006**. The `--no-open` flag is already configured in `package.json`, so it won't try to open a browser.
- Test files live alongside components (e.g. `src/components/Button/Button.test.tsx`). Not all components have tests yet—only Button, Checkbox, Input, Modal, and Select.
