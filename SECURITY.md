# Security Policy

## Token Handling — The Most Important Thing to Understand

Contribution Painter is a **fully static frontend application**. There is no backend server,
no database, no analytics pipeline, and no telemetry of any kind associated with this project.

When you enter your GitHub token into the tool and click **Apply to GitHub**, that token is used
by JavaScript running **inside your own browser** to make API requests directly to
`https://api.github.com`. The token travels only between your browser and GitHub's servers.

**This project never sees your token. It cannot. There is no server to receive it.**

You can verify this yourself at any time:

1. Open your browser's **DevTools** (F12 or Cmd+Option+I on Mac).
2. Go to the **Network** tab.
3. Run a push operation.
4. Inspect every outgoing request.

You will find requests going exclusively to `api.github.com`. No requests go to any
domain controlled by this project, no requests go to any analytics or logging service,
and your token does not appear in any URL or parameter sent anywhere other than GitHub.

### What the token is used for

GitHub's REST API requires authentication to perform write operations on a repository.
Specifically, the tool uses your token to call the following GitHub API endpoints:

- `GET /repos/{owner}/{repo}` — verify the repository exists
- `GET /repos/{owner}/{repo}/git/ref/heads/{branch}` — read the current branch ref
- `GET /repos/{owner}/{repo}/git/commits/{sha}` — read the base commit tree
- `POST /repos/{owner}/{repo}/git/blobs` — create a file blob
- `POST /repos/{owner}/{repo}/git/trees` — create git trees
- `POST /repos/{owner}/{repo}/git/commits` — create backdated commits
- `PATCH /repos/{owner}/{repo}/git/refs/heads/{branch}` — update the branch ref
- `POST /repos/{owner}/{repo}/git/refs` — create a new branch ref if needed

All of these are standard GitHub Git Data API calls. None of them expose or transmit your
token to any third party.

### Token storage

The tool does **not** store your token in `localStorage`, `sessionStorage`, cookies, or any
other persistent browser storage. The value you enter into the token field exists only in
the DOM input element for the duration of your browser session. When you close or refresh
the tab, it is gone.

### Recommended token hygiene

- Create a token with only the `repo` scope. Do not grant `admin`, `delete_repo`,
  `workflow`, or any other scope that is not required.
- Set an expiration date on your token. 90 days is a reasonable default for a tool
  like this.
- Use a **dedicated throwaway repository** as the push target. This limits the blast
  radius of the token to a repo that contains no sensitive code or data.
- After you are done using the tool, revoke the token at
  [github.com/settings/tokens](https://github.com/settings/tokens).
- Never paste your token into a GitHub Issue, a pull request, a chat message,
  or any other shared medium.

---

## Scope of This Security Policy

This policy covers the frontend application served from this repository. It does **not**
cover the `process_event.py` GitHub Actions workflow script, which runs server-side inside
GitHub Actions infrastructure under your own account and secrets — that component never
touches user-entered tokens from the web UI.

---

## Reporting a Vulnerability

If you discover a security issue in this project — for example, a JavaScript vulnerability
that could cause the token to leak, an XSS vector, or a supply-chain issue — please report
it responsibly.

**Do not open a public GitHub Issue for security vulnerabilities.**

Instead, use one of the following channels:

- GitHub's **Private Security Advisory** feature:
  `https://github.com/readme-SVG/Contribution-Painter/security/advisories/new`
- Direct contact via Telegram: [@FCTostin](https://t.me/FCTostin)

Please include a clear description of the issue, steps to reproduce it, and the potential
impact. We will acknowledge the report and respond as quickly as possible.

---

## Supported Versions

Only the latest version on the `main` branch is actively maintained. Older commits or
forks are not covered by this policy.
