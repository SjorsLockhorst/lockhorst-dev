---
title: 'Symbols vs. Neurons, a critical comparison.'
description: 'An article about the difference between the symbolic, connectionist and hybrid approach.'
date: 2023-03-27
---
Sjors Lockhorst

2165112


# Symbols vs. Neurons, a critical comparison.


## Introduction
Recent successes in AI can largely be attributed to breakthroughs in a specific subset of AI research, deep learning by using neural networks, also known as the connectionist approach.

Such breakthroughs have happened in many domains such as natural language generation, object detection in images/video, speech recognition, image generation, and many more.

While impressive, many breakthroughs remained domain-specific and not generalizable across domains.

This seems to be changing with the advent of the latest generation of large language models (LLMs) for natural language generation.

Specifically the models chatGPT and GPT-4 (OpenAI, 2023) that the company OpenAI has launched have shown the world what the power of LLMs can be.

Bubeck et al. show that GPT-4, beyond its mastery of language, can solve novel and difficult tasks that span mathematics, coding, vision, medicine, law, psychology and more. They further conclude that this performance is 'strikingly close' to human-level performance (2023).

These systems are arguably very powerful and have the AI research community devided.

Some researchers now argue that AGI, artificial general intelligence, is within our reach very soon.

Some even claim that GPT-4 is an early version of AGI (Bubeck et al., 2023).

Other researchers are more skeptical.

They argue that neural networks alone, cannot attain certain features of human-like intelligence, like language understanding, common sense reasoning, cause and effect, reasoning about the physical world, and more (Marcus, 2018).

They thus surmise that creating an AI that can do those and any other tasks, commonly called artificial general intelligence (AGI for short), will not be achieved by neural networks alone (Marcus, 2022).

They argue that a combination of a neural network approach and a symbolic approach, the so-called neuro-symbolic approach, deserves our hopes for building AGI.

So, are we wasting our time trying to create AGI with only neural network-based architectures?

Where should we place our bets in trying to reach AGI?

This paper hopes to provide a theoretical and practical answer to these questions.
The paper has the following structure.

First of all, a working definition of AGI will be proposed.
Then I will argue that symbolic AI alone will not lead to AGI.
Next, I will argue that neural networks solve some of the caveats of the symbolic approach and that they alone could lead to AGI.
Lastly, I will make a pragmatic argument that neuro-symbolic AI could help us with certain issues that might arise when creating AGI with neural networks.
Finally, I will draw some conclusions and implications for research and engineering from my findings.


## Artificial General Intelligence

To be able to discuss which approach is most likely to lead to a general form of intelligence, we first need a definition of artificial general intelligence (AGI).
While the exact definition can vary between academics in the field, we will regard the following definition.
Artificial general intelligence (AGI) refers to a hypothetical artificial intelligence system that can perform any intellectual task that a human can do.
AGI is sometimes referred to as "strong AI" or "human-level AI" because it is capable of performing at a level comparable to that of a human being in a wide range of cognitive tasks.
In this paper, what is known as the 'existential threat' of AGI will not be discussed.
This paper aims to provide arguments as to which methodology is most likely to create AGI, not to argue if creating AGI is desirable or what its effects on society might be.
Now that we have a definition of AGI, we will discuss the three approaches and some arguments for why they could (not) lead to AGI.


## Symbolic AI and AGI, a cautionary tale

Symbolic AI is inspired by human cognition, specifically the way humans manipulate abstract symbols and logic to reason about the world.

Symbolic AI uses explicit knowledge representation and reasoning using symbols and rules.

These representations and rules have to be programmed by a human coder.

Knowledge is often represented using letters, numbers and words.

Rules are used to manipulate these symbols and to reason with them.

These rules are often logical statements expressed in some formal language, like propositional logic, or predicate logic.

The notion that symbolic AI could lead to AGI, has been around since the time that many see as the inception of the field of AI.

In 1956 the now famous Dartmouth Conference was held.

This is where John McCarthy first coined the term 'artificial intelligence'.

A year prior McCarthy, Minsky, Rochester, and Shannon wrote a proposal to work on artificial intelligence for a summer.

They were very optimistic about their prospects, which is best reflected by the quote: "We propose that a 2 month, 10 man study of artificial intelligence be carried out during the summer of 1956 at Dartmouth College in Hanover, New Hampshire.

The study is to proceed on the basis of the conjecture that every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it.

An attempt will be made to find how to make machines use language, form abstractions and concepts, solve kinds of problems now reserved for humans, and improve themselves.

