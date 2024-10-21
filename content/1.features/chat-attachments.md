---
title: Chat Attachments 
description: Enhance your chats with documents, images, and YouTube link attachments
---

In Msty, you can attach files, images, and YouTube links to enhance your conversations and provide additional context for your chats.

Learn about the different types of attachments and how to add and manage them below.

::tabs
  ::div{label="Images" icon="tabler:library-photo"}
    ### Images
    You can easily attach images to your chat by either dropping them directly into the chat input box or clicking on the attachments icon. Once added, images can be selected or unselected during the chat, allowing you to control which attachments are included in the conversation.

    By default, images are **cached**, meaning they will be stored and reused as-is during the chat. You can toggle between cached and live mode using the **bolt icon** near the image thumbnail:
    - **Cached Mode:** The default option, storing the image for reuse without reloading.
    - **Live Mode:** When toggled on, the image will be reread from the disk every time it's referenced, ensuring you are using the latest version.

    ::image-plain{src="/features/chat-attachments/image-attachments.webp" alt="Image Attachments"}
    ::
  ::

  ::div{label="Documents" icon="tabler:library"}
    ### Documents
    Adding documents works the same way as images—you can drop files into the input box or use the attachments icon. Like images, documents can be selected or unselected during the conversation.

    Documents are **cached by default**, with the option to toggle to live mode using the **bolt icon** near the document thumbnail:
    - **Cached Mode:** The default option, storing the document for reuse without reloading.
    - **Live Mode:** When toggled on, the document is reread from the disk for each reference in the chat, ensuring up-to-date content.

    ::image-plain{src="/features/chat-attachments/document-attachments.webp" alt="Document Attachments"}
    ::
  ::

  ::div{label="YouTube Links" icon="tabler:brand-youtube"}
    ### YouTube Links :aurum-tag
    You can attach YouTube links to chats by dropping them directly into the chat input box or using the attachments icon, making it simple to reference videos in your conversation. This feature is available exclusively to Aurum users. As with images and documents, YouTube links can be selected or unselected as needed during the chat.

    When a YouTube link is attached, the **transcript is cached**, so if you attach the same link again in a new chat, Msty will utilize the cached transcript for fast retrieval, avoiding the need to process it again.

    ::image-plain{src="/features/chat-attachments/youtube-link-attachments.webp" alt="YouTube Link Attachments"}
    ::
  ::
::

