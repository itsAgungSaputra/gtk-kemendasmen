# Project Context: Portal KGTK Provinsi Gorontalo

> Dokumen konteks komprehensif untuk pengembang dan AI Assistant (GitHub Copilot, dsb.) mengenai arsitektur, domain bisnis, struktur kode, desain, serta panduan pengembangan proyek Portal Kantor Guru dan Tenaga Kependidikan (KGTK) Provinsi Gorontalo.

---

## 1. Ringkasan Proyek (Executive Overview)

- **Nama Proyek**: Portal KGTK Provinsi Gorontalo
- **Entitas Resmi**: Kantor Guru dan Tenaga Kependidikan (KGTK) Provinsi Gorontalo
- **Instansi Induk**: Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen RI)
- **Website Referensi Asli**: [https://kgtkgorontalo.kemendikdasmen.go.id/](https://kgtkgorontalo.kemendikdasmen.go.id/)
- **Tujuan Sistem**: Menyediakan portal satu pintu (*single point of access*) untuk informasi kedinasan, layanan administrasi GTK, pengumuman seleksi/pelatihan, program unggulan, survei kepuasan masyarakat (SKM), serta kanal pengaduan publik resmi bagi seluruh Pendidik dan Tenaga Kependidikan di Provinsi Gorontalo.
- **Repository Git**: [https://github.com/itsAgungSaputra/gtk-kemendasmen.git](https://github.com/itsAgungSaputra/gtk-kemendasmen.git)

---

## 2. Informasi Domain & Latar Belakang Kelembagaan

1. **Perubahan Nomenklatur**:
   - Berdasarkan **Permendikdasmen RI No. 5 Tahun 2025**, institusi yang sebelumnya bernama **Balai Guru Penggerak (BGP) Provinsi Gorontalo** resmi bertransformasi menjadi **Kantor Guru dan Tenaga Kependidikan (KGTK) Provinsi Gorontalo**.
   - Semua penamaan instansi, atribut, dan dokumen hukum merujuk pada KGTK Gorontalo di bawah Kemendikdasmen.
2. **Visi Lembaga**:
   > *"Menjadi Kantor yang Unggul Dalam Inovasi dan Prima Dalam Pelayanan"*
3. **Misi Pokok**:
   - Mewujudkan pendidikan yang relevan, bermutu, merata, dan berkelanjutan berbasis teknologi.
   - Peningkatan kompetensi berkelanjutan bagi Guru dan Tenaga Kependidikan.
   - Transformasi tata kelola pendidikan berbasis digital, transparan, dan akuntabel.
4. **Lokasi & Kontak Kantor**:
   - **Alamat**: Jl. Adam Hoesa No. 106, Pentadio Timur, Kec. Telaga Biru, Kabupaten Gorontalo / Jln. Thayeb Mohamad Gobel, Blok Plan Pemprov Gorontalo, Tinelo Ayula, Kec. Bulango Selatan, Kab. Bone Bolango, Gorontalo 96115.
   - **Email Resmi**: `kgtk.gorontalo@kemendikdasmen.go.id`
   - **Helpdesk Interaktif**: Telegram Bot/Channel `@helpdeskkgtkgorontalo`
   - **PPID & Transparansi**: `https://ppid.gtkgo.id`
   - **Whistle Blowing System (WBS)**: `https://wbs.kemendikdasmen.go.id`
   - **Aspirasi & Pengaduan Nasional**: SP4N LAPOR! (`https://www.lapor.go.id`)

---

## 3. Tech Stack & Ekosistem

- **Core Framework**: React 19 (`react` 19.1.0, `react-dom` 19.1.0)
- **Build Tool / Bundler**: Vite 6 (`vite` 6.3.5) with `@vitejs/plugin-react`
- **Styling**: Tailwind CSS v3 (`tailwindcss` 3.4.17, `postcss` 8.5.4, `autoprefixer` 10.4.21)
- **Tipografi**: Inter (via Google Fonts CDN pada `index.html`)
- **Iconography**: Inline Custom SVG Icons (Zero external heavy dependencies seperti Lucide/FontAwesome, menjaga bundle size ultra-ringan dan performa loading instan)
- **State Management**: React Native Hooks (`useState`, `useMemo`)
- **Deployment Targets**:
  - **GitHub Pages**: Dikonfigurasi via GitHub Actions Workflow `.github/workflows/deploy-pages.yml`
  - **Vercel**: Didukung dengan file `vercel.json`
  - **Vite Base URL**: Dikonfigurasi dengan `base: "./"` pada `vite.config.js` agar kompatibel dengan subpath hosting (GitHub Pages) maupun root hosting (Vercel).

---

## 4. Struktur Direktori & File Proyek

```text
gtk-gorontalo/
├── .github/
│   └── workflows/
│       ├── deploy-pages.yml       # Otomasi build & deploy ke GitHub Pages
│       └── jekyll-gh-pages.yml    # Workflow fallback
├── node_modules/                  # Dependensi NPM
├── dist/                          # Output hasil build produksi (npm run build)
├── App.jsx                        # Komponen utama portal (Single Source of Truth saat ini)
├── main.jsx                       # React entry root mounter
├── index.html                     # HTML Template, Meta tags, Font Inter
├── index.css                      # Tailwind base, utilities, animasi modal
├── package.json                   # Konfigurasi dependensi & scripts
├── package-lock.json              # Lock file NPM
├── postcss.config.js              # Plugin Tailwind & Autoprefixer
├── tailwind.config.js             # Konfigurasi theme & content scanner Tailwind
├── vercel.json                    # Konfigurasi deploy Vercel
├── vite.config.js                 # Konfigurasi plugin React & base path "./"
└── context.md                     # File dokumentasi ini (Panduan Copilot & Devs)
```

---

## 5. Rincian Komponen & Struktur Halaman (`App.jsx`)

Halaman portal saat ini dirancang secara modular dan komprehensif di `App.jsx`, mencakup 10 zona utama:

### 1. Top Bar Kementrian
- Menampilkan identitas *"Kementerian Pendidikan Dasar dan Menengah"*.
- Tautan cepat ke portal keterbukaan informasi publik (PPID) dan Helpdesk Telegram interaktif.

### 2. Header & Navigasi Dropdown
- Logo resmi dengan lencana perisai KGTK Gorontalo.
- **7 Menu Dropdown Lengkap** (sesuai struktur web resmi):
  1. **Profil**: Sejarah, Struktur Organisasi, Visi dan Misi, Tugas & Fungsi, SDM, Tim Kerja, Zona Integritas (ZI-WBK), Penghargaan.
  2. **Layanan**: Sarana Prasarana, Permohonan Narasumber, Peminjaman Fasilitas, Permohonan Data PTK, Kerjasama, Magang, Standar Pelayanan, Maklumat Pelayanan, Sinergi GTKGO.
  3. **Informasi**: Berita, Pengumuman, Siaran Pers, Video YouTube.
  4. **Akuntabilitas**: Rencana Strategis, Perjanjian Kinerja, Laporan Kinerja, IKU, Rencana Aksi.
  5. **Statistik & Data**: Dashboard Data, Statistik GTK, Survei Kepuasan, Hasil Monev.
  6. **Program**: Koding & Kecerdasan Artifisial, Seleksi BCKS, Pembelajaran Mendalam.
  7. **Pengaduan**: Pengaduan GTK, SP4N Lapor, Whistle Blowing System (WBS).
- Menu Navigasi Mobile Responsif (Hamburger toggle dengan collapsible sub-menu).

### 3. Hero Section Interaktif
- Tagline resmi kementerian & predikat pelayanan.
- Judul dinamis dengan gradasi warna aksen emas (`from-amber-300 to-yellow-200`).
- Bilah pencarian instan terintegrasi dengan efek glow.
- Tombol Quick Action (Maklumat Pelayanan, Permohonan Narasumber, Permohonan Data PTK).

### 4. Layanan Utama KGTK Gorontalo (6 Service Cards)
1. **Maklumat Pelayanan** (Standar komitmen layanan)
2. **Permohonan Narasumber** (Fasilitasi pakar & pemateri diklat)
3. **Peminjaman Fasilitas** (Aula Huyula Ambu, laboratorium, ruang kelas)
4. **Permohonan Data PTK** (Akses data statistik guru dan tenaga kependidikan)
5. **Kerjasama & Kemitraan** (Kolaborasi lembaga pendidikan)
6. **Program Magang / MagangHub** (Pengembangan kompetensi kerja mahasiswa/fresh graduate)

### 5. Hub Berita & Pengumuman (Interactive News Feed)
- **Filter Tab**: Mengganti tampilan antara tab **Berita** dan **Pengumuman**.
- **Real-time Search Filter**: Memfilter judul & cuplikan teks artikel secara reaktif via `useMemo`.
- **Data Asli Terverifikasi**:
  - *Berita*: Seleksi MagangHub Nasional di Aula Huyula Ambu, Pelatihan Pendidikan Inklusif, Pembelajaran STEM, Seleksi BCKS di SMKN 3 Gorontalo, Pelatihan PM-KKA, Webinar Hari Belajar Guru, Pelatihan IN-2 PKGSD, Pelatihan BCKS Angkatan 3 di Hotel Grand Q.
  - *Pengumuman*: Hasil Juara Apresiasi GTK 2025, Perpanjangan Apresiasi GTK, Beasiswa TESOL Course RELO US Embassy, Hasil Verval SIKICAU 2025, Seleksi Pengajar Pembelajaran Mendalam, Verval Dokumen UKKJ JF Guru 2025, Surat Edaran Perubahan Nomenklatur.

### 6. Program Unggulan KGTK Gorontalo
- **Rumah Pendidikan (Super Apps)**: Ekosistem digital terintegrasi Kemendikdasmen.
- **Webinar Rasipede**: Serial webinar berkala peningkatan kapasitas guru.
- **7 Kebiasaan Anak Indonesia Hebat**: Kampanye karakter (Bangun pagi, beribadah, olahraga, makan sehat, gemar belajar, bermasyarakat, tidur cepat).
- **Pembelajaran Mendalam (Deep Learning)**: Pendekatan pembelajaran yang *mindful*, *meaningful*, dan *joyful*.
- **Anugerah & Apresiasi GTK**: Ajang penghargaan tahunan guru berprestasi.
- **Koding & Kecerdasan Artifisial (KKA)**: Pelatihan kecakapan teknologi dan AI terapan bagi guru.

### 7. Survei Kepuasan Masyarakat (SKM)
- Menampilkan nilai evaluasi Semester II Tahun 2025 dengan predikat **Sangat Baik** (Bintang 5).
- **Indikator 9 Unsur Layanan**:
  1. Persyaratan (9.2/10)
  2. Prosedur (8.9/10)
  3. Waktu Pelayanan (8.7/10)
  4. Biaya/Tarif (9.5/10 - Bebas Pungli)
  5. Produk Spesifikasi (8.8/10)
  6. Kompetensi Pelaksana (9.1/10)
  7. Perilaku Pelaksana (9.3/10)
  8. Sarana & Prasarana (8.6/10)
  9. Penanganan Pengaduan (9.0/10)
- Tautan unduh dokumen laporan SKM lengkap.

### 8. Banner Whistle Blowing System (WBS) & Anti-Korupsi
- Bagian dengan warna peringatan merah tegas (`bg-red-700`) untuk pelaporan pelanggaran etika/hukum dengan proteksi identitas pelapor.
- Tombol aksi menuju WBS Kemendikdasmen dan SP4N LAPOR!.

### 9. Footer Komprehensif
- Detail kontak, alamat instansi lengkap, email resmi.
- Direktori link navigasi cepat (Informasi, Layanan, Program Pelatihan).
- Tautan media sosial resmi: Facebook, Instagram, YouTube Channel, dan Telegram Helpdesk.
- Copyright resmi © 2026 Tim Publikasi KGTK Gorontalo.

### 10. Modal Pop-up Interaktif
- Menampilkan rincian berita/pengumuman saat kartu diklik tanpa harus reload halaman.
- Dilengkapi tombol *“Baca di Website Asli”* yang mengarahkan pengguna ke tautan permalink resmi KGTK Kemendikdasmen.

---

## 6. Pola & Skema Data Utama (`Data Models`)

Jika ingin memisahkan data atau menghubungkan ke CMS/API/Headless backend di kemudian hari, ikuti bentuk skema objek yang sudah ada:

```typescript
// Model Item Navigasi
interface NavItem {
  label: string;
  children: Array<{
    label: string;
    href: string;
  }>;
}

// Model Layanan
interface ServiceCard {
  Icon: React.ComponentType;
  title: string;
  desc: string;
  href: string;
  color: string; // Tailwind gradient class
  bg: string;    // Tailwind bg class
  text: string;  // Tailwind text color class
}

// Model Berita / Pengumuman
interface PostItem {
  id: number;
  type: "Kegiatan" | "Siaran Pers" | "Pengumuman";
  title: string;
  excerpt: string;
  href: string;
  date: string;
}

// Model Program Unggulan
interface ProgramItem {
  label: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  color: string;
}

// Model Unsur SKM
interface SkmItem {
  label: string;
  value: number; // Skala 0 - 10
}
```

---

## 7. Panduan Desain & Konvensi Styling (Design System)

1. **Prinsip "Anti-AI-Slop"**:
   - Hindari layout generik yang hambar atau teks placeholder "lorem ipsum".
   - Gunakan fakta nyata, singkatan kedinasan yang tepat (KGTK, Kemendikdasmen, BCKS, PKGSD, PM-KKA, ZI-WBK, Dapodik, SIMPKB).
   - Terapkan kontras tinggi, hierarki tipografi tegas, kartu bergaris batas halus (`border-slate-100` / `border-slate-200`), dan bayangan natural (`shadow-sm` hingga `shadow-xl`).
2. **Palet Warna Dominan**:
   - **Primary Navy / Blue**: `blue-700`, `blue-800`, `blue-900`, `slate-900` (Warna khas instansi pemerintahan dan kementerian pendidikan).
   - **Accent Gold / Amber**: `amber-300`, `amber-400`, `amber-500` (Simbol keunggulan, penghargaan, dan bintang kualitas).
   - **Success / Nature Emerald**: `emerald-500`, `emerald-600`, `emerald-700` (Aktivitas diklat, inovasi hijau).
   - **Alert Red**: `red-600`, `red-700` (Whistle blowing system, pengaduan integritas).
   - **Neutral Slate**: `slate-50`, `slate-100`, `slate-500`, `slate-700`, `slate-800`.
3. **Komponen Ikon**:
   - Semua ikon dibuat menggunakan fungsi komponen React dengan tag `<svg>` inline.
   - Props opsional `cls` atau `className` untuk mengatur dimensi dan pewarnaan via utility class Tailwind (`w-4 h-4`, dsb).

---

## 8. Panduan Terminal & Perintah Eksekusi

### Lingkungan Laragon (Windows)
Jika Node.js terpasang pada folder Laragon lokal:
```powershell
# Masuk ke folder proyek
cd C:\laragon\www\gtk-gorontalo

# Menjalankan Dev Server
C:\laragon\bin\nodejs\node-v18\npx.cmd vite --host

# Melakukan Build Produksi
C:\laragon\bin\nodejs\node-v18\npm.cmd run build

# Menjalankan Preview Hasil Build
C:\laragon\bin\nodejs\node-v18\npm.cmd run preview
```

### Lingkungan Standar (Node.js Global Terdaftar di PATH)
```bash
# Menjalankan local server
npm run dev

# Membangun bundle produksi
npm run build

# Preview build
npm run preview
```

---

## 9. Panduan Khusus untuk GitHub Copilot

Saat berinteraksi atau meminta bantuan ke **GitHub Copilot** pada proyek ini, perhatikan instruksi berikut:

1. **Menjaga Integritas Komponen**:
   - Jika `App.jsx` ingin di-refactor menjadi file-file kecil terpisah (misal: `src/components/Navbar.jsx`, `src/components/Hero.jsx`, `src/components/Services.jsx`, `src/data/`), pastikan import path disesuaikan dan tidak ada data asli KGTK yang terhapus atau berubah menjadi dummy fiktif.
2. **Menambahkan Berita / Pengumuman Baru**:
   - Tambahkan item baru ke dalam array konstanta `BERITA` atau `PENGUMUMAN` di bagian data dengan menyertakan `id`, `type`, `title`, `excerpt`, `href`, dan `date`.
3. **Menjaga Kompatibilitas Tailwind & Vite**:
   - Gunakan utility class bawaan Tailwind. Hindari menulis CSS murni jika bisa dicapai dengan utility classes Tailwind yang sudah aktif di `tailwind.config.js`.
   - Perhatikan bahwa konfigurasi Vite menggunakan `base: "./"`, pastikan referensi asset lokal (gambar/icon) menggunakan relative path atau impor ESM agar deployment GitHub Pages tidak mengalami 404 pada asset bundle.
4. **Bahasa & Komunikasi**:
   - Kode tampilan antarmuka (UI) menggunakan Bahasa Indonesia baku kedinasan.
   - Komentar kode diperbolehkan dalam Bahasa Indonesia atau Bahasa Inggris yang ringkas dan jelas.
