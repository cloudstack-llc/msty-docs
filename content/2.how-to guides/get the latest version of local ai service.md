---
title: Get the latest version of Local AI service
description: Learn how to get the latest version of Local AI service
navTruncate: false
---

::MstyStudioDocsNotice
::

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

      #### Additional config for AMD ROCm™ GPU users only:
      1. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
      2. From under `Assets`, download `ollama-windows-amd64-rocm.tgz`
      3. Once downloaded, extract contents and move the whole `rocm` folder under `lib\ollama` to `C:\Users\<username>\AppData\Roaming\Msty\lib\ollama`
    ::

    ::div{label="Mac" icon="hugeicons:apple"}
      ### Mac
      1. Close the app. Make sure msty-local is not running in your Activity monitor.
      2. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
      3. From under `Assets`, download `ollama-darwin.tgz` (NOT `Ollama-darwin.zip`).
      4. Once downloaded and extracted, move `ollama` to `~/Library/Application Support/Msty`. Do not copy the whole folder. But the executable inside the extracted folder.
      5. Rename `ollama` to `msty-local`
      6. Restart the app
    ::

    ::div{label="Linux" icon="ph:linux-logo"}
      ### Linux

      1. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
      2. From under `Assets`, download `ollama-linux-amd64.tgz`
      3. Once downloaded, unzip and move `bin` and `lib` directories to `~/.config/Msty/`
      4. Rename `ollama` executable under `bin` to `msty-local`
      5. Open Terminal and run the following command to make the file executable:

      ```sh
      chmod +x ~/.config/Msty/bin/msty-local
      ```
      
      #### Additional config for AMD ROCm™ GPU users only:
      1. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
      2. From under `Assets`, download `ollama-linux-amd64-rocm.tgz`
      3. Once downloaded, unzip and move the whole `rocm` directory under `lib/ollama` to `~/.config/Msty/lib/ollama`
    ::
::

Now restart Msty and verify the new version of Local AI service by going to Settings > Local AI > Service Version.

You can cleanup the downloaded files once the above steps are complete.