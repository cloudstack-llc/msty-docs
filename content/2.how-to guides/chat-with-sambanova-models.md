---
title: Chat with Models from SambaNova
description: Use Llama 3.1 8B, 70B and 405B models from SambaNova in Msty
---

SambaNova is the only provider to offer Llama 3.1 405B in a free tier, made possible by their efficient chip architecture. Learn how to use their models in Msty.

## Demo Video
Watch [this video](https://www.youtube.com/watch?v=ULQBEOH_0ow&ab_channel=MstyApp) for the corresponding tutorial.

## API Key and Endpoint
Go to [SambaNova section](/how-to-guides/find-api-keys#sambanova) in the [Find API Keys](/how-to-guides/find-api-keys) page for more details.

## Available Models
The following models are available as of September 17, 2024. The models are available to all tiers, including the free tier.

- Meta-Llama-3.1-8B-Instruct
- Meta-Llama-3.1-70B-Instruct
- Meta-Llama-3.1-405B-Instruct

## Using the Models in Msty
Follow the steps below to add and use the SambaNova models in Msty.

::steps
  ### Open Settings
  Open settings from the sidebar.

  ::image-plain{src="/how-to/use-sambanova-models/open-settings.webp" alt="Open Settings"}
  ::

  ### Go to Remote Model Providers

  From the options, click Remote Model Providers.

  ::image-plain{src="/how-to/use-sambanova-models/remote-model-providers.webp" alt="Go to Remote Model Providers"}
  ::     

  ### Add New Provider
  Click on Add New Provider button from the top right corner.

  ::image-plain{src="/how-to/use-sambanova-models/add-new-provider.webp" alt="Add New Provider"}
  ::

  ### Choose Open AI Compatible Provider
  From the Models Provider dropdown, select Open AI Compatible.

  ::image-plain{src="/how-to/use-sambanova-models/openai-compatible-provider.webp" alt="Choose Open AI Compatible Provider"}
  ::

  ### Provide Name, API Endpoint, and API Key
  In the input boxes, provide the appropriate values for Name, API Endpoint, and API Key.

  - **API Endpoint:** `https://api.sambanova.ai/v1`
  - **Get your API key from:** https://cloud.sambanova.ai/apis

  ::image-plain{src="/how-to/use-sambanova-models/name-endpoint-and-key.webp" alt="Provide Name, API Endpoint, and API Key"}
  ::

  ### Add a Model
  SambaNova doesn't return available models through a `/v1/models` API endpoint so Msty cannot fetch them automatically. We'll need to manually add the models. You can add more models as necessary.

  You can choose to add any or all of the following models:

  - `Meta-Llama-3.1-8B-Instruct`
  - `Meta-Llama-3.1-70B-Instruct`
  - `Meta-Llama-3.1-405B-Instruct`

  Once you are done adding models, click the Add button on the bottom right.
  
  ::image-plain{src="/how-to/use-sambanova-models/add-a-custom-model.webp" alt="Add a Model"}
  ::

  ### Start Chatting
  From the model selector in a new chat, select the model that you just added and start chatting.

  ::image-plain{src="/how-to/use-sambanova-models/start-chatting.webp" alt="Start Chatting"}
  ::
::
