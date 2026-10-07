# N1 Balance — GitHub Pages package

Upload the contents of this folder (not the outer folder) to a new GitHub repository. In Settings → Pages, select Deploy from a branch, main, /(root), then Save. Open the URL GitHub displays once publishing finishes.

On iPhone: open that URL in Safari → Share → Add to Home Screen → Add. Wait for Offline ready. Share the published URL with other users using the app's Share app link button.

## Calculation model

Source: two user-supplied photos labeled B767 AMM Fan Rotor Adjustment/Test, Revision 133.5. Photographs are not bundled for public redistribution. The tables are transcribed; source currency and aircraft/engine applicability have not been established.

38 evenly spaced holes; every starting screw assumed P14/P07. Search includes the target hole and symmetric equal-weight pairs at offsets ±1 through ±9. Effective differences: 0, 3.14, 6.24, 9.16, 12.00, 14.71, 17.31 g. Multipliers: 32.2 g/U₀ for 95%, 28.6 for 99%. Whole-degree phase inputs only; 360 maps to 0.

Exact meet-in-the-middle enumeration considers all 7^10 modeled assignments without beam pruning or mass rounding. First minimize screw-change count among solutions within the selected tolerance, then minimize vector error at that count. If none qualifies, show the nearest modeled correction with an explicit review message. This does not prove minimality outside the modeled symmetric positions.

Default tolerance 0.15 g is a configurable calculation setting inherited from the prototype, NOT an AMM acceptance limit. Source images do not include the complete approved procedure, installation restrictions or acceptance criteria. Verify against current approved maintenance data before installation. Existing nonbaseline screws require a different model.

## Local test and updates

Serve with `python3 -m http.server 8000` and open http://localhost:8000. Opening index.html directly does not enable a service worker. After modifying app files, change the cache version in sw.js. Existing clients receive the new version after all older app windows close and the app is reopened online. Browser storage may be cleared by the OS; Offline ready indicates initial cache installation, not guaranteed permanent retention.

No external dependencies, analytics, accounts or runtime APIs. All calculations run on the device.
