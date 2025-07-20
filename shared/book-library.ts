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
import { symbolicLogicContent } from './symbolic-logic-content';
import { russellContent } from './russell-content';
import { aiLogicContent } from './ai-logic-content';

// Book library with metadata
export const bookLibrary: BookMetadata[] = [
  {
    id: 'symbolic-logic',
    title: 'Introduction to Symbolic Logic',
    author: 'J.-M. Kuczynski',
    description: 'A comprehensive introduction to the foundations of symbolic logic, covering inference, deduction, induction, entailment, and formal logical systems.',
    coverColor: 'bg-blue-600',
    textColor: 'text-white'
  },
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
    author: 'Comparative Study',
    description: 'A comprehensive comparison of traditional logic and AI approaches to reasoning, exploring how artificial intelligence transforms classical logical concepts.',
    coverColor: 'bg-green-600',
    textColor: 'text-white'
  }
];

// Book content storage
export const bookContents: Record<string, BookContent> = {
  'symbolic-logic': {
    id: 'symbolic-logic',
    title: 'Introduction to Symbolic Logic',
    author: 'J.-M. Kuczynski',
    description: 'A comprehensive introduction to symbolic logic and formal reasoning.',
    sections: symbolicLogicContent.sections
  },
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
  }
};

export function getBookContent(bookId: string): BookContent | null {
  return bookContents[bookId] || null;
}

export function getAllBooks(): BookMetadata[] {
  return bookLibrary;
}