export interface BookContent {
  id: string;
  title: string;
  author: string;
  description: string;
  sections: Array<{
    id: string;
    title: string;
    content: string;
  }>;
}

export interface BookMetadata {
  id: string;
  title: string;
  author: string;
  description: string;
  coverColor: string;
  textColor: string;
}

// Import existing content
import { russellContent } from './russell-content';
import { aiLogicContent } from './ai-logic-content';
import { logicCourseContent } from './logic-course-content';
import { godelContent } from './godel-content';

// Book library with metadata
export const bookLibrary: BookMetadata[] = [
  {
    id: 'russell-mathematical-philosophy',
    title: "Russell's Mathematical Philosophy",
    author: 'J.-M. Kuczynski, PhD',
    description: 'A critical exposition of Bertrand Russell\'s foundational work on mathematical philosophy, exploring set theory, number theory, and the logical foundations of mathematics.',
    coverColor: 'bg-purple-600',
    textColor: 'text-white'
  },
  {
    id: 'ai-logic-course',
    title: 'AI Logic Course',
    author: 'Zhi Systems',
    description: 'A comprehensive comparison of traditional logic and AI approaches to reasoning, exploring how artificial intelligence transforms classical logical concepts.',
    coverColor: 'bg-green-600',
    textColor: 'text-white'
  },
  {
    id: 'logic-course',
    title: 'Logic Course',
    author: 'J.-M. Kuczynski PhD',
    description: 'A structured academic course covering symbolic logic fundamentals, truth tables, proofs, and practical problem-solving with homework assignments.',
    coverColor: 'bg-orange-600',
    textColor: 'text-white'
  },
  {
    id: 'godel-incompleteness',
    title: 'On the Cardinality of Arithmetical Proof Spaces',
    author: 'J.-M. Kuczynski',
    description: 'A non-reflexive proof of Gödel\'s First Incompleteness Theorem based on cardinality arguments rather than self-reference, exploring 35 advanced theorems.',
    coverColor: 'bg-indigo-600',
    textColor: 'text-white'
  }
];

// Book content storage
export const bookContents: Record<string, BookContent> = {
  'russell-mathematical-philosophy': {
    id: 'russell-mathematical-philosophy',
    title: russellContent.title,
    author: russellContent.author,
    description: 'A critical exposition of Bertrand Russell\'s foundational work on mathematical philosophy.',
    sections: russellContent.sections
  },
  'ai-logic-course': {
    id: 'ai-logic-course',
    title: aiLogicContent.title,
    author: aiLogicContent.author,
    description: 'A comprehensive comparison of traditional logic and AI approaches to reasoning.',
    sections: aiLogicContent.sections
  },
  'logic-course': {
    id: 'logic-course',
    title: logicCourseContent.title,
    author: logicCourseContent.author,
    description: 'A structured academic course covering symbolic logic fundamentals.',
    sections: logicCourseContent.sections
  },
  'godel-incompleteness': {
    id: 'godel-incompleteness',
    title: godelContent.title,
    author: godelContent.author,
    description: 'A non-reflexive proof of Gödel\'s incompleteness theorem using cardinality arguments.',
    sections: godelContent.sections
  }
};

export function getBookContent(bookId: string): BookContent | null {
  return bookContents[bookId] || null;
}

export function getAllBooks(): BookMetadata[] {
  return bookLibrary;
}