We think that a significant advance can be made in one or more of these problems if a carefully selected group of scientists work on it together for a summer." (McCarthy, Minsky, Rochester, & Shannon, 1955, p. 1).

They focus on a symbolic approach in their proposal, the main algorithm for a single neuron, also called perceptron, wouldn't be invented for another three years (Rosenblatt, 1958).

While they never specifically mention the term AGI, the report heavily implies many aspects of what most would consider AGI now, which could be created by 10 people in 2 months.

These promises were unfortunately not met.

Many problems that they proposed to solve in 2 months, remained unsolved for several decades more, with a whole field of researchers working on them.

Failure to deliver on these promises lead to two AI winters (Garcez & Lamb, 2023), periods in which funding for AI research dried up almost completely.

So what is it that the symbolic approach lacks in creating AGI?

In my view, there's a theoretical and a practical limitation to symbolic AI that makes it unlikely that it alone will lead to AGI.

### Theoretical: Symbolic AI has a limited capacity to deal with ambiguity

Since symbolic AI systems have a fixed set of symbols and manipulation rules, they struggle to reason with uncertainty or to make probabilistic predictions.

In reality, however, there are many ambiguities with which we reason as humans.

If we for example want to define a certain object in symbolic AI, we need some objective definition of this object, to represent it explicitly as a symbol.

It's easy to see how this can pose problems with a trivial example.

Let's say we want to create a symbol to represent a chair.

When thinking about this problem for a while, it will inevitably become obvious that many properties of a chair don't hold for all chairs.

Not all chairs have 4 legs, not all chairs have a back to lean against.

A modern art interpretation of a chair might bear almost no resemblance to other chairs, while still being a chair by definition.

Some might even disagree about whether this is a chair or not.

There is thus possible uncertainty about what exactly defines a chair.

We can see that it is hard to imagine a good definition for a concept as mundane as a chair, let alone something of higher abstraction level or complexity.

This issue arises from the very way meaning arises from reality for humans.
Our definition of any object is defined by the collective subjective experience of the object.

We are shown examples of what chairs are all our lives, by which we create some abstract notion of the distribution of chairs that exist in the world.

With that knowledge, we can say with a certain degree of confidence that a novel object is a chair.

This degree of confidence, or uncertainty, is inherently missing from the symbolic AI approach.


### Practical: Labor intensity & scale issues

To encode knowledge into symbolic AI systems, skilled programmers and domain experts need to work together effectively to create rules and representations that capture the relevant knowledge of different domains.

Doing this for all human knowledge would be an extremely laborious and tedious task.

This would mean that to create an AGI, programmers have to go around to experts of all different domains that we want to include in our system and encode their knowledge into the system.
Even if this monstrous task could successfully be completed, it would not be scalable.
Human knowledge (luckily) increases at an incredibly vast rate.
Updating all knowledge as it is discovered and created by humans, is simply not feasible.
In the literature, this is also known as the 'knowledge acquisition bottleneck' (Browning & LeCun, 2022).

These limitations are hardly an exhaustive list of why symbolic AI alone will not lead to AGI, but they are sufficient.

Now we will discuss the connectionist AI approach, and see how these issues are mitigated.


## The case for connectionist AI

Connectionist AI systems, also known as artificial neural networks, are artificial intelligence systems inspired by the structure and functioning of biological neural networks.
In a neural network, simple computing units called neurons are interconnected in some way to form a complex network.

Each input to a neuron has a certain weight attached to it.
The weighted sum plus a bias term is calculated and the result is passed through a non-linear activation function such as a sigmoid.
These outputs are then taken as inputs for the next layer.
Adjusting the values of the weights and biases of all neurons in the network is how the network 'learns'.
This is usually done by giving the network a set of inputs, with a known desired output.
The degree to which the network is wrong, known as the error or loss, is the difference between the prediction of the network and the actual output.
Using an algorithm called backpropagation (Rumelhart, Hinton & Williams, 1986), the weights and biases are adjusted to minimize the error.

Deep learning is a term often used when talking about neural networks and it refers to the fact that when a network has a lot of layers of neurons stacked on top of each other, a network is 'deep'.

Connectionist approaches, solve some of the issues of symbolic AI.

Because the nature of connectionist AI is statistical, it can inherently deal with uncertainty.

Neural networks can model functions about the world with some degree of certainty, by learning from data.

Learning for example how a chair looks, is done by seeing a wide range of examples from the distribution of possible chairs.

