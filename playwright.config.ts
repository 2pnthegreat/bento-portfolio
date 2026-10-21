import { defineConfig, devices } from '@playwright/test';

const PORT = 3000;
const isCI = !!process.env.CI;

export default defineConfig({
    // All end-to-end tests live in e2e/
    testDir: './e2e',

    // Fail the CI run if someone leaves a test.only behind
    forbidOnly: isCI,
    // Retry once on CI to absorb rare timing flakes; never locally, so real failures show up
    retries: isCI ? 1 : 0,

    // "list" prints each test in the terminal; "html" builds a clickable report in playwright-report/
    reporter: isCI ? [['list'], ['html', { open: 'never' }]] : [['list'], ['html', { open: 'on-failure' }]],

    use: {
        baseURL: `http://localhost:${PORT}`,
        // The site animates a lot; reduced motion makes it render its final state right away,
        // so tests check content instead of waiting on animations
        reducedMotion: 'reduce',
        // Keep a trace (screenshots + DOM snapshots + network) when a test fails on retry
        trace: 'on-first-retry',
    },

    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    ],

    // Build and start the real production site before the tests run.
    // Locally, an already running server on the same port is reused.
    webServer: {
        command: `npm run build && npm run start -- --port ${PORT}`,
        url: `http://localhost:${PORT}`,
        reuseExistingServer: !isCI,
        timeout: 180_000,
    },
});
