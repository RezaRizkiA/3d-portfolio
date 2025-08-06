/**
 * Komponen Tombol (Button) yang bisa digunakan kembali di seluruh aplikasi.
 * Komponen ini dirancang untuk menjadi Call-to-Action (CTA) utama.
 * Dibuat menggunakan tag <a> agar bisa berfungsi sebagai link navigasi.
 *
 * @param {string} text - Teks yang akan ditampilkan di dalam tombol. Wajib diisi.
 * @param {string} [className] - Class CSS/Tailwind tambahan untuk kustomisasi styling dari luar. Sifatnya opsional.
 * @param {string} [id] - ID unik untuk tombol, berguna untuk targeting via JavaScript (animasi, event listener) atau CSS. Opsional.
 */
const Button = ({ text, className, id }) => {
  // Menggunakan destructuring `{ text, className, id }` untuk mengambil props secara langsung dari objek props.
  // Ini adalah praktik umum di React untuk membuat kode lebih bersih.

  return (
    // Menggunakan tag <a> (anchor/link) bukan <button>. Ini menandakan tombol ini kemungkinan besar
    // digunakan untuk navigasi, misalnya scroll ke section lain di halaman yang sama (misal: <a href="#projects">).
    // Catatan: Agar berfungsi sebagai link yang valid, komponen ini seharusnya juga menerima prop `href`.
    <a id={id} className={`${className ?? ""} cta-wrapper`}>
      {/*
        Menggabungkan beberapa class secara dinamis menggunakan template literal (tanda backtick ``).

        `${className ?? ""}`: Ini adalah trik JavaScript modern.
        `??` (Nullish Coalescing Operator) artinya: "Jika `className` yang diberikan itu null atau undefined,
        gunakan string kosong `""`. Jika tidak (ada isinya), gunakan nilai `className` itu sendiri."
        Ini adalah cara aman untuk menangani props yang opsional dan mencegah error.

        `cta-wrapper`: Ini adalah class custom yang selalu ada, kemungkinan besar dari file CSS utama Anda
                     untuk mengatur layout atau posisi tombol secara keseluruhan.
      */}

      {/* Ini adalah elemen utama yang terlihat seperti tombol. */}
      {/* 'group' adalah class "sakti" dari Tailwind CSS. Class ini memungkinkan kita untuk mengubah style
        elemen ANAK ketika elemen INDUK ini di-hover. Sangat berguna untuk animasi interaktif.
        Contoh di Tailwind: <div class="group"><p class="group-hover:text-red-500">Teks</p></div>
        Teks di dalam akan menjadi merah ketika div 'group' di-hover.
      */}
      <div className="cta-button group">
        {/*
          Elemen div kosong ini adalah trik CSS yang umum untuk efek visual.
          Ini kemungkinan besar adalah elemen dekoratif (misalnya, sebuah lingkaran di latar belakang)
          yang akan dianimasikan saat tombol di-hover (menggunakan `group-hover:` dari Tailwind).
          Contoh: Lingkaran ini bisa membesar atau berubah warna saat tombol di-hover.
        */}
        <div className="bg-circle" />

        {/* Menampilkan teks tombol yang diterima dari prop 'text'. */}
        {/* Class 'text' kemungkinan adalah class custom untuk menata gaya font, ukuran, dll. */}
        <p className="text">{text}</p>

        {/* Wadah atau pembungkus untuk ikon panah. */}
        {/* Tujuannya agar ikon panah mudah diatur posisinya dan dianimasikan secara terpisah dari teks. */}
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

// Mengekspor komponen Button agar bisa di-import dan digunakan di file lain (seperti di komponen Hero Anda).
export default Button;