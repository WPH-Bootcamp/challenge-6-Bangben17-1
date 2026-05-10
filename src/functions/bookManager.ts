import { Book } from '../types';
import { books } from '../data/books';

// ===Menambahkan buku baru ke dalam array books===
export function addBook(book: Book): void {
  books.push(book);
  console.log(
    `Buku "${book.title}" karya ${book.author} berhasil ditambahkan.`
  );
}

// ===Menampilkan semua buku yang tersimpan di dalam array books===
export function listBooks(): void {
  if (books.length === 0) {
    console.log('Belum ada buku yang tersimpan.');
    return;
  }

  console.log(`Daftar Semua Buku (${books.length} buku):`);
  console.log('─'.repeat(45));

  books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
    console.log(`   Penulis : ${book.author}`);
    console.log(`   Tahun   : ${book.publicationYear}`);
  });

  console.log('─'.repeat(45));
}

// ===Mencari buku berdasarkan judul===
// ===Jika title tidak diberikan, tampilkan semua buku===
export function searchBook(title?: string): void {
  if (!title) {
    console.log('Tidak ada keyword, menampilkan semua buku:');
    listBooks();
    return;
  }

  const keyword = title.toLowerCase();
  const results = books.filter((book) =>
    book.title.toLowerCase().includes(keyword)
  );

  if (results.length === 0) {
    console.log(`Tidak ada buku dengan judul yang mengandung "${title}".`);
    return;
  }

  console.log(
    `\nHasil pencarian untuk "${title}" (${results.length} ditemukan):`
  );
  console.log('─'.repeat(45));

  results.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
    console.log(`   Penulis : ${book.author}`);
    console.log(`   Tahun   : ${book.publicationYear}`);
  });

  console.log('─'.repeat(45));
}
