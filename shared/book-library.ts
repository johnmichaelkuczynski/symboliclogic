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
    id: 'art-of-war',
    title: 'The Art of War',
    author: 'Sun Tzu',
    description: 'The ancient Chinese military treatise on strategy, tactics, and warfare that has influenced military thinking and business strategy for centuries.',
    coverColor: 'bg-red-600',
    textColor: 'text-white'
  },
  {
    id: 'philosophy-dictionary',
    title: 'Dictionary of Analytic Philosophy',
    author: 'J.-M. Kuczynski',
    description: 'A comprehensive dictionary of terms and concepts in analytic philosophy, covering key ideas from logic, metaphysics, epistemology, and philosophy of language.',
    coverColor: 'bg-green-600',
    textColor: 'text-white'
  }
];

// Book content storage
export const bookContents: Record<string, BookContent> = {
  'symbolic-logic': {
    id: 'symbolic-logic',
    title: symbolicLogicContent.sections[0].title,
    author: symbolicLogicContent.sections[0].author,
    description: 'A comprehensive introduction to symbolic logic and formal reasoning.',
    sections: symbolicLogicContent.sections
  }
  // Other book contents will be added when PDFs are provided
};

export function getBookContent(bookId: string): BookContent | null {
  return bookContents[bookId] || null;
}

export function getAllBooks(): BookMetadata[] {
  return bookLibrary;
}