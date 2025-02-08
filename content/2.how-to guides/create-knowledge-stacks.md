---
title: Creating a Knowledge Stack
description: Step-by-step guide to creating and populating Knowledge Stacks
navTruncate: false
---

::steps
  ### 1. Start a New Stack
  Click the Knowledge Stack button in the sidebar to begin
  
  ::image-plain{src="/how-to/create-knowledge-stack/new-stack-button.webp" alt="New Knowledge Stack button in sidebar"}
  ::

  ### 2. Add Your Content
  ::tabs
    ::div{label="Files" icon="tabler:file"}
      #### Documents & Files
      Drag and drop or browse for:
      - PDFs, Word docs, text files
      - Code files and spreadsheets
      - EPUBs and RTF documents
      
      ::image-plain{src="/how-to/create-knowledge-stack/file-import.webp" alt="File import interface"}
      ::
    ::

    ::div{label="Obsidian" icon="tabler:notebook"}
      #### Vault Integration
      Connect entire Obsidian vaults while preserving:
      - Folder structure
      - Internal links
      - Metadata
      
      ::image-plain{src="/how-to/create-knowledge-stack/obsidian-import.webp" alt="Obsidian vault import"}
      ::
    ::

    ::div{label="Folders" icon="tabler:folder"}
      #### Bulk Import
      Add entire folders with mixed content:
      - Drag & drop folders
      - Maintains original structure
      - Processes all supported file types
      
      ::image-plain{src="/how-to/create-knowledge-stack/folder-import.webp" alt="Folder import interface"}
      ::
    ::

    ::div{label="Notes" icon="tabler:pencil"}
      #### Quick Add Notes
      Type or paste custom text directly:
      - Perfect for last-minute additions
      - Supports markdown formatting
      - Appears as "Custom Notes" in stack
      
      ::image-plain{src="/how-to/create-knowledge-stack/custom-notes-import.webp" alt="Custom notes field"}
      ::
    ::

    ::div{label="YouTube" icon="tabler:brand-youtube"}
      #### Video Content
      Paste YouTube URLs to add:
      - Automatic transcript processing
      - Video metadata inclusion
      - Multiple URLs supported
      
      ::image-plain{src="/how-to/create-knowledge-stack/youtube-import.webp" alt="YouTube URL field"}
      ::
    ::
  ::

  ### 3. Configure Processing
  Click the gear icon to adjust chunk settings:
  
  ::image-plain{src="/how-to/create-knowledge-stack/chunk-settings-interface.webp" alt="Chunk processing settings"}
  ::
  
  - **Embedding Model**: Choose local or cloud-based
  - **Splitter Type**: Recursive vs sentence-based
  - **Chunk Size**: Balance context vs specificity
  - **Overlap**: Control context connections
  
  ::alert{type="tip" icon="tabler:bulb"}
  Need help choosing settings? See our [Advanced Configuration Guide](/features/knowledge-stack/advanced-features)
  ::

  ### 4. Fine-tune Search
  Click the sliders icon for precision controls:
  
  ::image-plain{src="/how-to/create-knowledge-stack/search-settings-interface.webp" alt="Search settings interface"}
  ::
  
  - Results quantity and quality thresholds
  - Custom prompt prefixes
  - Jina AI reranking integration

  ### 5. Save & Activate
  Choose your workflow:
  
  ::image-plain{src="/how-to/create-knowledge-stack/compose-save-as-draft-buttons.webp" alt="Save and compose buttons"}
  ::
  
  - **Save Draft**: Store unfinished stack
  - **Compose**: Build ready-to-use stack
  - **Three-dot Menu**: Update existing stacks

::alert{type="info" icon="tabler:info-circle"}
Remember: You can always [recompose your stack](/features/knowledge-stack/advanced-features#recomposing-stacks) later if you add new content or change settings!
::

  ### 6. Chat with Your Stack
  Access your knowledge in any chat:

  ::image-plain{src="/how-to/create-knowledge-stack/choose-knowledge-stack-in-chat-interface.webp" alt="Knowledge Stack selection in chat interface"}
  ::

  1. Start a new chat
  2. Click the Knowledge Stack icon
  3. Select stacks to reference
  4. Adjust settings:
     - **Similarity**: Match strictness (Low=Broad, High=Exact)
     - **Chunks**: Number of references to use
  5. Ask natural language questions

  ::alert{type="tip" icon="tabler:bulb"}
  Pro Tip: Combine multiple stacks for cross-reference queries! The selected stacks will show a checkmark badge when active.
  ::

  ::alert{type="info" icon="tabler:info-circle"}
  Want deeper control? Learn about [optimizing search results](/features/knowledge-stack/embeddings) and [how RAG works](/features/knowledge-stack/rag-explained).
  ::