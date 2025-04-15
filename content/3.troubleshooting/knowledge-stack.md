---
title: Knowledge Stack
description: Basic troubleshooting steps for Knowledge Stack
navTruncate: false
---

Having an issue with a knowledge stack? Let's first make sure that the basics are working. Here are some steps to troubleshoot:

## Check if Knowledge Stack is working

::steps

### Download MixedBread Embed model

If you haven't already done so, download the MixedBread Embed model from the Msty app. We'll use this to check if the Knowledge Stack is working.

### Create a new Knowledge Stack

Select **MixedBread** as the embedding model.

### Use the following content for the Knowledge Stack

Copy the following text to a `.txt` file on your device. Then, add it to the Files section of your new Knowledge Stack.

```
# Random Musings

## The Mystery of Black Holes
Black holes are regions in space where the gravitational pull is so strong that even light cannot escape. They are formed when massive stars collapse under their own gravity. While they can't be seen directly, their presence is inferred by observing the behavior of nearby objects.

## The Art of Origami
Origami is the traditional Japanese art of paper folding, transforming a flat sheet into intricate sculptures without cutting or gluing. It's not just an art form but also a tool for problem-solving and creativity in mathematics and engineering.

## Penguins in Antarctica
Penguins are flightless birds known for their distinctive black and white feathers. Found primarily in Antarctica, these social animals live in large colonies. They are excellent swimmers, using their flippers to navigate through icy waters to hunt for fish.

## Quantum Computing Breakthroughs
Quantum computing uses principles of quantum mechanics to perform calculations far more efficiently than classical computers. Researchers are making strides towards building practical quantum computers that could revolutionize fields like cryptography, material science, and artificial intelligence.

## Ancient Egyptian Hieroglyphs
Hieroglyphs were the writing system used by ancient Egyptians, consisting of pictorial symbols. These symbols were often inscribed on temple walls and tombs. Deciphering hieroglyphs was made possible by the discovery of the Rosetta Stone in 1799.

## Street Food Culture
Street food offers an authentic taste of local cuisine at affordable prices. From tacos in Mexico City to satay skewers in Bangkok, street vendors provide quick and delicious meals that reflect regional flavors and traditions.

## Renewable Energy Innovations
Renewable energy sources like solar, wind, and hydroelectric power are essential for sustainable development. Advances in technology have made renewable energy more efficient and accessible, helping reduce our reliance on fossil fuels.

## The Role of Bees in Pollination
Bees play a crucial role in pollinating flowers, which helps plants reproduce. This process is vital for food production as many crops depend on bee pollination. Protecting bee populations is essential for maintaining biodiversity and agricultural productivity.

## The History of Rock Music
Rock music originated in the 1950s with roots in blues, jazz, and country music. It quickly evolved into various subgenres like punk rock, heavy metal, and alternative rock. Iconic bands like The Beatles and Led Zeppelin have left a lasting impact on popular culture.

## Virtual Reality Experiences
Virtual reality (VR) technology creates immersive environments that simulate real or imagined worlds. It's used not only for entertainment but also for training simulations, therapy sessions, and educational purposes.

```

### Compose stack

After adding the `.txt` file, select **Compose**.

### Select option to view chunks

After composing is complete, select the icon next to the green 'Composed & Ready to Chat' message. This button opens the **Knowledge Stack Chunks Console** where you can see what chunks are passed along when chatting with a model.

### Insert 'test' into the input field and click 'Run'

This will run a query and display results in the console.

### Verify

If you see the chunks in the console output, then it means that the Knowledge Stack you created can be used when chatting with a model and that Knowledge Stacks are working properly.

If you can see outputs for this test but the prior one is not working as expected, continue to the next section to view the **possible issues**.

::

## Possible Issues

### Incompatible file type

Knowledge Stacks work best with text files (.md, .txt, etc) and pdfs.

### File size too small

If the text content in the individual files are less than 50 characters, they will most likely be ignored.

Tiny files aren't designed to be used as a RAG source.

### Verify the model is compatible with RAG

The model you chose for `embedding` is indeed an embedding model and not a chat model. This is unlikely but may be possible.

### You restarted Msty

If you've restarted Msty, check that there are no rogue Msty-App processes running that may be interfering with Msty and the Knowledge Stack.

### Understanding the limitations of RAG

Possibly the main thing to understand about RAG is that it doesn't work like a traditional search engine - it doesn't have the full context of the whole complete files but rather 'chunks', or 'vectors', created as a result of vectorization.

With RAG, the model retrieves relevant chunks of information based on the query. So, for example, if you ask to summarize a file, it may not be able to do that properly because only the most relevant chunks are provided. Meaning, the model doesn't have the full context of the document, and it may not be able to provide a coherent summary.

Some models may infer the context of the chunks and provide a more coherent response, but this is not guaranteed and may even lead to incorrect or misleading information - a.k.a "hallucinations".

This may not present as an issue for most use-cases; however, for a few, such as with summarizations, it is an important limitation to be aware of.
