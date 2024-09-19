---
title: Get the latest version of Local AI service
description: Learn how to get the latest version of Local AI service
---

For your convenience, Msty bundles the latest version of Local AI service (Ollama) with the app at the time of the app release. 
However, if you want to get the latest version of Local AI service, first try going to `Settings` > `Local AI` > `Service Version` and clicking on `Check for updates`.
If there is a new version available, it will be downloaded.

If you are unable to download the latest version of Local AI service using this method, you can follow the steps below to manually download and install the latest version of Local AI service.

## On macOS
1. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
2. From under `Assets`, download the latest version of Ollama for macOS by downloading `ollama-darwin` (NOT `ollama-darwin.zip`).
3. Once downloaded, copy `ollama-darwin` to `~/Library/Application Support/Msty` and rename it as `msty-local`.
4. Open Terminal and run the following command to make the file executable:
```bash
chmod +x ~/Library/Application\ Support/Msty/msty-local
```
5. Restart Msty and verify the version of Local AI service by going to `Settings` > `Local AI Service > Service Version`.

## On Windows
1. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases 
2. From under `Assets`, download the latest version of Ollama for Windows by downloading `ollama-windows-amd64.zip`.
3. Once downloaded, extract the contents of the zip file and copy `ollama-windows.exe` to `C:\Users\<username>\AppData\Roaming\Msty` and rename it as `msty-local.exe`.
4. Copy `lib` folder to `C:\Users\<username>\AppData\Roaming\Msty`.
5. If you are on NVIDIA GPU, you can optionally remove `rocm` 
6. If you are on AMD GPU, you can optionally remove `cuda`
7. Restart Msty and verify the version of Local AI service by going to `Settings` > `Local AI Service > Service Version`.

**Note**: There is a small annoyance with the official build of Ollama where during chatting it opens up a blank Terminal window. You could just ignore it or wait for the latest
release of Msty. We have sent a PR to Ollama team and waiting for it to get merged. Please upvote this PR to get it prioritized: https://github.com/ollama/ollama/pull/4287 


## On Linux

### For CUDA users:

1. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
2. From under `Assets`, download the latest version of Ollama for Linux - `ollama-linux-amd64.tgz`
3. Once downloaded, copy `lib` to `~/.config/Msty/`
4. Copy `bin/ollama` to `~/.config/Msty/` and rename it as `msty-local`
5. Open Terminal and run the following command to make the file executable:
```bash
chmod +x ~/.config/Msty/msty-local
```
6. Restart Msty and verify the version of Local AI service by going to `Settings` > `Local AI Service > Service Version`.

### For ROCm (AMD GPU) users:
1. Go to releases page on the Ollama repository: https://github.com/ollama/ollama/releases
2. From under `Assets`, download the latest version of Ollama for Linux by downloading the one appropriate for your system - either `ollama-linux-amd64-rocm.tgz`
3. Once downloaded, copy `lib` to `~/.config/Msty/`
4. Copy `bin/ollama` to `~/.config/Msty/` and rename it as `msty-local`
5. Open Terminal and run the following command to make the file executable:
```bash
chmod +x ~/.config/Msty/msty-local
```
6. Restart Msty and verify the version of Local AI service by going to `Settings` > `Local AI Service > Service Version`.
