export const aiLogicContent = {
  title: "AI Logic Course",
  author: "Comparative Study of Traditional and AI Logic",
  sections: [
    {
      id: "fundamental-concepts",
      title: "1. The Fundamental Concepts of Logic: Traditional vs. AI Approaches",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>1.1 The Concept of Inference</strong></p>

<p class="document-paragraph"><strong>Traditional View</strong></p>
<p class="document-paragraph">In traditional logic, to make an inference is to form a new belief on the basis of an old one. Consider the example from the original text: When Larry moves in and valuables start disappearing, with no other explanation available, we infer that Larry stole them. Traditional logic divides knowledge into:</p>

<p class="document-paragraph">- Direct (non-inferential) knowledge<br/>
- Indirect (inferential) knowledge</p>

<p class="document-paragraph">While some argue all knowledge is inferential, traditional logic maintains that some knowledge (like immediate sensory experience) is more direct than others.</p>

<p class="document-paragraph"><strong>AI Perspective</strong></p>
<p class="document-paragraph">AI systems transform this conception of inference. Rather than forming discrete beliefs, an AI system:</p>

<p class="document-paragraph">- Makes inferences by activating patterns in neural networks based on learned associations<br/>
- Doesn't distinguish between "direct" and "indirect" knowledge - all knowledge exists as weighted connections<br/>
- Generates outputs based on statistical patterns rather than discrete logical steps<br/>
- Can make multiple parallel inferences simultaneously<br/>
- Operates on fuzzy, probabilistic patterns rather than binary true/false beliefs</p>

<p class="document-paragraph"><strong>1.2 Types of Inference</strong></p>

<p class="document-paragraph"><strong>Traditional View</strong></p>
<p class="document-paragraph">Classical logic recognizes two fundamental types:</p>
<p class="document-paragraph">1. Deductive inference: Premises make conclusion 100% certain<br/>
&nbsp;&nbsp;- Example: "Smith drives a Rolls Royce; A Rolls Royce is a car; Therefore, Smith drives a car"</p>

<p class="document-paragraph">2. Inductive inference: Premises support but don't guarantee conclusion<br/>
&nbsp;&nbsp;- Example: "Smith drives a Rolls Royce and lives in large house; Therefore, Smith is wealthy"</p>

<p class="document-paragraph"><strong>AI Perspective</strong></p>
<p class="document-paragraph">AI systems blur this distinction, operating through:</p>

<p class="document-paragraph">1. Pattern Recognition: Matching current inputs to learned patterns<br/>
&nbsp;&nbsp;- Neither purely deductive nor inductive<br/>
&nbsp;&nbsp;- Based on similarity scores and activation thresholds<br/>
&nbsp;&nbsp;- Confidence varies continuously rather than being binary</p>

<p class="document-paragraph">2. Chain-of-Thought Reasoning: Breaking problems into steps<br/>
&nbsp;&nbsp;- Combines pattern matching with sequential processing<br/>
&nbsp;&nbsp;- Can appear deductive but still fundamentally statistical<br/>
&nbsp;&nbsp;- Multiple valid paths may exist simultaneously</p>
</div>`
    },
    {
      id: "entailment-patterns",
      title: "1.3 Entailment vs. Pattern Activation",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Traditional View</strong></p>
<p class="document-paragraph">Classical logic defines entailment as: Statement A entails statement B if B cannot be false when A is true. This is a strict, binary relationship based on necessary logical connections.</p>

<p class="document-paragraph"><strong>AI Perspective</strong></p>
<p class="document-paragraph">AI systems replace entailment with pattern activation:</p>
<p class="document-paragraph">- Patterns activate other patterns based on learned associations<br/>
- Activation strength varies continuously<br/>
- Context-dependent rather than absolute<br/>
- Multiple patterns can partially activate simultaneously<br/>
- Based on statistical regularities rather than necessary connections</p>

<p class="document-paragraph"><strong>1.4 Confirmation vs. Confidence Scores</strong></p>

<p class="document-paragraph"><strong>Traditional View</strong></p>
<p class="document-paragraph">Traditional logic sees confirmation as: Statement A confirms statement B if B is more likely given A than without it. This is still based on discrete propositions and truth values.</p>

<p class="document-paragraph"><strong>AI Perspective</strong></p>
<p class="document-paragraph">AI systems use confidence scores that:</p>
<p class="document-paragraph">- Range continuously from 0 to 1<br/>
- Are context-dependent<br/>
- Don't necessarily follow probability rules<br/>
- Reflect pattern strength rather than truth<br/>
- Can be inconsistent across contexts<br/>
- Are influenced by training data distribution</p>
</div>`
    },
    {
      id: "validity-reliability",
      title: "1.5 Validity and Soundness vs. Reliability and Robustness",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Traditional View</strong></p>
<p class="document-paragraph">Classical logic distinguishes:</p>
<p class="document-paragraph">- Valid arguments: Premises, if true, guarantee conclusion<br/>
- Sound arguments: Valid arguments with true premises</p>

<p class="document-paragraph"><strong>AI Perspective</strong></p>
<p class="document-paragraph">AI systems are evaluated on:</p>
<p class="document-paragraph">- Reliability: Consistency of outputs for similar inputs<br/>
- Robustness: Performance on novel or edge cases<br/>
- Calibration: Accuracy of confidence scores<br/>
- Generalization: Performance outside training distribution</p>

<p class="document-paragraph"><strong>1.6 Types of Reasoning</strong></p>

<p class="document-paragraph"><strong>Traditional View</strong></p>
<p class="document-paragraph">Classical logic recognizes:</p>
<p class="document-paragraph">1. Induction by enumeration: Inferring general rules from specific cases<br/>
2. Inference to the best explanation: Positing causes to explain effects</p>

<p class="document-paragraph"><strong>AI Perspective</strong></p>
<p class="document-paragraph">AI systems employ:</p>
<p class="document-paragraph">1. Pattern Matching: Finding similarities in high-dimensional spaces<br/>
&nbsp;&nbsp;- More flexible than traditional induction<br/>
&nbsp;&nbsp;- Can handle partial matches<br/>
&nbsp;&nbsp;- Works with fuzzy boundaries</p>

<p class="document-paragraph">2. Chain-of-Thought: Breaking problems into steps<br/>
&nbsp;&nbsp;- Combines multiple patterns<br/>
&nbsp;&nbsp;- Can generate novel solutions<br/>
&nbsp;&nbsp;- Multiple valid paths possible</p>
</div>`
    },
    {
      id: "limitations-capabilities",
      title: "1.7 Limitations and Capabilities",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Traditional View</strong></p>
<p class="document-paragraph">Classical logic acknowledges that induction by enumeration is weaker than inference to the best explanation, viewing causal reasoning as fundamental.</p>

<p class="document-paragraph"><strong>AI Perspective</strong></p>
<p class="document-paragraph">AI systems:</p>
<p class="document-paragraph">- Can handle ambiguity and uncertainty<br/>
- Make "fuzzy" inferences based on partial matches<br/>
- Generate novel combinations of learned patterns<br/>
- May exhibit emergent reasoning capabilities<br/>
- Are limited by training data and architecture<br/>
- May not follow classical logical rules</p>

<p class="document-paragraph"><strong>1.8 Processing Types</strong></p>

<p class="document-paragraph"><strong>Traditional View</strong></p>
<p class="document-paragraph">Traditional logic distinguishes:</p>
<p class="document-paragraph">- Formal entailment: Based on structural properties<br/>
- Informal entailment: Based on meaning relationships</p>

<p class="document-paragraph"><strong>AI Perspective</strong></p>
<p class="document-paragraph">AI systems combine:</p>
<p class="document-paragraph">- Parallel Pattern Processing: Simultaneous activation of multiple patterns<br/>
- Sequential Processing: Step-by-step reasoning chains</p>
<p class="document-paragraph">Both types are fundamentally pattern-based rather than rule-based.</p>
</div>`
    },
    {
      id: "nature-knowledge",
      title: "1.9 The Nature of Knowledge",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Traditional View</strong></p>
<p class="document-paragraph">Traditional logic views knowledge as:</p>
<p class="document-paragraph">- Propositional<br/>
- Truth-conditional<br/>
- Rule-based<br/>
- Categorically distinct</p>

<p class="document-paragraph"><strong>AI Perspective</strong></p>
<p class="document-paragraph">AI systems treat knowledge as:</p>
<p class="document-paragraph">- Distributed patterns<br/>
- Continuously varying<br/>
- Context-dependent<br/>
- Fuzzy boundaries<br/>
- Emergent properties<br/>
- Statistical regularities</p>
</div>`
    },
    {
      id: "exercises",
      title: "Exercises: Traditional and AI Logic",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Multiple Choice Questions (1-10)</strong></p>

<p class="document-paragraph"><strong>1. Which statement best describes the difference between traditional and AI inference?</strong></p>
<p class="document-paragraph">a) Traditional inference is always correct, while AI inference is always probabilistic<br/>
b) Traditional inference moves from one discrete belief to another, while AI inference activates patterns based on learned associations<br/>
c) Traditional inference is faster, while AI inference is slower<br/>
d) Traditional inference requires computers, while AI inference can be done by humans</p>

<p class="document-paragraph"><strong>2. In AI systems, knowledge exists as:</strong></p>
<p class="document-paragraph">a) A series of true/false statements<br/>
b) Weighted connections in neural networks<br/>
c) A collection of syllogisms<br/>
d) Direct sensory experiences</p>

<p class="document-paragraph"><strong>3. The traditional distinction between deductive and inductive inference is transformed in AI systems into:</strong></p>
<p class="document-paragraph">a) True and false patterns<br/>
b) Strong and weak connections<br/>
c) A continuous spectrum of pattern activation strengths<br/>
d) Binary neural states</p>

<p class="document-paragraph"><strong>4. A key difference between traditional confirmation and AI confidence scores is:</strong></p>
<p class="document-paragraph">a) Traditional confirmation is always accurate<br/>
b) AI confidence scores are always higher<br/>
c) Traditional confirmation follows probability rules, while AI confidence scores may not<br/>
d) AI confidence scores are always binary</p>

<p class="document-paragraph"><strong>5. In traditional logic, a sound argument is:</strong></p>
<p class="document-paragraph">a) A valid argument with true premises<br/>
b) Any argument that reaches a true conclusion<br/>
c) An argument with consistent premises<br/>
d) A deductive argument</p>

<p class="document-paragraph"><strong>Short Answer Questions (11-15)</strong></p>

<p class="document-paragraph">11. Explain how AI systems transform the traditional distinction between "direct" and "indirect" knowledge. Use examples.</p>

<p class="document-paragraph">12. Compare and contrast how traditional logic and AI systems handle uncertainty in reasoning.</p>

<p class="document-paragraph">13. Explain why traditional logical notation (P→Q) might be inadequate for describing AI reasoning processes.</p>

<p class="document-paragraph">14. How does AI's pattern matching capability differ from traditional induction by enumeration?</p>

<p class="document-paragraph">15. Describe a real-world scenario where AI logic and traditional logic might reach different conclusions. Explain why.</p>

<p class="document-paragraph"><strong>Analysis Questions (16-20)</strong></p>

<p class="document-paragraph"><strong>16. Consider the following argument:</strong><br/>
Premise: Every swan observed in Europe was white<br/>
Conclusion: All swans are white</p>

<p class="document-paragraph">a) How would traditional logic classify this argument?<br/>
b) How would an AI system approach this reasoning?<br/>
c) Compare the strengths and weaknesses of each approach.</p>

<p class="document-paragraph"><strong>17. You're building a medical diagnosis system:</strong></p>
<p class="document-paragraph">a) How would a traditional logic-based system approach diagnosis?<br/>
b) How would an AI-based system approach it?<br/>
c) What are the advantages and disadvantages of each?</p>
</div>`
    }
  ]
};