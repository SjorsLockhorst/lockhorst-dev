---
title: 'Symbols vs. Neurons, a critical comparison.'
description: 'An article about the difference between the symbolic, connectionist and hybrid approach.'
date: 2023-03-27
---

# Symbols vs. Neurons, a critical comparison.


## Introduction
Recent successes in AI can largely be attributed to breakthroughs in a specific subset of AI research, deep learning.
Examples of such systems are large language models (LLMs), object detection in images/video, and speech recognition.
While these breakthroughs are astounding in their fields, critics raise the issue that training neural networks alone won't be an end-all be all.
They argue that neural networks alone, cannot attain certain features of human like intelligence, like language understanding, common sense reasoning, cause and effect, reasoning about the physical world, and more (Marcus, 2018).
They thus surmise that creating an AI that can do those and any other tasks, commonly called artificial general intelligence (AGI for short), will be impossible to attain using only neural networks (Marcus, 2022).

Can these caveats be overcome by neural networks alone, or do we need another approach?
Some argue that we should look to logical approaches, so-called symbolic AI, to fix some of the caveats that neural network approaches have.
Others argue that a combination of a neural network approach and a symbolic approach, the so-called neuro-symbolic approach, deserves our hopes for building AGI.

Let's first have a brief look at all three approaches at a glance, before we get into the case for achieving AGI in that way.


### Symbolic AI

Symbolic AI is inspired by human cognition, specifically the way humans manipulate abstract symbols and logic to reason about the world.
Symbolic AI uses explicit knowledge representation and reasoning using symbols and rules.
These representations and rules have to be programmed by some human coder.
Knowledge is often represented using letters, numbers and words.
Rules are used to manipulate these symbols and to reason with them.
These rules are often logical statements expressed in some formal language, like propositional logic, or predicate logic.

Symbolic AI has been widely implemented in our everyday lives in various applications, ranging from voice assistants to email spam filters.
One of the most notable examples is the use of decision trees in customer service chatbots.
These chatbots use rules based on logical statements to provide automated responses to user inquiries.
Another example is the use of expert systems in medical diagnosis.
These systems use knowledge representation and manipulation rules to analyze patient symptoms and provide recommendations to healthcare providers.
In the field of finance, symbolic AI techniques like rule-based systems and knowledge graphs are used for fraud detection and risk assessment.
The use of symbolic AI methods is not always apparent to the end-user, but it plays a significant role in improving the efficiency and accuracy of many modern systems.




### Subsymbolic AI

Subsymbolic AI is a type of artificial intelligence that focuses on learning patterns and making predictions from data, rather than using explicit rules and logical representations.
Subsymbolic approaches rely on mathematical models and algorithms, such as neural networks, that learn from experience and can identify complex patterns in data.

In a neural network units called neurons are arranged in layers, each taking in some amount of inputs from the previous layer.

Each input from the previous layer has a certain weight attached to it.
The weighted sum plus a bias term is calculated and the result is passed through a non-linear activation function such as a sigmoid.
These outputs are then taken as inputs for the next layer.
Adjusting the values of the weights and biases of all neurons in the network is how the network 'learns'.
This is usually done by giving the network a set of inputs, with a known desired output.
The degree to which the network is wrong, known as the error or loss, is the difference between the prediction of the network and the actual output.
Using an algorithm called backpropagation, the weights and biases are adjusted in such as to minimize the error.

Deep learning is a term often used when talking about neural networks and it refers to the fact that when a network has a lot of layers of neurons, a network is 'deep'.




### Neurosymbolic AI

A good example of such a system is the alphaGO system created by Google's Deep Mind.
The systems learned to play go, by using a combination of a neural network, and a symbolic approach, a beam search algorithm.
Various degrees of combinations between the two are possible (Garcez & Lamb, 2023).

### Research question
Will symbolic, subsymbolic, or neuro symbolic AI lead to AGI? Can this abstract manipulation of data or symbols be enough, or will embodied AI be needed.


## Body

### The case for symbolic AI

- Historically the first approach that aspired to create AGI.
    - Didn't deliver on promise, causing AI winter failed.
- Doesn't deal well with uncertainty.
- Can't generalize outside what it knows.
- Very labor intensive.
- Top-down approach might not work well
    - Do we even agree on definitions as humans
    - Definitions might change over time
- Nature in the nature vs. nurture

### The case for subsymbolic AI
- Can solve specific tasks very well.
- LLMs are impressive (GPT-4), even at reasoning.
    - In my opinion closest thing to AGI we have currently.
- Still, no real model of the world.
- Bias in data
- No real 'understanding' of the text it produces or trains on
    - Does this matter?
- Blackbox, interpretability, explainable AI, safe AI.
- Nurture in the nature vs. nurture

### The case for neurosymbolic AI
- Can leverage benefits of the connectionist approach, adds common sense knowledge/reasoning.
- Can add a priori knowledge to the connectionist system.
- Can validate logical truths, identity, associativity, etc.
- Adding knowledge representation and rule based reasoning might still be labour intensive.
- Human knowledge might be in the way of the learning
- Combination of nature and nurture

### The case for embodied AI
- This still might not be enough
- If we use humans as a model, we might need embodiment


### Conclusion

- A lot of discussion from both fronts, tribalism is not helpful.
- An interdisciplinary approach will probably be helpful.
- Maybe a whole new approach is needed to achieve AGI.

## References

Garcez, A. D. A., & Lamb, L. C. (2023). Neurosymbolic AI: the 3rd wave. *Artificial Intelligence Review*, 1-20.

Marcus, G. (2022). Deep learning alone isn't getting us to human-like AI. *Noema*

Marcus, G. (2018). Deep learning: A critical appraisal. *arXiv preprint arXiv:1801.00631*.

More to come...
