---
title: License Activation
description: Troubleshooting common license activation issues in Msty
---


## Activation Not Persisting

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
::

If the issue still persists, please reach out on our <a href="https://msty.app/discord?ref=docs" target="_blank">Discord</a> server for further troubleshooting.