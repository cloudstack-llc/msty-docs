---
title: Install Msty on Linux
description: Learn how to install Msty on your Linux machine
---

Follow the instructions below to install Msty's .AppImage or .deb installer on your Linux machine.

## Download Msty

If you haven't downloaded Msty already, get started by <a href="https://msty.app?ref=docs" target="_blank">downloading</a> it first.

## Installing Msty

Once you have downloaded Msty, navigate to the directory where you downloaded the installer from the terminal.

::tabs{variant="card"}

  ::div{label="AppImage" icon="ph:linux-logo"}
  ### AppImage

  From the terminal, run the following command to make the downloaded AppImage file executable:

  ```sh
  chmod a+x ./<DownloadedFileName>.AppImage
  ```

  Then run the following command to open Msty from the terminal:

  ```sh
  ./<DownloadedFileName>.AppImage --no-sandbox
  ```

  Note: You may need to install appropriate packages like libfuse2 (if your system does not have them already) inorder to run the AppImage file.
  ::

  ::div{label="deb" icon="tabler:brand-debian"}
  ### deb

  From the terminal, run the following command to install Msty on your system:

  ```sh
  sudo apt install ./<DownloadedFileName>.deb
  ```

  Once the installation finishes, run the following command to run Msty from the terminal:

  ```sh
  msty
  ```
  
  ::alert{type="info" icon="tabler:info-circle"}
  Sometimes the installation may experience permission issues if the '_apt' user does not have enough privileges. In that case, run the following two commands to mitigate this issue and then run Msty again.

  ```sh
  sudo chown root:root /opt/Msty/chrome-sandbox
  ```
  
  ```sh
  sudo chmod 4755 /opt/Msty/chrome-sandbox
  ```
  ::
  ::

::