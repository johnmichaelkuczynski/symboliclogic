export const godelContent = {
  title: "On the Cardinality of Arithmetical Proof Spaces",
  author: "J.-M. Kuczynski",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: `<div class="document-content">
<p class="document-paragraph">This monograph presents a non-reflexive proof of Gödel's First Incompleteness Theorem. That is: we demonstrate the incompleteness of first-order arithmetic without relying on self-reference, paradoxes, or diagonalization. Instead, we base our proof on a cardinality mismatch: the set of arithmetical truths is countable, but the space of candidate proof-sets over those truths has the cardinality of the continuum. Thus, the system cannot, even in principle, admit a recursively enumerable set of axioms that proves all and only the true arithmetical statements—some truths must go unprovable. This is the substance of Theorem 0.</p>

<p class="document-paragraph">We call this result a non-reflexive proof of incompleteness, in contrast to Gödel's original argument, which crucially relies on self-reference and the arithmetization of syntax. Our proof avoids any appeal to statements like "This sentence is unprovable." It is entirely based on set-theoretic and logical properties of arithmetic and its metatheory.</p>

<p class="document-paragraph"><strong>Defining "Narrowly Arithmetical Truth"</strong></p>
<p class="document-paragraph">Throughout the work, we rely on a distinction between two classes of statements:</p>

<p class="document-paragraph">- <strong>Narrowly Arithmetical Truths (NA)</strong>: truths expressible solely in the language of arithmetic (e.g., 2+2=4, 5·5=25, 7² = 49, etc.), excluding any statements about proofs, provability, or meta-theoretic properties.<br/>
- <strong>Extended Arithmetical Truths (EA)</strong>: truths that may quantify over or refer to sets of such truths, or proofs of such truths (e.g., "There exists a proof of 2+2=4," or "For any proof of a true statement, there exists a shorter proof of an equivalent one").</p>

<p class="document-paragraph">Only NA is recursively enumerable. Once EA is admitted, we enter the non-recursive, non-denumerable domain—and thus, incompleteness becomes inevitable.</p>
</div>`
    },
    {
      id: "theorem-0",
      title: "Theorem 0: Cardinality Gap and Incompleteness",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Statement of Theorem 0</strong></p>
<p class="document-paragraph">Let NA be the set of narrowly arithmetical truths (e.g., basic numerical equalities such as 2 + 2 = 4, 3² = 9, etc.). Suppose that NA is recursively enumerable, and let P(NA) denote its power set.</p>

<p class="document-paragraph">Let ProvableNA(K, φ) be the meta-level relation that holds when a finite subset K ⊆ NA jointly entails φ ∈ NA under some admissible notion of inference.</p>

<p class="document-paragraph">Then: <strong>There is no recursive function that can decide ProvableNA(K, φ) for arbitrary K ⊆ NA and φ ∈ NA.</strong></p>

<p class="document-paragraph">This structural limitation implies that any recursively axiomatizable system attempting to fully internalize arithmetic inference over NA must be incomplete.</p>

<p class="document-paragraph"><strong>Proof of Theorem 0</strong></p>

<p class="document-paragraph">1. <strong>Countability of NA</strong><br/>
The set of narrowly arithmetical truths NA is defined by recursive operations (e.g., addition, multiplication, exponentiation) and is therefore countable—indeed, recursively enumerable.</p>

<p class="document-paragraph">2. <strong>Space of Premise Sets</strong><br/>
Let Pfinite(NA) be the set of finite subsets of NA. This set is also countable.</p>

<p class="document-paragraph">3. <strong>The Provability Function</strong><br/>
Define a function: f : Pfinite(NA) × NA → {0, 1}<br/>
such that f(K, φ) = 1 if and only if K ⊢ φ, i.e., φ is provable from K under a given notion of inference.</p>

<p class="document-paragraph">4. <strong>Explosion of the Inference Space</strong><br/>
Even though Pfinite(NA) is countable, the space of all functions from Pfinite(NA) × NA to {0, 1} is uncountable. In particular, there is no recursively enumerable system that can capture all possible such provability relations unless it can encode uncountably many distinct inference structures—which is impossible.</p>

<p class="document-paragraph">5. <strong>Conclusion</strong><br/>
Therefore, the function ProvableNA(K, φ) cannot be recursive. Any formal system defined over NA will necessarily omit valid inferences, and is therefore incomplete. QED</p>
</div>`
    },
    {
      id: "theorems-1-5",
      title: "Theorems 1-5: Foundational Results",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Theorem 1: Non-Recursiveness of Arithmetic Provability Function</strong></p>
<p class="document-paragraph">Let NA be the set of narrowly arithmetical truths (e.g., "2 + 2 = 4", "3² = 9", etc.). Let ProvableNA(K, φ) denote the meta-level relation that holds when a finite subset K ⊆ NA jointly entails φ ∈ NA.</p>

<p class="document-paragraph"><strong>Then:</strong> There is no recursive function f such that: f(K, φ) = 1 iff K ⊢ φ; f(K, φ) = 0 otherwise.</p>

<p class="document-paragraph">That is, the provability relation over subsets of arithmetic truths cannot be computed recursively.</p>

<p class="document-paragraph"><strong>Theorem 2: Non-Recursiveness of Provability in Natural Language</strong></p>
<p class="document-paragraph">Let E be the set of all well-formed English sentences, excluding those with context-sensitive elements (e.g., tense, indexicals). Let ProvableE(K, φ) denote the meta-level relation: "the finite set of English sentences K ⊆ E jointly entails the sentence φ ∈ E."</p>

<p class="document-paragraph"><strong>Then:</strong> There is no recursive function f such that: f(K, φ) = 1 iff K ⊢ φ (in English); f(K, φ) = 0 otherwise.</p>

<p class="document-paragraph">That is, natural language entailment is not recursively computable, even assuming a clean (i.e., ambiguity-free) subset of English.</p>

<p class="document-paragraph"><strong>Theorem 3: Semantic Truth Outpaces Syntactic Provability</strong></p>
<p class="document-paragraph">The semantic notion of truth in arithmetic models outpaces any syntactic proof system's capacity to capture all valid entailments, establishing a fundamental gap between truth and provability.</p>

<p class="document-paragraph"><strong>Theorem 4: Compression and Incompleteness</strong></p>
<p class="document-paragraph">This philosophical extension explores how the compression of proof information relates to the fundamental incompleteness results, showing that even efficient proof compression cannot overcome the cardinality barriers.</p>

<p class="document-paragraph"><strong>Theorem 5: Meta-Proof Complexity</strong></p>
<p class="document-paragraph">A philosophical point examining the complexity of proofs about proofs, and how this meta-level complexity contributes to the overall incompleteness phenomenon.</p>
</div>`
    },
    {
      id: "theorems-10-15",
      title: "Theorems 10-15: Structural Properties",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Theorem 10: Continuity of Incompleteness</strong></p>
<p class="document-paragraph">This mathematical theorem establishes that incompleteness is not an isolated phenomenon but a continuous property across different formal systems and their extensions.</p>

<p class="document-paragraph"><strong>Theorem 11: Consequence Explosion</strong></p>
<p class="document-paragraph">A philosophical theorem examining how the addition of certain axioms can lead to explosive growth in the set of derivable consequences, while still maintaining incompleteness.</p>

<p class="document-paragraph"><strong>Theorem 12: Recursive vs. Meta-Recursive Domains</strong></p>
<p class="document-paragraph">This philosophical extension distinguishes between recursive and meta-recursive domains, showing how incompleteness arises from the interaction between these different levels of recursion.</p>

<p class="document-paragraph"><strong>Theorem 13: Epistemic Shadows</strong></p>
<p class="document-paragraph">A philosophical concept exploring the "shadows" cast by incomplete knowledge—areas of mathematical truth that remain forever hidden from formal proof systems.</p>

<p class="document-paragraph"><strong>Theorem 14: Diagonal-Free Incompleteness</strong></p>
<p class="document-paragraph">A mathematical observation demonstrating that incompleteness can be established without relying on diagonal arguments or self-reference, purely through cardinality considerations.</p>

<p class="document-paragraph"><strong>Theorem 15: Quantifier Collapse</strong></p>
<p class="document-paragraph">A technical lemma showing how certain quantifier structures collapse under the weight of incompleteness, leading to simplified but still incomplete formal systems.</p>
</div>`
    },
    {
      id: "theorems-20-25",
      title: "Theorems 20-25: Advanced Results",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Theorem 20: Transfinite Divergence</strong></p>
<p class="document-paragraph">A speculative mathematical claim exploring how incompleteness manifests in transfinite contexts, suggesting that the phenomenon extends beyond finite arithmetic into transfinite mathematics.</p>

<p class="document-paragraph"><strong>Theorem 21: Gödel via Cantor</strong></p>
<p class="document-paragraph">A meta-analytical theorem connecting Cantor's diagonal argument to Gödel's incompleteness theorem, but through cardinality rather than self-reference, providing a bridge between set theory and logic.</p>

<p class="document-paragraph"><strong>Theorem 22: Replacing Reflexivity</strong></p>
<p class="document-paragraph">A philosophical programmatic point outlining how reflexive arguments in logic can be systematically replaced with non-reflexive, cardinality-based arguments while maintaining the same fundamental results.</p>

<p class="document-paragraph"><strong>Theorem 23: Proof Compression Theorem</strong></p>
<p class="document-paragraph">A mathematical theorem establishing limits on how much proofs can be compressed while maintaining their logical validity, showing that compression cannot overcome fundamental incompleteness.</p>

<p class="document-paragraph"><strong>Theorem 24: Proof Tree Density</strong></p>
<p class="document-paragraph">A technical lemma analyzing the density of proof trees in the space of all possible proofs, revealing structural constraints that contribute to incompleteness.</p>

<p class="document-paragraph"><strong>Theorem 25: Model Shadowing</strong></p>
<p class="document-paragraph">A speculative mathematical observation about how certain mathematical models cast "shadows" that cannot be captured by any formal proof system, no matter how sophisticated.</p>
</div>`
    },
    {
      id: "theorems-30-35",
      title: "Theorems 30-35: Concluding Results",
      content: `<div class="document-content">
<p class="document-paragraph"><strong>Theorem 30: The Compression Barrier</strong></p>
<p class="document-paragraph">A mathematical theorem establishing fundamental limits on proof compression, showing that no amount of algorithmic compression can overcome the cardinality barriers that lead to incompleteness.</p>

<p class="document-paragraph"><strong>Theorem 31: Anti-Compression via Meta-Layers</strong></p>
<p class="document-paragraph">A mathematical theorem demonstrating how meta-layers in formal systems actively resist compression, creating structural barriers to complete axiomatization.</p>

<p class="document-paragraph"><strong>Theorem 32: Internal vs External Closure</strong></p>
<p class="document-paragraph">A technical theorem distinguishing between internal closure properties (within a formal system) and external closure properties (from a meta-theoretical perspective), showing how this distinction is crucial for understanding incompleteness.</p>

<p class="document-paragraph"><strong>Theorem 33: Meta-Enumerability of Proof Constraints</strong></p>
<p class="document-paragraph">A technical extension examining the meta-level enumerability of constraints on proof construction, revealing how these constraints themselves contribute to incompleteness.</p>

<p class="document-paragraph"><strong>Theorem 34: Formal Incompleteness</strong></p>
<p class="document-paragraph">The concluding theorem that synthesizes all previous results into a comprehensive statement about the formal incompleteness of arithmetic. This theorem establishes that incompleteness is not merely a technical limitation but a fundamental structural feature of any attempt to formalize arithmetic completely.</p>

<p class="document-paragraph">The theorem demonstrates that the cardinality-based approach to incompleteness provides a more fundamental understanding than traditional self-referential approaches, revealing incompleteness as an inevitable consequence of the mathematical structures involved rather than as a clever logical trick.</p>
</div>`
    }
  ]
};