A neural network will then classify an object not deterministically with a yes or no on whether that object is a chair but will give a probability that this object is a chair.

The connectionist approach is also much less labor intensive.

While supervised learning, learning from human-labeled data, still requires a lot of human work.

Humans have to label datasets so that neural networks can extract patterns in the inputs that correspond to these outputs during the training phase.

The amount of information that needs to be encoded by humans is greatly reduced but is still required, and might still not be fully scalable.

Unsupervised or semi-supervised learning has however also made breakthroughs recently.
Large language models such as OpenAI's GPT-4 for example, are trained on raw text data in an unsupervised way.

Reinforcement learning with human feedback (RLHF) is used to tune the model after it has been trained without supervision (Ouyang et al., 2022).

This is still some amount of human labor but the vast majority of learning can be done without a human in the loop.j

This allows LLMs like GPT-4 to gobble up all raw text data that is available on the web, and learn from it.

A task that would simply be infeasible to do by hand.

So we can see that the connectionist approach solves some of the fundamental theoretical and practical issues that symbolic AI has.

But what are some limitations of neural networks that people propose, claiming that neural networks alone cannot reach AGI?

Will we fall again for the same premature hype that was present in the 1950s, to inevitably face another AI winter after expectations aren't met?

I will make an argument that the Transformer architecture shows no theoretical limitations for reaching AGI.

### The transformer model can learn anything, including symbols

The main critique of neural network models reaching AGI, is as mentioned in the introduction, that they fail at common sense reasoning, cause and effect, reasoning about the physical world, and more (Marcus, 2018).

It's often said that a symbolic approach is needed to truly achieve these capibilities, since from studies in cognitive science it seems like this is how humans do this by nature (Cesana-Arlotti et al., 2018).

My argument is that a tranformer can theoretically learn anything, including this symbolic approach, which makes an explicit symbolic part not theoretically needed.

The argument goes as follows.

1. Transformer-based neural networks are general purpose, differentiable computers (Vaswani et al., 2017), (Giannou et al., 2023).
2. Such transformers have attention layers, which are shown to be Turing complete (Pérez, Barceló, & Marinkovic, 2021), 
3. They can thus emulate any computer program
4. They are therefore able to represent any symbolic AI system in their weights
5. So if we assume that symbols are indeed fundamental to general intelligence, these could be learned from data by a transformer.
6. Thus a neural network approach, a transformer, can reach AGI.

Gary Marcus acknowledges that while he thinks this is unlikely, he doesn't think it is impossible (2022).

He then says that such a system, a connectionist system that learns to represent symbols and manipulate them, is in fact a hybrid system, with symbolic and connectionist part.
Therefore he concludes that his thesis holds, a connectionist approach alone will not lead to AGI.

From a methodological perspective this is a weak argument, since the methodology of the system is still purely connectionist.
What the system has learned in it's weights, doesn't define the architecture.

Such a system would be a purely connectionist AI, that has learned symbolic representations in its weights.

It's evident from the progress that is made each year by these connectionist systems, that models are improving steadily at these limitations, showing impressive abilities to manipulate symbols, displaying some level of common-sense reasoning, compositionality, multilingual competency, some logical and mathematical abilities (Browning & Lecun, 2022). 

As these technologies progress, previous limitations either vanish altogether, or at least diminish. 

Take for example Marcus' argument that neural networks haven't successfully learned symbolic manipulation properly, as examplated by the lack of ability to correctly multiply 2 large numbers (2022).

While this is true and still present in contemporary models, it is meant as an argument to dimish the mathematical skill of the these LLMs.

I actually think that this shows that the intelligence is becoming more human-like.
Many humans are unable to multiply two large numbers in their head just like that, but they might still be able to understand how certain mathematical concepts work and relate together.
LLMs now work similarly, with GPT-4 that still makes these multiplication mistakes, while also scoring in the 89th percentile on the American SAT Math test.




