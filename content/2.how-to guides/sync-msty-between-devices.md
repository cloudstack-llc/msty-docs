---
title: Share Msty Data Between Devices using Workspaces
description: Learn how to share conversations, settings, API keys, Knowledge Stacks, Prompts, and more between devices.
---

Workspace is a collection of data that includes your conversations, settings, API keys, Knowledge Stacks, Prompts, and more. The primpary purpose of Workspaces is to create an isolated environment for your conversations, settings, and other data. You can create multiple Workspaces to keep your data separate and organized.

However, you can also use Workspaces to share data between devices by saving the Workspace data to a shared folder. The shared folder could be one on your network or a Dropbox folder, an iCloud folder, etc. As long as the folder is accessible from all the devices you want to share Msty with, you can use it to share data between devices. 

::alert{type="warning" icon="tabler:info-triangle"}
Msty does not provide a built-in way to sync data between devices. Syncing is **not** a feature of Msty. We don't recommend working on the same workspace from multiple devices **at the same time**. If you do, you may end up with conflicts.
::

This guide will show you how to share Msty data between devices using Workspaces.

## Creating a Workspace

1. Open Msty on the device you want to share data from. By default, Msty uses the `Default` Workspace. The Workspace try should be visible at the top of the left sidebar, just below the Msty logo. If not, click the small down `v` arrow just below the Msty logo to reveal the Workspace tray.

::image-plain{src="/how-to/share-msty-between-devices/workspace-tray.webp" alt="Workspace Tray" }
::

2. Click on `+` icon and select `New Workspace...`.
3. Enter a name for the new Workspace. You can name it anything you like, such as `Shared Workspace`, `Cloud Workspace`, or `Work Workspace`.
4. Select the location where you want to save the Workspace data. Whatever location you choose, make sure it is accessible from all the devices you want to share Msty data with.
5. Select one of the available icons for the Workspace to quickly identify it.
6. Select what to copy from the current Workspace to the new Workspace. You can choose to copy `Settings and Configs,`, `API Keys`, `Knowledge Stacks`, and `Prompts`, and more. Read more about `API Keys` below.``
7. Click `Create and Switch` to create the new Workspace and switch to it.

::image-plain{src="/how-to/share-msty-between-devices/create-workspace-dialog.webp" alt="Create Workspace Dialog" }
::

## Importing a Workspace

1. Open Msty on the device you want to share data to.
2. Click on the Workspace tray at the top of the left sidebar.
3. Click on the `+` icon and select `Import Workspace...`.
4. Select the Workspace folder that was added when creating the Workspace on the other device. The name of the folder should be the same as the name of the Workspace.
5. Click `Open` to import the Workspace and switch to it.

## Switching to a Workspace

1. Click on the Workspace tray at the top of the left sidebar.
2. Select the Workspace you want to switch to from the list of available Workspaces.

::image-plain{src="/how-to/share-msty-between-devices/workspace-tray-context-menu.webp" alt="Workspace Tray Conext Menu provides additional actions" }
::

## Editing a Workspace

You can edit the name and the icon of a Workspace by Right Clicking on the Workspace in the Workspace tray and selecting `Edit...`.

## Deleting a Workspace

You can delete a Workspace by Right Clicking on the Workspace in the Workspace tray and selecting `Remove Workspace...`. There are two options when deleting a Workspace:
- `Remove Workspace`: This will simply remove the Workspace from the list of available Workspaces. The Workspace data will not be deleted.
- `Delete Workspace with Data Folder`: This will remove the Workspace from the list of available Workspaces and delete the Workspace data. **This action is irreversible.** To delete the Workspace data, you must select `Also delete the data folder` and click `Delete Workspace with Data Folder` red button. Again, there is no undo for this action.

## Copying Existing Conversations to a Workspace

If you want to copy existing conversations from one Workspace to another, you can do so by browsing to the Workspace folder on your device and copying the `msty.db` file from the source Workspace folder to the destination Workspace folder. The `msty.db` file contains all the conversation data for the Workspace. Make sure to close Msty before copying the `msty.db` file to avoid any conflicts.


## Sharing API Keys

For security reasons, Msty saves your API keys in the keychain of your device. When you create a new Workspace, you have the option to copy the API keys from the current Workspace to the new Workspace. When using this Workspace on another device, by default, you will need to re-enter the API keys manually otherwise you'll get an error when trying to use an API key. Ease of convenience or security is a trade-off here and you can choose what works best for you.

To avoid re-entering the API keys on every device, you can choose to save the API keys **unencrypted** in the Workspace folder. This option is available when you add a new API key or edit an existing API key. Just uncheck `Save key securely in keychain` option when adding or editing an API key.

::image-plain{src="/how-to/share-msty-between-devices/api-key-keychain.webp" alt="Uncheck 'Save key securely in keychain' to avoid re-entering API keys on every device"}
::
