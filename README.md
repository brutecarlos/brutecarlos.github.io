# brutecarlos.github.io

This is the personal GitHub Pages root for [@brutecarlos](https://github.com/brutecarlos).

It exists mainly so:

1. **Google AdSense site verification** has something to crawl at the bare
   domain root (`https://brutecarlos.github.io/`) — AdSense requires
   verifying a top-level domain, not a project subpath like
   `https://brutecarlos.github.io/qaqest/`.
2. **`ads.txt`** is reachable at `https://brutecarlos.github.io/ads.txt`,
   which Google's crawlers require to be at the domain root regardless of
   which project subpath the actual traffic/ads run on.

Visitors are shown a simple landing page linking to
**[QAQEST](https://brutecarlos.github.io/qaqest/)**,
the actual project site (free practice exams for software testing
certifications), hosted from
[brutecarlos/qaqest](https://github.com/brutecarlos/qaqest). It
intentionally does **not** auto-redirect (e.g. via `<meta http-equiv=refresh>`),
so AdSense's crawler reliably sees this page's own content (including the
verification `<script>` tag) rather than following a redirect elsewhere.
