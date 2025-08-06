// --- IMPORTS ---
// Mengimpor komponen <Button> yang sudah dibuat di file lain.
// Ini adalah praktik yang baik (component-based) agar tombol bisa digunakan kembali di banyak tempat.
import Button from "../components/Button";

// Mengimpor sebuah variabel bernama 'words' dari file 'constants'.
// Kemungkinan besar, 'words' adalah sebuah array of objects yang berisi data untuk animasi teks.
// Contoh isi 'words': [{ text: "Websites", imgPath: "/images/icon-web.png" }, ...]
import { words } from "../constants";

// --- DEFINISI KOMPONEN ---
// Mendefinisikan sebuah komponen fungsional React bernama 'Hero'.
// Ini adalah komponen utama untuk bagian "pahlawan" atau bagian paling atas dari halaman web.
// Penggunaan `()` setelah `=>` adalah cara singkat untuk langsung me-return JSX.
const Hero = () => (
  // <section> adalah elemen pembungkus utama untuk seluruh bagian hero.
  // `id="hero"` digunakan sebagai penanda yang bisa ditargetkan oleh link navigasi (misal: <a href="#hero">).
  // `className` berisi utility classes dari Tailwind CSS.
  // `relative`: Diperlukan agar elemen anak dengan posisi 'absolute' bisa mengacu pada section ini.
  // `overflow-hidden`: Memastikan elemen apa pun yang keluar dari batas section ini akan disembunyikan.
  <section id="hero" className="relative overflow-hidden">
    {/* Elemen ini berfungsi sebagai gambar latar belakang. */}
    <div className="absolute top-0 left-0 z-10">
      {/* `absolute`: Posisinya diatur relatif terhadap parent terdekat yang memiliki posisi 'relative' (yaitu <section>).
        `top-0 left-0`: Memposisikan gambar di pojok kiri atas.
        `z-10`: Mengatur tumpukan (stack order). Nilai 10 menempatkannya di atas latar belakang dasar (z-0)
                 tapi di bawah konten utama (yang mungkin memiliki z-index lebih tinggi).
      */}
      <img src="/images/bg.png" alt="background" />
    </div>

    {/* 'hero-layout' kemungkinan adalah nama class custom dari file CSS utama Anda (misal: index.css). */}
    {/* Class ini mungkin mengatur layout utama seperti grid atau padding global untuk bagian hero. */}
    <div className="hero-layout">
      {/* Bagian Kiri: Berisi semua konten teks dan tombol. Menggunakan tag <header> karena ini adalah konten utama. */}
      <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
        {/* `flex flex-col`: Mengaktifkan flexbox dengan arah vertikal (kolom).
          `justify-center`: Menengahkan konten secara vertikal di dalam header.
          `md:w-full w-screen`: Di layar mobile (default), lebarnya 100% dari lebar layar (w-screen). Di layar medium ke atas (md:), lebarnya 100% dari parent-nya.
          `md:px-20 px-5`: Padding horizontal 20 di layar medium ke atas, dan 5 di layar mobile. Ini adalah contoh Desain Responsif.
        */}

        {/* Div ini membungkus semua konten teks agar bisa diberi jarak (gap). */}
        <div className="flex flex-col gap-7">
          {/* 'hero-text' kemungkinan adalah class custom lain untuk menata grup teks ini. */}
          <div className="hero-text">
            {/* Bagian teks utama (headline). */}
            <h1>
              Shaping
              {/* STRUKTUR UNTUK ANIMASI TEKS SLIDER/ROTATOR */}
              {/* Struktur <span> berlapis ini adalah trik umum untuk membuat animasi teks yang berputar atau berganti-ganti. */}
              <span className="slide">
                {/* 'slide' kemungkinan adalah wrapper luar yang mengatur 'overflow: hidden' agar teks lain
                  yang tidak aktif tidak terlihat.
                */}
                <span className="wrapper">
                  {/* 'wrapper' adalah wrapper dalam yang akan digerakkan (misalnya dengan CSS transform)
                    untuk menampilkan kata yang berbeda secara bergiliran.
                  */}
                  {/* Melakukan iterasi (looping) pada array 'words' yang diimpor dari constants. */}
                  {words.map((word) => (
                    // Untuk setiap item 'word' di dalam array, render sebuah <span>.
                    // `key` adalah properti wajib di React saat melakukan list rendering, untuk performa dan identifikasi.
                    <span
                      key={word.text}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      {/* Menampilkan gambar ikon yang path-nya diambil dari data 'word'. */}
                      <img
                        src={word.imgPath}
                        alt={word.text} // Alt text yang baik untuk aksesibilitas.
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        // Styling responsif untuk ukuran ikon (`size-`), padding (`p-`), dll.
                        // `rounded-full`: Membuat gambar menjadi lingkaran sempurna.
                        // `bg-white-50`: Kemungkinan adalah warna custom dari tailwind.config.js.
                      />
                      {/* Menampilkan teks yang diambil dari data 'word'. */}
                      {word.text}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>Into Real Projects</h1>
            <h1>that Deliver Results</h1>
          </div>

          {/* Paragraf deskripsi singkat. */}
          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            {/* `text-white-50`: Warna teks custom.
              `md:text-xl`: Ukuran font responsif.
              `relative z-10`: Memastikan paragraf ini muncul di atas elemen lain (seperti gambar background).
              `pointer-events-none`: Trik agar mouse/klik bisa "menembus" elemen ini dan berinteraksi dengan elemen di belakangnya.
            */}
            Hi, I'm Reza a developer based in Indonesia with a passion for code
          </p>

          {/* Menggunakan komponen <Button> yang sudah diimpor. */}
          {/* Props (properti) seperti `className`, `id`, dan `text` dilewatkan ke dalam komponen Button. */}
          <Button
            className="md:w-80 md:h-16 w-60 h-12" // Ukuran tombol yang responsif.
            id="button" // ID untuk targeting via CSS atau JavaScript jika perlu.
            text="See My Work" // Teks yang akan ditampilkan di dalam tombol.
          />
        </div>
      </header>

      {/* Bagian Kanan: Kemungkinan besar untuk menampilkan model 3D atau gambar ilustrasi. */}
      {/* Saat ini kosong, tapi sudah disiapkan layoutnya. */}
    </div>
  </section>
);

// Mengekspor komponen 'Hero' agar bisa diimpor dan digunakan di file lain, misalnya di halaman utama (App.jsx atau page.jsx).
export default Hero;
