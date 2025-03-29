---
title: Get the latest version of Local AI service
description: Learn how to get the latest version of Local AI service
navTruncate: false
---

For your convenience, Msty bundles the latest version of Local AI service (Ollama) with the app at the time of the app release. 
However, if you want to get the latest version of Local AI service, first try going to Settings > Local AI > Service Version and clicking on `Check for Updates`.
If there is a new version available, it will be downloaded.


## Manual download

If you are unable to download the latest version of Local AI service using this method, you can follow the steps below to manually download and install the latest version of Local AI service.

::tabs{variant="card" sync="download-os"}
    ::div{label="Windows" icon="iconoir:windows"}
      ### Windows

      ::alert{type="info" icon="tabler:info-circle"}
      **Note**: There is a small annoyance with the official build of Ollama where during chatting it opens up a blank Terminal window. You could just ignore it or wait for the latest release of Msty. We have sent a PR to Ollama team and waiting for it to get merged. Please upvote this PR to get it prioritized: https://github.com/ollama/ollama/pull/8668 
      ::

      1. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases 
      2. From under `Assets`, download `ollama-windows-amd64.zip`.
      3. Once downloaded, extract the contents of the zip file and move `ollama.exe` to  `C:\Users\<username>\AppData\Roaming\Msty`
      4. Rename `ollama.exe` to `msty-local.exe`.
      5. Move `lib` folder to `C:\Users\<username>\AppData\Roaming\Msty`

      #### Additional config for ROCm (AMD GPU) users only:
      1. Delete `lib` folder from `C:\Users\<username>\AppData\Roaming\Msty` if exists
      2. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
      3. From under `Assets`, download `ollama-windows-amd64-rocm.tgz`
      4. Once downloaded, extract contents and move `lib` folder to `C:\Users\<username>\AppData\Roaming\Msty`
    ::

    ::div{label="Mac" icon="hugeicons:apple"}
      ### Mac
      1. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
      2. From under `Assets`, download `ollama-darwin.tgz` (NOT `Ollama-darwin.zip`).
      3. Once downloaded and extracted, move `ollama-darwin` to `~/Library/Application Support/Msty`
      4. Rename `ollama-darwin` to `msty-local`
      5. Open Terminal and run the following command to make the file executable:
      ```bash
      chmod +x ~/Library/Application\ Support/Msty/msty-local
      ```
    ::

    ::div{label="Linux" icon="ph:linux-logo"}
      ### Linux

      1. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
      2. From under `Assets`, download `ollama-linux-amd64.tgz`
      3. Once downloaded, unzip and move `bin` and `lib` to `~/.config/Msty/`
      4. Rename `ollama` executable under `bin` to `msty-local`
      5. Open Terminal and run the following command to make the file executable:
      ```bash
      chmod +x ~/.config/Msty/bin/msty-local
      ```
      
      #### Additional config for ROCm (AMD GPU) users only:
      1. Delete `lib` folder from `~/.config/Msty` if exists
      2. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
      3. From under `Assets`, download `ollama-linux-amd64-rocm.tgz`
      4. Once downloaded, unzip and move `lib` under `~/.config/Msty/`
    ::
::

Now restart Msty and verify the new version of Local AI service by going to Settings > Local AI > Service Version.

You can cleanup the downloaded files once the above steps are complete.