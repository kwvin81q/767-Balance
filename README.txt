767 Balance usage update — prepared October 9, 2026

The anonymous event receiver is enabled. The dashboard and stats API are restricted to the owner's ChatGPT sign-in. Tracking is NOT live in the app yet. One step remains:
Upload index.html, app.js, usage.js, and sw.js to the existing 767-Balance repository, or grant the GitHub connection write permission so the update can be installed for you.

Dashboard: https://b767-balance-usage.kevin81q.chatgpt.site/
Existing app: https://kwvin81q.github.io/767-Balance/

This package contains only the four updated files. Keep all other repository files. It does not change solver.js or the balance tables.

Counts completed calculations, page opens, and anonymous device presence. Inputs and balance results are not transmitted. Offline events are saved on the device and retried after reconnection, with server deduplication. Offline events older than 30 days expire. Clearing browser storage removes unsynced events and creates a new device ID. Approximate device and active counts are not audited usage records.

After installation, open the app online, close it, and reopen it to update the old offline cache. The dashboard refreshes every 10 seconds; visible devices send a heartbeat every 30 seconds. Active means seen within 2 minutes. Existing past usage cannot be recovered.

Checks passed: backend build and TypeScript; offline queue/reconnect; duplicate retries; owner authorization; rejected origins and malformed events; blocked storage. Browser end-to-end verification is still pending repository installation.
