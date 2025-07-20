import { BookMetadata } from "@shared/book-library";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, BookOpen } from "lucide-react";

interface BookSelectorProps {
  books: BookMetadata[];
  onSelectBook: (bookId: string) => void;
  selectedBookId?: string;
}

export default function BookSelector({ books, onSelectBook, selectedBookId }: BookSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Living Book Library
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose a philosophical or strategic text to explore with AI-powered analysis and discussion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card 
              key={book.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                selectedBookId === book.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
              onClick={() => onSelectBook(book.id)}
            >
              <CardHeader>
                <div className={`w-full h-32 ${book.coverColor} rounded-lg mb-4 flex items-center justify-center`}>
                  <Book className={`h-16 w-16 ${book.textColor}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
                  {book.title}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  by {book.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {book.description}
                </p>
                <Button 
                  className="w-full"
                  variant={selectedBookId === book.id ? "default" : "outline"}
                >
                  {selectedBookId === book.id ? "Currently Selected" : "Select Book"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {books.length === 0 && (
          <div className="text-center py-12">
            <Book className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
              No books available
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              Books will appear here once they are added to the library
            </p>
          </div>
        )}
      </div>
    </div>
  );
}