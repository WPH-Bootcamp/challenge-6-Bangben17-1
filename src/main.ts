// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini
import { addBook } from './functions/bookManager';
import { listBooks } from './functions/bookManager';
import { searchBook } from './functions/bookManager';

// ===Menambahkan beberapa buku===
console.log('=== Menambahkan Buku ===');
addBook({
  title: 'Laskar Pelangi',
  author: 'Andrea Hirata',
  publicationYear: 2005,
});
addBook({
  title: 'Bumi Manusia',
  author: 'Pramoedya Ananta Toer',
  publicationYear: 1980,
});
addBook({ title: 'Pulang', author: 'Tere Liye', publicationYear: 2015 });
addBook({
  title: 'Perahu Kertas',
  author: 'Dewi Lestari',
  publicationYear: 2009,
});
addBook({
  title: 'Laskar Mimpi',
  author: 'Eka Kurniawan',
  publicationYear: 2018,
});

// ===Menampilkan semua buku===
console.log('\n=== Daftar Semua Buku ===');
listBooks();

// ===Mencari buku berdasarkan judul===
console.log("\n=== Mencari Buku dengan keyword 'Laskar' ===");
searchBook('Laskar');

console.log('\n=== Mencari Buku yang tidak ada ===');
searchBook('Harry Potter');

console.log('\n=== Mencari tanpa keyword (menampilkan semua) ===');
searchBook();
