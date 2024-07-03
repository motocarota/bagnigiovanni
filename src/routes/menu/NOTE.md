added
page.server.js with this content
```
export const trailingSlash = 'always';
```
in order to allow /menu/ (with trailing slash) path valid.
without this option the request to /menu/ goes in 404.
This is a problem since we already deployed the QR code of the menu with a trailing /

https://kit.svelte.dev/docs/page-options#trailingslash