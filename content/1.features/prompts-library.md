---
title: Prompts Library
description: Create a library of Quick Prompts that you can use throughout Msty
navTruncate: false
---

::MstyStudioDocsNotice
::

The Prompts Library acts as a collection of Quick Prompts that you can use throughout Msty. You can create, edit, and delete prompts as needed.

When you need to add a prompt, such as when adding system or user prompts to a chat, you can quickly select a prompt from the library using the Quick Prompts button.

### Managing Prompts Library

You can access the **Prompts Library** from the sidebar menu.

From here, you can create and edit your own custom prompts.

If you'd like to install Msty's default prompts, that cover a wide range of use-cases, you can do so by clicking on the **Install Default Prompts** button.

You may further customize the default prompts to better suit your needs.

### Importing Prompts

If you would like to import prompts, you can do so by clicking on the **Import Prompts** button that appears when you select the ellipsis menu next to **Add New Prompt**. Find the parent folder you'd like to import on your local machine and select it. Ensure that you have the below file structure before importing.

**File structure**

- Parent Folder Name (this can be any name you'd like): ie - `my-custom-prompts`
  - Subfolder Name (this will be used as the prompt name): ie `Short Description`
    - File Name (file name must be `system.md`, `user.md`, or `refinement.md`): ie `system.md`

You can add multiple subfolders to the parent folder to organize your prompts as needed. You can also add multiple files per subfolder, they just need to be named `system.md`, `user.md`, or `refinement.md`.

You do not need to zip the files; just point Msty to the Parent Folder and Msty will automatically import the prompts.
