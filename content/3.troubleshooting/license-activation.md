---
title: License Activation
description: Troubleshooting common license activation issues in Msty
navTruncate: false
---

## Activation not persisting

If you're having trouble with your Msty license activation not persisting, it might be related to your desktop environment.

To resolve this, set the `XDG_CURRENT_DESKTOP` environment variable to `GNOME` before launching the app. This ensures Msty can interact properly with the keychain for storing your license.

::tabs{variant="card"}
::div{label="AppImage" icon="ph:linux-logo"}

### AppImage

Open a terminal window and run the following command to open Msty:

```sh
export XDG_CURRENT_DESKTOP='GNOME' && ./<FileName>.AppImage
```

::

::div{label="deb" icon="tabler:brand-debian"}

### deb

Open a terminal window and run the following command to open Msty:

```sh
export XDG_CURRENT_DESKTOP='GNOME' && msty
```

::

::

## Activation failure due to SSL error

This may happen if you are behind a proxy.

To resolve, try adding `NODE_TLS_REJECT_UNAUTHORIZED=0` prior to the app binary.

::tabs{variant="card" sync="download-os"}
::div{label="Windows" icon="iconoir:windows"}

### Windows

Open a terminal window and run the following command:

```sh
set NODE_TLS_REJECT_UNAUTHORIZED=0 && C:\Path\To\Msty.exe
```

::

::div{label="Mac" icon="hugeicons:apple"}

### Mac

Open a terminal window and run the following command:

```sh
NODE_TLS_REJECT_UNAUTHORIZED=0 /Applications/Msty.app/Contents/MacOS/Msty
```

::
::div{label="Linux" icon="ph:linux-logo"}

### Linux

Open a terminal window and run the following command:

```sh
NODE_TLS_REJECT_UNAUTHORIZED=0 /path/to/Msty
```

::

::

---

If you still have issues activating your license, please reach out on our <a href="https://msty.app/discord?ref=docs" target="_blank">Discord</a> server for support.