<!-- #### Data hungriness -->
<!-- Marcus mentions deep learning (a form of connectionism that has many layers of neurons) is far too data-hungry (2018). -->
<!-- The main argument is that humans can learn complex rules quicker and more efficiently. -->
<!-- He mentions that currently, deep learning lacks a mechanism for learning abstractions through explicit verbal definition, and works best when there is a lot of training data available. -->
<!-- While this is an undisputed fact, it is a bit of an oversimplification to antropomorphise systems like this. -->
<!-- When humans are faced with a verbal description, they have had years and years of learning. -->
<!-- It takes humans a long time to grasp these concepts, as shown by the amount of time most people spend in school in their younger years. -->
<!-- A neural network usually has to learn things from scratch. -->
<!-- It doesn't have the benefit of having parents that continuously talk to it, have it read books of increasing difficulty, and eventually teachers who meticulously unfold the complexities of our world. -->
<!-- Humans are data-hungry in a similar way, we are just trained much more than neural networks are. -->
<!-- Once a network has been trained, it should be able to complete this task even more quickly than a human. -->
<!-- The latest transformer-based large language models such as GPT-4 have no problem answering questions like this whatsoever. -->
<!-- They indeed need much more training data than any human would ever need to learn this, but since we haven't exactly learned how the human brain works, this seems like the best surrogate we have at the moment. -->
<!---->
<!-- #### Deep learning is shallow and has limited capacity for transfer -->
<!---->
<!-- While this is a known problem in deep neural networks that have been trained, I don't find this a compelling argument about the possibility of transfer. -->
<!-- Surely deep neural networks have often been used for specific use cases, where transferring to other domains was seen as hard. -->
<!-- But again if we look at transformer-based large language models, we can see that such a deep learning system is able to wield patterns from learned data in practically all fields. -->
<!---->
<!-- Also with the advent of transfer learning, this is not as true as it may be used to be. -->
<!-- Websites like HuggingFace exist, where different (pre-trained) neural networks are downloadable for different tasks. -->
<!-- These can be used with their original weights and retrained quickly on a new set of data. -->
<!-- While I agree that generalizability is important to take into account when developing AGI, I don't see any theoretical reason why deep learning couldn't be able to become fully generalized. -->
<!-- Furthermore, I don't see how this issue could be addressed by symbolic AI, since this approach is theoretically unable to transfer to novel domains, as it's constrained to the symbols and rules it has been programmed with. -->
<!---->
<!-- #### Deep learning has no natural way to deal with hierarchical structure -->
<!---->
<!-- Here Marcus leans on the assumption that the work of the linguist Noam Chomsky about the hierarchical structure of language holds. -->
<!-- He correctly states that neural networks can't represent this hierarchical structure of language directly.  -->
<!-- But again, recent advances in large language models have people starting to question if this model holds and if its relevant for natural language generation. -->
<!-- Even without this representation of language, LLMs can generate text that is largely indistinguishable from human language. -->
<!-- So if the results show that language can be modeled to such a high level without the necessity of a representation that is according to the theories, should one hold on to the theory, or decide that it isn't needed? -->
<!---->
<!-- #### Deep learning thus far cannot inherently distinguish causation from correlation  -->
<!---->
<!-- I agree with this point, and this is in my view the main obstacle for deep learning. -->
<!---->
<!-- #### Deep learning presumes a largely stable world, in ways that may be problematic -->
<!---->
<!-- While this is true with frozen weights, a neural network can be kept adaptable, and can learn from experience as it has been deployed. -->
<!-- New information can adjust the values of the weights as the system is deployed. -->
<!-- Moreover, symbolic AI has no real scalable way to deal with this uncertain, unstable world, and therefore I still believe that currently, neural networks have the potential to deal with this better than any other architecture. -->
<!---->
<!-- #### Deep learning thus far works well as an approximation, but its answers often cannot be fully trusted  -->
<!---->
<!-- I agree with this point, which is tied to the statistical nature of neural networks. -->
<!-- In the discussion of neuro symbolic AI this will be discussed further. -->
<!---->
<!-- #### Deep learning thus far is difficult to engineer with  -->
<!---->
<!-- Deep learning has proven to be a highly effective approach for solving complex problems in a variety of domains, from image and speech recognition to natural language processing and autonomous driving. While it may be true that deep learning can be challenging to engineer, this is not a reason to discount its potential. In fact, the difficulty of deep learning is precisely what makes it such a valuable tool for solving difficult problems. The complexity of deep learning algorithms allows them to learn complex patterns in data that would be impossible for a human to manually engineer. Furthermore, advances in deep learning research and tools have made it increasingly accessible and easier to use, with pre-trained models and libraries readily available to developers. Rather than shying away from the challenge of deep learning, we should embrace it as an opportunity to push the boundaries of what is possible with artificial intelligence. -->



## The pragmatic case for neurosymbolic AI

Neurosymbolic AI, also known as hybrid AI, combines the strengths of both symbolic AI and connectionist AI systems.
Neurosymbolic AI combines these two approaches by using neural networks to learn from data and symbolic reasoning to represent knowledge and make decisions.

