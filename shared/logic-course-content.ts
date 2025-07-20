export const logicCourseContent = {
  title: "Introduction to Symbolic Logic",
  author: "J.-M. Kuczynski PhD - Course Edition",
  sections: [
    {
      id: "week-1-basic-concepts",
      title: "Week 1: Basic Concepts, Notation, and Logical Operators",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Introduction to Logic</strong></p>
<p class="document-paragraph">Logic is the study of valid reasoning. In this course, we'll focus on symbolic logic, which uses special symbols and precise rules to analyze and evaluate arguments. Unlike informal logic, symbolic logic gives us tools to determine validity with mathematical precision.</p>

<p class="document-paragraph"><strong>Basic Concepts</strong></p>
<p class="document-paragraph">• <strong>Statement (Proposition)</strong>: A sentence that is either true or false, but not both<br/>
• <strong>Argument</strong>: A sequence of statements where one (the conclusion) is claimed to follow from the others (the premises)<br/>
• <strong>Validity</strong>: An argument is valid if it's impossible for all premises to be true while the conclusion is false<br/>
• <strong>Soundness</strong>: A valid argument with true premises</p>

<p class="document-paragraph"><strong>Basic Logical Symbols</strong></p>
<p class="document-paragraph">1. <strong>Negation (¬)</strong>: "not"<br/>
&nbsp;&nbsp;Example: If p = "It is raining"<br/>
&nbsp;&nbsp;Then ¬p = "It is not raining"</p>

<p class="document-paragraph">2. <strong>Conjunction (∧)</strong>: "and"<br/>
&nbsp;&nbsp;Example: If p = "It is cold" and q = "It is windy"<br/>
&nbsp;&nbsp;Then p ∧ q = "It is cold and windy"</p>

<p class="document-paragraph">3. <strong>Disjunction (∨)</strong>: "or"<br/>
&nbsp;&nbsp;Example: If p = "I will study" and q = "I will fail"<br/>
&nbsp;&nbsp;Then p ∨ q = "I will study or I will fail"</p>

<p class="document-paragraph">4. <strong>Conditional (→)</strong>: "if...then"<br/>
&nbsp;&nbsp;Example: If p = "It rains" and q = "The ground is wet"<br/>
&nbsp;&nbsp;Then p → q = "If it rains, then the ground is wet"</p>

<p class="document-paragraph"><strong>Material vs. Strict Implication</strong></p>
<p class="document-paragraph">1. <strong>Material Implication (→)</strong><br/>
&nbsp;&nbsp;Truth-functional: defined purely by truth values<br/>
&nbsp;&nbsp;False only when antecedent is true and consequent is false<br/>
&nbsp;&nbsp;Example: "If it rains, then the ground is wet"</p>

<p class="document-paragraph">2. <strong>Strict Implication (⊃)</strong><br/>
&nbsp;&nbsp;Modal: involves necessary connection<br/>
&nbsp;&nbsp;Example: "If x is a bachelor, then x is unmarried"<br/>
&nbsp;&nbsp;Represents logical necessity rather than mere material implication</p>

<p class="document-paragraph"><strong>Translation Practice</strong></p>
<p class="document-paragraph">From English to Symbolic Notation:<br/>
1. "It's not both sunny and warm"<br/>
&nbsp;&nbsp;Let p = "It's sunny", q = "It's warm"<br/>
&nbsp;&nbsp;Translation: ¬(p ∧ q)</p>

<p class="document-paragraph">2. "Either I'll go to the party or I'll stay home and study"<br/>
&nbsp;&nbsp;Let p = "I'll go to the party", q = "I'll stay home", r = "I'll study"<br/>
&nbsp;&nbsp;Translation: p ∨ (q ∧ r)</p>

<p class="document-paragraph">From Symbolic Notation to English:<br/>
1. p → (q ∨ r)<br/>
&nbsp;&nbsp;Let p = "It rains", q = "I take an umbrella", r = "I stay inside"<br/>
&nbsp;&nbsp;Translation: "If it rains, then I'll either take an umbrella or stay inside"</p>

<p class="document-paragraph"><strong>Practice Exercises</strong></p>
<p class="document-paragraph">Translate these statements into symbolic notation:<br/>
1. "If I study hard and get enough sleep, then I'll pass the exam"<br/>
2. "It's not true that I'll both go to the movies and save money"<br/>
3. "Either I'll finish my homework or I won't watch TV"</p>
</div>`
    },
    {
      id: "week-2-truth-tables",
      title: "Week 2: Truth Tables and Elementary Proofs",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>The Propositional Calculus</strong></p>
<p class="document-paragraph">Propositional calculus is a formal system for representing and analyzing logical relationships between propositions. It provides rules for:<br/>
1. Constructing well-formed formulas<br/>
2. Evaluating truth values<br/>
3. Making valid inferences</p>

<p class="document-paragraph"><strong>Truth Tables</strong></p>
<p class="document-paragraph">Truth tables systematically show all possible truth value combinations for propositional statements.</p>

<p class="document-paragraph"><strong>Basic Truth Tables</strong></p>

<p class="document-paragraph"><strong>Negation (¬)</strong><br/>
| p | ¬p |<br/>
|---|-----|<br/>
|T|F|<br/>
|F|T|</p>

<p class="document-paragraph"><strong>Conjunction (∧)</strong><br/>
|p|q|p∧q|<br/>
|---|---|-------|<br/>
|T|T|T|<br/>
|T|F|F|<br/>
|F|T|F|<br/>
|F|F|F|</p>

<p class="document-paragraph"><strong>Disjunction (∨)</strong><br/>
|p|q|p∨q|<br/>
|---|---|-------|<br/>
|T|T|T|<br/>
|T|F|T|<br/>
|F|T|T|<br/>
|F|F|F|</p>

<p class="document-paragraph"><strong>Conditional (→)</strong><br/>
|p|q|p→q|<br/>
|---|---|-------|<br/>
|T|T|T|<br/>
|T|F|F|<br/>
|F|T|T|<br/>
|F|F|T|</p>

<p class="document-paragraph"><strong>Elementary Proofs</strong></p>
<p class="document-paragraph">Proofs in propositional logic use rules of inference to derive conclusions from premises.</p>

<p class="document-paragraph"><strong>Key Rules of Inference:</strong></p>

<p class="document-paragraph">1. <strong>Modus Ponens (MP)</strong><br/>
From p → q and p, infer q<br/>
Example:<br/>
&nbsp;&nbsp;If it rains, the ground is wet (p → q)<br/>
&nbsp;&nbsp;It is raining (p)<br/>
&nbsp;&nbsp;Therefore, the ground is wet (q)</p>

<p class="document-paragraph">2. <strong>Modus Tollens (MT)</strong><br/>
From p → q and ¬q, infer ¬p<br/>
Example:<br/>
&nbsp;&nbsp;If it rains, the ground is wet (p → q)<br/>
&nbsp;&nbsp;The ground is not wet (¬q)<br/>
&nbsp;&nbsp;Therefore, it is not raining (¬p)</p>

<p class="document-paragraph">3. <strong>Disjunctive Syllogism (DS)</strong><br/>
From p ∨ q and ¬p, infer q<br/>
Example:<br/>
&nbsp;&nbsp;Either I'll study or I'll fail (p ∨ q)<br/>
&nbsp;&nbsp;I'm not studying (¬p)<br/>
&nbsp;&nbsp;Therefore, I'll fail (q)</p>

<p class="document-paragraph">4. <strong>Double Negation (DN)</strong><br/>
From ¬¬p, infer p (and vice versa)<br/>
Example:<br/>
&nbsp;&nbsp;It is not the case that it is not raining (¬¬p)<br/>
&nbsp;&nbsp;Therefore, it is raining (p)</p>

<p class="document-paragraph"><strong>De Morgan's Laws</strong></p>
<p class="document-paragraph">These important laws show the relationship between negation and conjunction/disjunction:<br/>
1. ¬(p ∧ q) ≡ (¬p ∨ ¬q)<br/>
2. ¬(p ∨ q) ≡ (¬p ∧ ¬q)</p>

<p class="document-paragraph">Example: "It's not true that both the sun is shining and it's warm" ≡ "Either the sun is not shining or it's not warm"</p>
</div>`
    },
    {
      id: "homework-assignments",
      title: "Homework Assignments and Solutions",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Homework 1: Basic Concepts and Notation</strong></p>
<p class="document-paragraph">Total Points: 50</p>

<p class="document-paragraph"><strong>Part 1: Translation (20 points)</strong></p>
<p class="document-paragraph">Translate the following English statements into symbolic logic notation. Let:<br/>
p = "It rains"<br/>
q = "The streets are wet"<br/>
r = "People use umbrellas"<br/>
s = "Traffic slows down"</p>

<p class="document-paragraph">1. "If it rains, then the streets are wet and people use umbrellas." (5 points)<br/>
<strong>Answer:</strong> p → (q ∧ r)</p>

<p class="document-paragraph">2. "Either traffic slows down or it's not raining." (5 points)<br/>
<strong>Answer:</strong> s ∨ ¬p</p>

<p class="document-paragraph">3. "It's not true that when it rains, traffic slows down." (5 points)<br/>
<strong>Answer:</strong> ¬(p → s)</p>

<p class="document-paragraph">4. "If the streets are wet and people use umbrellas, then it must be raining." (5 points)<br/>
<strong>Answer:</strong> (q ∧ r) → p</p>

<p class="document-paragraph"><strong>Part 2: Symbolization (20 points)</strong></p>
<p class="document-paragraph">5. "If John studies and gets tutoring, then he will pass the class. John studies and gets tutoring. Therefore, John will pass the class." (10 points)<br/>
Let s = "John studies"<br/>
Let t = "John gets tutoring"<br/>
Let p = "John will pass the class"<br/>
<strong>Translation:</strong> ((s ∧ t) → p) ∧ (s ∧ t) → p</p>

<p class="document-paragraph">6. "Either Mary goes to the gym or she goes for a run, but not both. If she goes for a run, she will be tired." (10 points)<br/>
Let g = "Mary goes to the gym"<br/>
Let r = "Mary goes for a run"<br/>
Let t = "Mary will be tired"<br/>
<strong>Translation:</strong> ((g ∨ r) ∧ ¬(g ∧ r)) ∧ (r → t)</p>

<p class="document-paragraph"><strong>Part 3: Analysis (10 points)</strong></p>
<p class="document-paragraph">7. Explain the difference between material implication and strict implication using an example of each. (10 points)</p>

<p class="document-paragraph"><strong>Answer:</strong><br/>
Material implication (→) is truth-functional and is false only when the antecedent is true and the consequent is false. Example: "If it rains, then the ground is wet" (p → q). This is a material implication because it's based on observed correlation.</p>

<p class="document-paragraph">Strict implication (⊃) involves logical necessity. Example: "If x is a square, then x has four equal sides." This is a strict implication because it's based on the definition of a square - it's impossible for the antecedent to be true and the consequent false by logical necessity.</p>
</div>`
    },
    {
      id: "advanced-proofs",
      title: "Advanced Proofs and Truth Tables",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Homework 2: Truth Tables and Elementary Proofs</strong></p>
<p class="document-paragraph">Total Points: 50</p>

<p class="document-paragraph"><strong>Part 1: Truth Tables (20 points)</strong></p>
<p class="document-paragraph">1. Construct complete truth tables for the following expressions: (5 points each)</p>

<p class="document-paragraph">a) (p → q) ∧ ¬p</p>
<p class="document-paragraph">| p | q | p → q | ¬p | (p → q) ∧ ¬p |<br/>
|---|---|-------|-----|---------------|<br/>
|T|T|T|F|F|<br/>
|T|F|F|F|F|<br/>
|F|T|T|T|T|<br/>
|F|F|T|T|T|</p>

<p class="document-paragraph">b) ¬(p ∨ q) ↔ (¬p ∧ ¬q)</p>
<p class="document-paragraph">| p | q | p ∨ q | ¬(p ∨ q) | ¬p | ¬q | ¬p ∧ ¬q | ¬(p ∨ q) ↔ (¬p ∧ ¬q) |<br/>
|---|---|-------|-----------|-----|-----|----------|----------------------|<br/>
|T|T|T|F|F|F|F|T|<br/>
|T|F|T|F|F|T|F|T|<br/>
|F|T|T|F|T|F|F|T|<br/>
|F|F|F|T|T|T|T|T|</p>

<p class="document-paragraph"><strong>Part 2: Proofs (20 points)</strong></p>
<p class="document-paragraph">2. Construct proofs for the following arguments using rules of inference. Show each step. (10 points each)</p>

<p class="document-paragraph">a) Prove: q from premises p → q, r → ¬p, r</p>
<p class="document-paragraph"><strong>Answer:</strong><br/>
1. p → q (premise)<br/>
2. r → ¬p (premise)<br/>
3. r (premise)<br/>
4. ¬p (from 2,3 by MP)<br/>
5. p → q (from 1)<br/>
6. q (from 4,5 by MT)</p>

<p class="document-paragraph">b) Prove: ¬p from premises p → q, p → r, ¬q ∨ ¬r</p>
<p class="document-paragraph"><strong>Answer:</strong><br/>
1. p → q (premise)<br/>
2. p → r (premise)<br/>
3. ¬q ∨ ¬r (premise)<br/>
4. Assume p (for reductio)<br/>
5. q (from 1,4 by MP)<br/>
6. r (from 2,4 by MP)<br/>
7. q ∧ r (from 5,6 by ∧I)<br/>
8. Contradiction with 3<br/>
9. Therefore, ¬p</p>

<p class="document-paragraph"><strong>Part 3: Applications (10 points)</strong></p>
<p class="document-paragraph">3. Express these arguments in symbolic form and determine their validity using either a truth table or proof: (5 points each)</p>

<p class="document-paragraph">a) "If it's sunny, I'll go to the beach. If I go to the beach, I'll get a sunburn. It's sunny. Therefore, I'll get a sunburn."</p>
<p class="document-paragraph">Let p = "It's sunny"<br/>
Let q = "I'll go to the beach"<br/>
Let r = "I'll get a sunburn"</p>
<p class="document-paragraph"><strong>Symbolic form:</strong> (p → q) ∧ (q → r) ∧ p ∴ r<br/>
<strong>Proof:</strong><br/>
1. p → q (premise)<br/>
2. q → r (premise)<br/>
3. p (premise)<br/>
4. q (from 1,3 by MP)<br/>
5. r (from 2,4 by MP)<br/>
<strong>Valid argument</strong></p>

<p class="document-paragraph">b) "Either the butler or the maid is guilty. The butler has an alibi. Therefore, the maid is guilty."</p>
<p class="document-paragraph">Let b = "The butler is guilty"<br/>
Let m = "The maid is guilty"</p>
<p class="document-paragraph"><strong>Symbolic form:</strong> (b ∨ m) ∧ ¬b ∴ m<br/>
<strong>This is a valid argument by disjunctive syllogism:</strong><br/>
1. b ∨ m (premise)<br/>
2. ¬b (premise)<br/>
3. m (from 1,2 by DS)</p>
</div>`
    }
  ]
};