A good example of such a system is the alphaGO system created by Google's Deep Mind.
The systems learned to play go, by using a combination of a neural network, and a symbolic approach, a beam search algorithm.
Various degrees of combinations between the two are possible (Garcez & Lamb, 2023).

Combining a connectionist with a symbolic approach could be beneficial.
It could combine the impressive results of large deep learning systems, with the rigor and deterministic safety of symbolic AI.
Symbolic AI could introduce some basic axioms that are (largely) undisputed that could be used as a ground truth.
Physical laws and representations of our biological anatomy come to mind.
It could however also be in the way of the learning process, since adding human data to a system could create bias.
But for this combination to make sense, we need to ask ourselves the question, can a connectionist system learn how to do symbolic manipulation from data?
If so, then it could be feasible to think that a neurosymbolic approach could be reached by only using a neural network architecture.

This point is heavily debated on.
It poses the question if symbols are fundamental, or a learned feat.
There is evidence from infants that they can already do symbol manipulation.

My question is, does it matter how it works in humans?
Should we not take a pragmatic view and do research based on what we think will work?
Since neural networks keep on improving, let's keep on investing time and money in them to solve hard problems.
If a wall is going to be hit, for which I have not yet seen any real hard indications or evidence, alternative approaches can be found.

<!-- - Can leverage benefits of the connectionist approach, adds common sense knowledge/reasoning. -->
<!-- - Can add a priori knowledge to the connectionist system. -->
<!-- - Can validate logical truths, identity, associativity, etc. -->
<!-- - Adding knowledge representation and rule based reasoning might still be labour intensive. -->
<!-- - Human knowledge might be in the way of the learning -->
<!-- - Combination of nature and nurture -->


## Conclusion

- A lot of discussion from both fronts, tribalism is not helpful.
- An interdisciplinary approach will probably be helpful.
- But, deep learning, specifically transformer architectures haven't hit the predicted wall as of yet, continued research is probably needed.
- Maybe a whole new approach is needed to achieve AGI.

## References

Garcez, A. D. A., & Lamb, L. C. (2023). Neurosymbolic AI: the 3rd wave. *Artificial Intelligence Review*, 1-20.

Marcus, G. (2022). Deep learning alone isn't getting us to human-like AI. *Noema*

Marcus, G. (2018). Deep learning: A critical appraisal. *arXiv preprint arXiv:1801.00631*.

Browning, J., & LeCun, Y. (2022, June 16). What AI Can Tell Us About Intelligence. Noema Magazine. Retrieved April 7, 2023, from https://noemamag.com/what-ai-can-tell-us-about-intelligence/

McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (1956). A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence. Retrieved from http://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html

Rosenblatt, F. (1958). The perceptron: A probabilistic model for information storage and organization in the brain. *Psychological Review*, 65(6), 386–408. https://doi-org.proxy.library.uu.nl/10.1037/h0042519

Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. nature, 323(6088), 533-536.

Bubeck, S., Chandrasekaran, V., Eldan, R., Gehrke, J., Horvitz, E., Kamar, E., ... & Zhang, Y. (2023). Sparks of artificial general intelligence: Early experiments with gpt-4. arXiv preprint arXiv:2303.12712.

Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., ... & Polosukhin, I. (2017). Attention is all you need. Advances in neural information processing systems, 30.

Pérez, J., Barceló, P., & Marinkovic, J. (2021). Attention is turing complete. The Journal of Machine Learning Research, 22(1), 3463-3497.

Giannou, A., Rajput, S., Sohn, J. Y., Lee, K., Lee, J. D., & Papailiopoulos, D. (2023). Looped transformers as programmable computers. arXiv preprint arXiv:2301.13196.

Cesana-Arlotti, N., Martín, A., Téglás, E., Vorobyova, L., Cetnarski, R., & Bonatti, L. L. (2018). Precursors of logical reasoning in preverbal human infants. Science, 359(6381), 1263-1266.

OpenAI. (2023). GPT-4 Technical Report. arXiv preprint arXiv:2303.08774.

Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., ... & Lowe, R. (2022). Training language models to follow instructions with human feedback. Advances in Neural Information Processing Systems, 35, 27730-27744.

Alexander, S. (2022, June 7). My Bet: AI Size Solves Flubs. Astral Codex Ten. https://astralcodexten.substack.com/p/my-bet-ai-size-solves-flubs.

More to come...
