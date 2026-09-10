import React, { useState, useMemo } from "react";

/* ═══════════════════════════ SVG ICONS ═══════════════════════════ */

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const ChevronRightIcon = ({ cls = "w-4 h-4" }) => (
  <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const SearchIcon = ({ cls = "w-5 h-5" }) => (
  <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);
const MicIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8" />
  </svg>
);
const BuildingIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="19" rx="1" />
    <path d="M9 22V12h6v10M2 9h20" />
    <rect x="9" y="3" width="6" height="6" />
  </svg>
);
const DatabaseIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>
);
const HandshakeIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l1.06 1.06L12 21.23l7.77-7.77 1.06-1.06a5.4 5.4 0 0 0-.41-7.82Z" />
  </svg>
);
const GraduationCapIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
  </svg>
);
const CalendarIcon = ({ cls = "w-4 h-4" }) => (
  <svg className={cls} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);
const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const AlertTriangleIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);
const NewspaperIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
  </svg>
);
const TelegramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const StarIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" stroke="none" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

/* ═══════════════════════════ DATA ═══════════════════════════ */

const NAV_ITEMS = [
  {
    label: "Profil",
    children: [
      { label: "Sejarah", href: "https://kgtkgorontalo.kemendikdasmen.go.id/profil/sejarah" },
      { label: "Struktur Organisasi", href: "https://kgtkgorontalo.kemendikdasmen.go.id/profil/struktur-organisasi" },
      { label: "Visi dan Misi", href: "https://kgtkgorontalo.kemendikdasmen.go.id/profil/visimisi" },
      { label: "Tugas dan Fungsi", href: "https://kgtkgorontalo.kemendikdasmen.go.id/profil/tugas-fungsi" },
      { label: "Sumber Daya Manusia", href: "https://kgtkgorontalo.kemendikdasmen.go.id/profil/sdm" },
      { label: "Tim Kerja", href: "https://kgtkgorontalo.kemendikdasmen.go.id/profil/tim-kerja" },
      { label: "Zona Integritas", href: "https://s.id/ZIWBK-BGPGorontalo" },
      { label: "Penghargaan", href: "https://kgtkgorontalo.kemendikdasmen.go.id/profil/penghargaan" },
    ],
  },
  {
    label: "Layanan",
    children: [
      { label: "Sarana dan Prasarana", href: "https://kgtkgorontalo.kemendikdasmen.go.id/" },
      { label: "Permohonan Narasumber", href: "https://kgtkgorontalo.kemendikdasmen.go.id/layanan/narasumber" },
      { label: "Peminjaman Fasilitas", href: "https://kgtkgorontalo.kemendikdasmen.go.id/fasilitas" },
      { label: "Permohonan Data PTK", href: "https://kgtkgorontalo.kemendikdasmen.go.id/layanan/permohonan-data" },
      { label: "Kerjasama", href: "#" },
      { label: "Magang", href: "#" },
      { label: "Standar Pelayanan", href: "https://ppid.gtkgo.id/layanan/standar?utm=kgtkgorontalo" },
      { label: "Maklumat Pelayanan", href: "https://ppid.gtkgo.id/layanan/maklumat-pelayanan?utm=kgtkgorontalo" },
      { label: "Sinergi GTKGO", href: "https://sinergi.kemendikdasmen.go.id?utm=kgtkgorontalo" },
    ],
  },
  {
    label: "Informasi",
    children: [
      { label: "Berita", href: "https://kgtkgorontalo.kemendikdasmen.go.id/berita" },
      { label: "Pengumuman", href: "https://kgtkgorontalo.kemendikdasmen.go.id/pengumuman" },
      { label: "Siaran Pers", href: "https://kgtkgorontalo.kemendikdasmen.go.id/siaranpers" },
      { label: "Video", href: "https://www.youtube.com/@kgtkgorontalo/videos" },
    ],
  },
  {
    label: "Akuntabilitas",
    children: [
      { label: "Rencana Strategis", href: "https://ppid.gtkgo.id/informasi/berkala#dokumen-indikator-kinerja" },
      { label: "Perjanjian Kinerja", href: "https://ppid.gtkgo.id/informasi/berkala#dokumen-indikator-kinerja" },
      { label: "Laporan Kinerja", href: "https://ppid.gtkgo.id/informasi/berkala#dokumen-indikator-kinerja" },
      { label: "Indikator Kinerja Utama", href: "https://ppid.gtkgo.id/informasi/berkala#dokumen-indikator-kinerja" },
      { label: "Rencana Aksi", href: "https://ppid.gtkgo.id/informasi/berkala#dokumen-indikator-kinerja" },
    ],
  },
  {
    label: "Statistik & Data",
    children: [
      { label: "Dashboard", href: "https://ppid.gtkgo.id/data/dashboard?ref=kgtkgorontalo" },
      { label: "Statistik", href: "https://ppid.gtkgo.id/data/dashboard?ref=kgtkgorontalo" },
      { label: "Survei", href: "https://ppid.gtkgo.id/data/statistik/skm?ref=kgtkgorontalo" },
      { label: "Hasil Monev", href: "https://ppid.gtkgo.id/data/monev?ref=kgtkgorontalo" },
    ],
  },
  {
    label: "Program",
    children: [
      { label: "Koding & Kecerdasan Artifisial", href: "https://kgtkgorontalo.kemendikdasmen.go.id/program/koding-kecerdasan-artifisial" },
      { label: "Seleksi BCKS", href: "https://kgtkgorontalo.kemendikdasmen.go.id/program/seleksi-bcks" },
      { label: "Pembelajaran Mendalam", href: "https://kgtkgorontalo.kemendikdasmen.go.id/program/pelatihan-pembelajaran-mendalam" },
    ],
  },
  {
    label: "Pengaduan",
    children: [
      { label: "Pengaduan", href: "https://kgtkgorontalo.kemendikdasmen.go.id/pengaduan" },
      { label: "SP4N Lapor", href: "https://www.lapor.go.id?ref=kgtkgorontalo" },
      { label: "Whistle Blowing System", href: "https://wbs.kemendikdasmen.go.id?ref=kgtkgorontalo" },
    ],
  },
];

const LAYANAN_CARDS = [
  {
    Icon: BuildingIcon,
    title: "Maklumat Pelayanan",
    desc: "Komitmen kami dalam memberikan layanan terbaik kepada GTK di Provinsi Gorontalo.",
    href: "https://ppid.gtkgo.id/layanan/maklumat-pelayanan?ref=kgtkgorontalo",
    color: "from-blue-600 to-blue-800",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    Icon: MicIcon,
    title: "Permohonan Narasumber",
    desc: "Ajukan narasumber ahli untuk kegiatan pelatihan dan pengembangan GTK dengan proses cepat.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/layanan/narasumber",
    color: "from-emerald-600 to-emerald-800",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  {
    Icon: BuildingIcon,
    title: "Peminjaman Fasilitas",
    desc: "Fasilitas lengkap siap mendukung kebutuhan pelatihan dan kegiatan GTK Anda.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/fasilitas",
    color: "from-amber-500 to-amber-700",
    bg: "bg-amber-50",
    text: "text-amber-700",
  },
  {
    Icon: DatabaseIcon,
    title: "Permohonan Data PTK",
    desc: "Akses data Pendidik dan Tenaga Kependidikan yang akurat dan terpercaya dalam satu klik.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/layanan/permohonan-data",
    color: "from-violet-600 to-violet-800",
    bg: "bg-violet-50",
    text: "text-violet-700",
  },
  {
    Icon: HandshakeIcon,
    title: "Kerjasama",
    desc: "Bangun kemitraan strategis dengan KGTK Gorontalo untuk kesuksesan program diklat GTK.",
    href: "#",
    color: "from-rose-600 to-rose-800",
    bg: "bg-rose-50",
    text: "text-rose-700",
  },
  {
    Icon: GraduationCapIcon,
    title: "Magang",
    desc: "Dapatkan pengalaman magang yang berharga di lingkungan KGTK Gorontalo.",
    href: "#",
    color: "from-cyan-600 to-cyan-800",
    bg: "bg-cyan-50",
    text: "text-cyan-700",
  },
];

const BERITA = [
  {
    id: 1,
    type: "Kegiatan",
    title: "Tiga Hari Seleksi Magang Nasional, KGTK Gorontalo Jaring Peserta Potensial",
    excerpt: "293 peserta mengikuti seleksi MagangHub di Aula Huyula Ambu untuk menjaring peserta kompeten dan siap kerja.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/berita/tiga-hari-seleksi-magang-nasional-kgtk-gorontalo-jaring-peserta-potensial",
    date: "2026",
  },
  {
    id: 2,
    type: "Kegiatan",
    title: "KGTK Gorontalo Perkuat Kompetensi Guru melalui Pelatihan Inklusif",
    excerpt: "Pelatihan daring di Gorontalo diikuti guru SD-SMA/SMK untuk memperkuat pendidikan inklusif di Provinsi Gorontalo.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/berita/kgtk-gorontalo-perkuat-kompetensi-guru-melalui-pelatihan-inklusif",
    date: "2026",
  },
  {
    id: 3,
    type: "Siaran Pers",
    title: "KGTK Gorontalo Dorong STEM Yang Mudah, Murah, dan Bermakna",
    excerpt: "KGTK Gorontalo berkomitmen menghadirkan pembelajaran STEM yang dapat diakses oleh seluruh GTK di Provinsi Gorontalo.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/siaranpers/kgtk-gorontalo-dorong-stem-yang-mudah-murah-dan-bermakna",
    date: "2026",
  },
  {
    id: 4,
    type: "Kegiatan",
    title: "KGTK Fasilitasi Seleksi BCKS untuk Perkuat Kepemimpinan Sekolah",
    excerpt: "24 peserta mengikuti seleksi substansi BCKS di SMKN 3 Gorontalo untuk menyiapkan calon pemimpin sekolah berkualitas.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/berita/kgtk-fasilitasi-seleksi-bcks-untuk-perkuat-kepemimpinan-sekolah",
    date: "2026",
  },
  {
    id: 5,
    type: "Kegiatan",
    title: "KGTK Gorontalo Gelar Pelatihan PM-KKA Berbasis Kelompok Kerja",
    excerpt: "90 guru Gorontalo mengikuti pelatihan PM-KKA di dua lokasi untuk memperkuat kompetensi pembelajaran berbasis teknologi.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/berita/kgtk-gorontalo-gelar-pelatihan-pm-kka-berbasis-kelompok-kerja-90-guru-disiapkan-hadapi-transformasi-pembelajaran",
    date: "2026",
  },
  {
    id: 6,
    type: "Kegiatan",
    title: "KGTK Provinsi Gorontalo Dorong Penguatan Budaya Belajar Guru melalui Webinar",
    excerpt: "Webinar Hari Belajar Guru di Gorontalo memperkuat budaya belajar, refleksi, dan kolaborasi bagi pendidik.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/berita/kgtk-provinsi-gorontalo-dorong-penguatan-budaya-belajar-guru-melalui-webinar-hari-belajar-guru",
    date: "2026",
  },
  {
    id: 7,
    type: "Kegiatan",
    title: "Pelatihan IN-2 PKGSD Batch 1 Tahun 2026 Provinsi Gorontalo",
    excerpt: "40 guru SD perwakilan dari seluruh kabupaten dan kota se-Provinsi Gorontalo mengikuti Pelatihan IN-2 PKGSD-MBI.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/berita/pelatihan-in-2-pkgsd",
    date: "2026",
  },
  {
    id: 8,
    type: "Kegiatan",
    title: "Pelatihan BCKS APBN Provinsi Gorontalo Angkatan 3 Digelar",
    excerpt: "Pelatihan Bakal Calon Kepala Sekolah Angkatan 3 Tahun 2026 digelar di Hotel Grand Q Gorontalo, 22–31 Agustus 2026.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/berita/pelatihan-bcks-apbn-provinsi-gorontalo-angkatan-3-digelar",
    date: "Agustus 2026",
  },
];

const PENGUMUMAN = [
  {
    id: 1,
    type: "Pengumuman",
    title: "Daftar Peserta Terbaik Apresiasi GTK 2025 Provinsi Gorontalo",
    excerpt: "Daftar Juara Apresiasi GTK 2025 Provinsi Gorontalo telah resmi diumumkan.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/pengumuman/daftar-peserta-terbaik-apresiasi-gtk-2025-provinsi-gorontalo",
    date: "2025",
  },
  {
    id: 2,
    type: "Pengumuman",
    title: "Perpanjangan Pendaftaran Apresiasi GTK 2025",
    excerpt: "Linimasa Apresiasi GTK 2025 mengalami perubahan. Waktu unggah naskah & video oleh peserta diperpanjang sampai 20 Oktober 2025.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/pengumuman/perpanjangan-pendaftaran-apresiasi-gtk-2025",
    date: "2025",
  },
  {
    id: 3,
    type: "Pengumuman",
    title: "Beasiswa TESOL Course bagi Alumni Program PKGBI Tahun 2024",
    excerpt: "Pengumuman beasiswa TESOL Course – Teaching and Assessing Young Learners didukung oleh RELO Kedutaan Besar Amerika Serikat.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/pengumuman/beasiswa-tesol-course-bagi-alumni-program-pkgbi-tahun-2024",
    date: "2024",
  },
  {
    id: 4,
    type: "Pengumuman",
    title: "Pengumuman Hasil Verval Lomba SIKICAU 2025 Provinsi Gorontalo",
    excerpt: "Hasil verval lomba SIKICAU 2025 tingkat Provinsi Gorontalo telah diumumkan. Cek akun Anda mulai pukul 12.00 WITA.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/pengumuman/pengumuman-hasil-verval-lomba-sikicau-2025-provinsi-gorontalo",
    date: "2025",
  },
  {
    id: 5,
    type: "Pengumuman",
    title: "Hasil Seleksi Calon Pengajar Pelatihan Pembelajaran Mendalam",
    excerpt: "KGTK Provinsi Gorontalo telah menyelesaikan proses penjaringan Calon Pengajar Pelatihan Pembelajaran Mendalam.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/pengumuman/hasil-seleksi-calon-pengajar-pelatihan-pembelajaran-mendalam",
    date: "2025",
  },
  {
    id: 6,
    type: "Pengumuman",
    title: "Hasil Verval Dokumen UKKJ JF Guru Tahun 2025 Provinsi Gorontalo",
    excerpt: "Daftar Nama Calon Peserta Lulus Verifikasi dan Validasi Dokumen Uji Kompetensi Kenaikan Jenjang Jabatan Fungsional Guru.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/pengumuman/hasil-verval-dokumen-ukkj-jf-guru-tahun-2025-provinsi-gorontalo",
    date: "2025",
  },
  {
    id: 7,
    type: "Pengumuman",
    title: "Perubahan Nomenklatur: BGP Gorontalo menjadi KGTK Gorontalo",
    excerpt: "BGP Gorontalo resmi menjadi KGTK Gorontalo berdasarkan Permendikdasmen RI No. 5 Tahun 2025.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/pengumuman/perubahan-nomenklatur",
    date: "2025",
  },
];

const PROGRAM_UNGGULAN = [
  {
    label: "Super Apps",
    title: "Rumah Pendidikan",
    desc: "Layanan digital pendidikan terintegrasi yang mendukung kolaborasi seluruh partisipan dalam ekosistem pendidikan.",
    href: "https://rumah.pendidikan.go.id",
    cta: "Jelajahi",
    color: "bg-gradient-to-br from-blue-700 to-blue-900",
  },
  {
    label: "Webinar",
    title: "Webinar Rasipede",
    desc: "Webinar Rasipede diselenggarakan KGTK Gorontalo untuk memperkuat kompetensi dan budaya belajar GTK.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/program/koding-kecerdasan-artifisial",
    cta: "Lihat Program",
    color: "bg-gradient-to-br from-emerald-600 to-emerald-900",
  },
  {
    label: "Gerakan Nasional",
    title: "7 Kebiasaan Anak Indonesia Hebat",
    desc: "Bangun Pagi, Beribadah, Berolahraga, Makan Sehat dan Bergizi, Gemar Belajar, Bermasyarakat, dan Tidur Cepat.",
    href: "https://cerdasberkarakter.kemendikdasmen.go.id/gerakan7kebiasaan/",
    cta: "Selengkapnya",
    color: "bg-gradient-to-br from-amber-500 to-amber-800",
  },
  {
    label: "Program Pelatihan",
    title: "Pembelajaran Mendalam",
    desc: "Menciptakan pembelajaran yang mindful, meaningful, dan joyful bagi seluruh GTK di Provinsi Gorontalo.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/program/pelatihan-pembelajaran-mendalam",
    cta: "Selengkapnya",
    color: "bg-gradient-to-br from-violet-600 to-violet-900",
  },
  {
    label: "Penghargaan 2025",
    title: "Anugerah GTK & Apresiasi GTK",
    desc: "GTK Hebat Indonesia Kuat. Penghargaan GTK Tahun 2025 untuk guru dan tenaga kependidikan berprestasi.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/program/koding-kecerdasan-artifisial",
    cta: "Selengkapnya",
    color: "bg-gradient-to-br from-rose-600 to-rose-900",
  },
  {
    label: "Program Pelatihan",
    title: "Koding & Kecerdasan Artifisial",
    desc: "Pelatihan Koding dan Kecerdasan Artifisial (KKA) yang diselenggarakan KGTK Gorontalo untuk GTK.",
    href: "https://kgtkgorontalo.kemendikdasmen.go.id/program/koding-kecerdasan-artifisial",
    cta: "Selengkapnya",
    color: "bg-gradient-to-br from-cyan-600 to-cyan-900",
  },
];

const SKM_ITEMS = [
  { label: "Persyaratan", value: 9.2 },
  { label: "Prosedur", value: 8.9 },
  { label: "Waktu Pelayanan", value: 8.7 },
  { label: "Biaya/Tarif", value: 9.5 },
  { label: "Produk Spesifikasi", value: 8.8 },
  { label: "Kompetensi Pelaksana", value: 9.1 },
  { label: "Perilaku Pelaksana", value: 9.3 },
  { label: "Sarana & Prasarana", value: 8.6 },
  { label: "Penanganan Pengaduan", value: 9.0 },
];

const SITE_ASSETS = {
  logoSekunder: "./assets/kgtk-logo-sekunder.webp",
  logoSekunderFallback: "https://kgtkgorontalo.kemendikdasmen.go.id/_image?href=%2F_astro%2FKGTK-sekunder.BH69p67S.png&w=1200&h=300&f=webp",
  logoWeb: "./assets/kgtk-logo-web.png",
  logoWebFallback: "https://kgtkgorontalo.kemendikdasmen.go.id/_image?href=%2F_astro%2FKGTK-Gorontalo-logo-web.BkP7-VHh.png&w=250&h=133&f=png",
  office: "https://kgtkgorontalo.kemendikdasmen.go.id/_image?href=%2F_astro%2Fsiap-ziwbk.CwsYmAll.png&w=720&h=600&f=webp",
  officeAlt: "https://kgtkgorontalo.kemendikdasmen.go.id/_image?href=%2F_astro%2Fbgp-kantor.CCBYO0Dd.png&w=720&h=600&f=webp",
  integrity: "https://kgtkgorontalo.kemendikdasmen.go.id/_image?href=%2F_astro%2Fbanner_1.BtNqOKay.jpeg&w=800&h=356&f=webp",
  gratification: "https://kgtkgorontalo.kemendikdasmen.go.id/_image?href=%2F_astro%2Fbanner_2.BW4tlKmB.jpeg&w=800&h=356&f=webp",
  rumah: "https://kgtkgorontalo.kemendikdasmen.go.id/_image?href=%2F_astro%2Fdefault_01.BxoCNcDx.jpg&w=500&h=500&f=webp",
  ruang: "https://kgtkgorontalo.kemendikdasmen.go.id/_image?href=%2F_astro%2Fdefault_02.7FqmB3p-.png&w=500&h=500&f=webp",
  survey: "https://kgtkgorontalo.kemendikdasmen.go.id/_image?href=https%3A%2F%2Fcdn.prod.website-files.com%2F64022de562115a8189fe542a%2F6417b403643564c0009f58c1_Structured-Or-Semi-Structured-Questionnaire.jpeg&w=1200&h=700&f=webp",
};

const TRUST_BANNERS = [
  { image: SITE_ASSETS.integrity, label: "Zona Integritas", href: "https://s.id/ZIWBK-BGPGorontalo" },
  { image: SITE_ASSETS.gratification, label: "Tolak Gratifikasi", href: "https://s.id/ZIWBK-BGPGorontalo" },
];

const NEWS_IMAGES = [SITE_ASSETS.officeAlt, SITE_ASSETS.ruang, SITE_ASSETS.office, SITE_ASSETS.rumah];

/* ═══════════════════════════ HELPER ═══════════════════════════ */

const typeBadge = (type) => {
  const map = {
    Kegiatan: "bg-blue-100 text-blue-700 ring-blue-200",
    "Siaran Pers": "bg-emerald-100 text-emerald-700 ring-emerald-200",
    Pengumuman: "bg-amber-100 text-amber-700 ring-amber-200",
  };
  return map[type] || "bg-slate-100 text-slate-600 ring-slate-200";
};

/* ═══════════════════════════ SUB-COMPONENTS ═══════════════════════════ */

function DropdownNav({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors">
        {item.label}
        <ChevronDownIcon />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl shadow-slate-200/60 border border-slate-100 py-1.5 z-50">
          {item.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
            >
              <ChevronRightIcon cls="w-3.5 h-3.5 text-slate-400" />
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function CardBerita({ item, onClick }) {
  const image = NEWS_IMAGES[(item.id - 1) % NEWS_IMAGES.length];
  return (
    <article
      onClick={() => onClick(item)}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
    >
      <img src={image} alt="" className="w-full aspect-[16/9] object-cover" />
      {/* Color accent top */}
      <div className={`h-1 ${item.type === "Kegiatan" ? "bg-blue-600" : item.type === "Siaran Pers" ? "bg-emerald-500" : "bg-amber-500"}`} />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ring-1 ${typeBadge(item.type)}`}>
            {item.type}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <CalendarIcon cls="w-3.5 h-3.5" /> {item.date}
          </span>
        </div>
        <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2 line-clamp-2 flex-1">
          {item.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
          {item.excerpt}
        </p>
        <button className="self-start flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
          Baca Selengkapnya <ChevronRightIcon cls="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
}

/* ═══════════════════════════ MAIN APP ═══════════════════════════ */

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [activeTab, setActiveTab] = useState("Berita");
  const [searchQ, setSearchQ] = useState("");
  const [modal, setModal] = useState(null);

  // Hero Search State
  const [heroQuery, setHeroQuery] = useState("");
  const [isHeroDropdownOpen, setIsHeroDropdownOpen] = useState(false);
  const [searchNotice, setSearchNotice] = useState("");

  // Live search across all entities when typing in Hero
  const liveSearchResults = useMemo(() => {
    const q = heroQuery.trim().toLowerCase();
    if (!q) return null;

    const matchedBerita = BERITA.filter(
      (b) => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedPengumuman = PENGUMUMAN.filter(
      (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedLayanan = LAYANAN_CARDS.filter(
      (l) => l.title.toLowerCase().includes(q) || l.desc.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedProgram = PROGRAM_UNGGULAN.filter(
      (pr) => pr.title.toLowerCase().includes(q) || pr.desc.toLowerCase().includes(q)
    ).slice(0, 2);

    const totalCount =
      matchedBerita.length +
      matchedPengumuman.length +
      matchedLayanan.length +
      matchedProgram.length;

    return {
      berita: matchedBerita,
      pengumuman: matchedPengumuman,
      layanan: matchedLayanan,
      program: matchedProgram,
      totalCount,
    };
  }, [heroQuery]);

  const handleHeroSearch = (e) => {
    if (e) e.preventDefault();
    const q = heroQuery.trim();
    if (!q) return;

    setIsHeroDropdownOpen(false);
    setSearchQ(q);

    const qLower = q.toLowerCase();
    const hasBerita = BERITA.some(
      (b) => b.title.toLowerCase().includes(qLower) || b.excerpt.toLowerCase().includes(qLower)
    );
    const hasPengumuman = PENGUMUMAN.some(
      (p) => p.title.toLowerCase().includes(qLower) || p.excerpt.toLowerCase().includes(qLower)
    );
    const hasLayanan = LAYANAN_CARDS.some(
      (l) => l.title.toLowerCase().includes(qLower) || l.desc.toLowerCase().includes(qLower)
    );

    if (hasBerita) {
      setActiveTab("Berita");
      document.getElementById("berita")?.scrollIntoView({ behavior: "smooth" });
      setSearchNotice(`Hasil pencarian untuk "${q}" di Berita`);
    } else if (hasPengumuman) {
      setActiveTab("Pengumuman");
      document.getElementById("berita")?.scrollIntoView({ behavior: "smooth" });
      setSearchNotice(`Hasil pencarian untuk "${q}" di Pengumuman`);
    } else if (hasLayanan) {
      document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" });
      setSearchNotice(`Hasil pencarian untuk "${q}" di Layanan`);
    } else {
      document.getElementById("berita")?.scrollIntoView({ behavior: "smooth" });
      setSearchNotice(`Pencarian untuk "${q}"`);
    }
  };

  const allItems = activeTab === "Berita" ? BERITA : PENGUMUMAN;
  const filtered = useMemo(() => {
    if (!searchQ.trim()) return allItems;
    const q = searchQ.toLowerCase();
    return allItems.filter(
      (i) => i.title.toLowerCase().includes(q) || i.excerpt.toLowerCase().includes(q)
    );
  }, [allItems, searchQ]);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">

      {/* ── TOP BAR ── */}
      <div className="bg-blue-800 text-blue-100 text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <span>Kementerian Pendidikan Dasar dan Menengah</span>
          <div className="flex items-center gap-3">
            <a href="https://ppid.gtkgo.id?utm=kgtkgorontalo" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">PPID</a>
            <span className="opacity-40">|</span>
            <a href="https://t.me/helpdeskkgtkgorontalo" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              <TelegramIcon /> Helpdesk Telegram
            </a>
          </div>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="https://kgtkgorontalo.kemendikdasmen.go.id/" target="_blank" rel="noreferrer" className="flex items-center gap-3 shrink-0 py-1 group">
              <img
                src={SITE_ASSETS.logoSekunder}
                onError={(e) => { e.currentTarget.src = SITE_ASSETS.logoSekunderFallback; }}
                alt="Logo KGTK Gorontalo - Kemendikdasmen"
                className="h-10 sm:h-12 w-auto object-contain max-w-[260px] sm:max-w-[340px] transition-transform group-hover:scale-[1.02]"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <DropdownNav key={item.label} item={item} />
              ))}
              <a
                href="https://kgtkgorontalo.kemendikdasmen.go.id/kontak"
                target="_blank" rel="noreferrer"
                className="ml-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Kontak
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
            >
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-slate-100 bg-white pb-4 max-h-[70vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                  <span className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}>
                    <ChevronDownIcon />
                  </span>
                </button>
                {mobileExpanded === item.label && (
                  <div className="bg-slate-50 pb-1">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        target="_blank" rel="noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="block px-8 py-2 text-sm text-slate-600 hover:text-blue-700"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#063b73] text-white">
        {/* Blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-100 text-xs font-medium ring-1 ring-white/20 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Laman Resmi Kantor GTK Provinsi Gorontalo — Kemendikdasmen
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold leading-tight tracking-tight max-w-4xl">
            Selamat Datang di{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
              KGTK Gorontalo
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-100/80 max-w-2xl leading-relaxed">
            Kantor Guru dan Tenaga Kependidikan Provinsi Gorontalo — Kementerian Pendidikan Dasar dan Menengah.
            Menjadi Kantor yang <strong className="text-white">Unggul Dalam Inovasi</strong> dan <strong className="text-white">Prima Dalam Pelayanan</strong>.
          </p>

          {/* Search */}
          <div className="mt-10 max-w-lg relative z-30">
            <form onSubmit={handleHeroSearch} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 via-blue-400/20 to-emerald-400/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center bg-white rounded-xl shadow-2xl overflow-hidden focus-within:ring-2 focus-within:ring-amber-400 transition-all">
                <SearchIcon cls="w-5 h-5 text-slate-400 ml-4 shrink-0" />
                <input
                  type="text"
                  value={heroQuery}
                  onChange={(e) => {
                    setHeroQuery(e.target.value);
                    setIsHeroDropdownOpen(true);
                  }}
                  onFocus={() => {
                    if (heroQuery.trim()) setIsHeroDropdownOpen(true);
                  }}
                  placeholder="Cari berita, program, atau layanan..."
                  className="w-full py-4 px-3 bg-transparent text-slate-700 placeholder:text-slate-400 text-sm focus:outline-none"
                />
                {heroQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setHeroQuery("");
                      setIsHeroDropdownOpen(false);
                    }}
                    className="p-1.5 mr-1 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
                    title="Hapus pencarian"
                  >
                    <XIcon />
                  </button>
                )}
                <button
                  type="submit"
                  className="shrink-0 mr-2 px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 active:scale-95 text-white text-sm font-semibold transition-all shadow-md flex items-center gap-1.5"
                >
                  Cari
                </button>
              </div>
            </form>

            {/* Live Search Suggestions Dropdown */}
            {isHeroDropdownOpen && liveSearchResults && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsHeroDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 text-left z-50 animate-in max-h-[70vh] flex flex-col">
                  <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span>
                      Hasil untuk: <strong className="text-slate-800">"{heroQuery}"</strong> ({liveSearchResults.totalCount} ditemukan)
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsHeroDropdownOpen(false)}
                      className="text-slate-400 hover:text-slate-700 font-semibold"
                    >
                      Tutup
                    </button>
                  </div>

                  <div className="overflow-y-auto p-2 space-y-3">
                    {liveSearchResults.totalCount === 0 ? (
                      <div className="p-6 text-center text-slate-400 text-sm">
                        Tidak ditemukan hasil untuk "{heroQuery}".
                        <p className="text-xs text-slate-500 mt-1">
                          Coba kata kunci: <em>magang, bcks, pelatihan, data, narasumber</em>
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* Berita & Pengumuman */}
                        {(liveSearchResults.berita.length > 0 || liveSearchResults.pengumuman.length > 0) && (
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                              Berita &amp; Pengumuman
                            </p>
                            <div className="space-y-1">
                              {[...liveSearchResults.berita, ...liveSearchResults.pengumuman].map((item) => (
                                <button
                                  key={`${item.type}-${item.id}`}
                                  type="button"
                                  onClick={() => {
                                    setModal(item);
                                    setIsHeroDropdownOpen(false);
                                  }}
                                  className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50 transition-colors flex items-start gap-2.5 group"
                                >
                                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ring-1 shrink-0 mt-0.5 ${typeBadge(item.type)}`}>
                                    {item.type}
                                  </span>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-xs font-bold text-slate-800 group-hover:text-blue-700 line-clamp-1">
                                      {item.title}
                                    </p>
                                    <p className="text-[11px] text-slate-500 line-clamp-1">
                                      {item.excerpt}
                                    </p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Layanan */}
                        {liveSearchResults.layanan.length > 0 && (
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                              Layanan KGTK
                            </p>
                            <div className="space-y-1">
                              {liveSearchResults.layanan.map((l) => (
                                <a
                                  key={l.title}
                                  href={l.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={() => setIsHeroDropdownOpen(false)}
                                  className="block p-2.5 rounded-xl hover:bg-emerald-50 transition-colors group"
                                >
                                  <p className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                                    {l.title}
                                  </p>
                                  <p className="text-[11px] text-slate-500 line-clamp-1">
                                    {l.desc}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Program */}
                        {liveSearchResults.program.length > 0 && (
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                              Program Unggulan
                            </p>
                            <div className="space-y-1">
                              {liveSearchResults.program.map((pr) => (
                                <a
                                  key={pr.title}
                                  href={pr.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={() => setIsHeroDropdownOpen(false)}
                                  className="block p-2.5 rounded-xl hover:bg-amber-50 transition-colors group"
                                >
                                  <p className="text-xs font-bold text-slate-800 group-hover:text-amber-700">
                                    {pr.title}
                                  </p>
                                  <p className="text-[11px] text-slate-500 line-clamp-1">
                                    {pr.desc}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-center">
                    <button
                      type="button"
                      onClick={handleHeroSearch}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                    >
                      Buka hasil lengkap di Berita &amp; Pengumuman <ChevronRightIcon cls="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* CTA Quick Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://ppid.gtkgo.id/layanan/maklumat-pelayanan?ref=kgtkgorontalo" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white text-blue-800 text-sm font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Maklumat Pelayanan
            </a>
            <a href="https://kgtkgorontalo.kemendikdasmen.go.id/layanan/narasumber" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
              Permohonan Narasumber
            </a>
            <a href="https://kgtkgorontalo.kemendikdasmen.go.id/layanan/permohonan-data" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
              Permohonan Data PTK
            </a>
          </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-3 rounded-[2rem] border border-white/20 rotate-3" />
            <figure className="relative overflow-hidden rounded-[1.75rem] bg-white/10 shadow-2xl ring-1 ring-white/20">
              <img src={SITE_ASSETS.office} alt="Kantor KGTK Gorontalo" className="aspect-[6/5] w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-6 pb-5 pt-16 text-sm font-semibold">
                Kantor Guru dan Tenaga Kependidikan Provinsi Gorontalo
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── TRUST BANNERS ── */}
      <section className="bg-white py-7 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-5">
          {TRUST_BANNERS.map((banner) => (
            <a key={banner.label} href={banner.href} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200">
              <img src={banner.image} alt={banner.label} className="w-full aspect-[2.25/1] object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent px-5 pb-4 pt-10 text-sm font-bold text-white">{banner.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── LAYANAN SECTION ── */}
      <section id="layanan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Layanan Kami</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Layanan KGTK Gorontalo</h2>
          <p className="mt-2 text-slate-500 text-sm max-w-xl mx-auto">
            Berbagai layanan tersedia untuk mendukung pengembangan dan pemberdayaan GTK di Provinsi Gorontalo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LAYANAN_CARDS.map((svc, i) => (
            <a
              key={i}
              href={svc.href}
              target="_blank" rel="noreferrer"
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className={`h-1.5 bg-gradient-to-r ${svc.color}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${svc.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={svc.text}><svc.Icon /></span>
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5">{svc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{svc.desc}</p>
                <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${svc.text}`}>
                  Selengkapnya <ChevronRightIcon cls="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── BERITA & PENGUMUMAN ── */}
      <section id="berita" className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Informasi Terkini</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Temukan berita terkini dari kami
              </h2>
            </div>
            {/* Tab + Search */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex gap-1 bg-white border border-slate-200 rounded-xl p-1">
                {["Berita", "Pengumuman"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => { setActiveTab(tab); setSearchQ(""); }}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === tab ? "bg-blue-700 text-white shadow-sm" : "text-slate-600 hover:text-blue-700"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="relative">
                <SearchIcon cls="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQ}
                  onChange={(e) => setSearchQ(e.target.value)}
                  placeholder={`Cari ${activeTab.toLowerCase()}...`}
                  className="pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 w-56 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Active Search Feedback Pill */}
          {searchQ && (
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2.5 rounded-xl text-xs sm:text-sm">
              <span className="flex items-center gap-2">
                <SearchIcon cls="w-4 h-4 text-blue-600 shrink-0" />
                {searchNotice || `Menampilkan hasil untuk: "${searchQ}"`} <strong>({filtered.length} item ditemukan di {activeTab})</strong>
              </span>
              <button
                type="button"
                onClick={() => {
                  setSearchQ("");
                  setSearchNotice("");
                }}
                className="text-blue-700 hover:text-blue-900 font-bold underline cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">Tidak ada item yang cocok dengan pencarian.</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filtered.map((item) => (
                <CardBerita key={item.id} item={item} onClick={setModal} />
              ))}
            </div>
          )}

          <div className="mt-8 flex gap-3 justify-center">
            <a href="https://kgtkgorontalo.kemendikdasmen.go.id/berita" target="_blank" rel="noreferrer"
              className="px-6 py-2.5 rounded-xl border border-blue-200 text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors">
              Semua Berita
            </a>
            <a href="https://kgtkgorontalo.kemendikdasmen.go.id/pengumuman" target="_blank" rel="noreferrer"
              className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-100 transition-colors">
              Semua Pengumuman
            </a>
            <a href="https://kgtkgorontalo.kemendikdasmen.go.id/siaranpers" target="_blank" rel="noreferrer"
              className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-100 transition-colors">
              Semua Siaran Pers
            </a>
          </div>
        </div>
      </section>

      {/* ── PROGRAM UNGGULAN ── */}
      <section id="program" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Program Unggulan</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Program KGTK Gorontalo
          </h2>
          <p className="mt-2 text-slate-500 text-sm max-w-xl mx-auto">
            Program-program ini bertujuan untuk meningkatkan kualitas Guru dan Tenaga Kependidikan di Provinsi Gorontalo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAM_UNGGULAN.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank" rel="noreferrer"
              className={`group relative rounded-2xl overflow-hidden text-white p-7 flex flex-col min-h-[240px] hover:scale-[1.02] transition-all duration-300 ${p.color} shadow-lg`}
            >
              <img src={NEWS_IMAGES[i % NEWS_IMAGES.length]} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/45 to-transparent" />
              <span className="relative inline-block text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4 w-fit">
                {p.label}
              </span>
              <h3 className="relative font-extrabold text-lg leading-snug mb-2">{p.title}</h3>
              <p className="relative text-sm text-white/80 leading-relaxed flex-1">{p.desc}</p>
              <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white/90 group-hover:gap-2 transition-all">
                {p.cta} <ChevronRightIcon cls="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── SKM SECTION ── */}
      <section id="skm" className="bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-center mb-12">
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl">
              <img src={SITE_ASSETS.survey} alt="Ilustrasi survei kepuasan masyarakat" className="w-full aspect-[16/10] object-cover" />
            </div>
            <div className="text-center lg:text-left">
            <p className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-2">Akuntabilitas Publik</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Hasil Survei Kepuasan Masyarakat</h2>
            <p className="mt-3 text-blue-200 text-sm max-w-xl mx-auto">
              Berdasarkan hasil survei <strong className="text-white">Semester II Tahun 2025</strong> dengan predikat pelayanan yang{" "}
              <span className="text-amber-300 font-bold">Sangat Baik</span>.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-amber-300">
              {[1,2,3,4,5].map((s) => <StarIcon key={s} />).slice(0, 5)}
            </div>
            </div>
          </div>

          {/* 9 Unsur */}
          <div className="mb-10">
            <h3 className="text-center text-sm font-bold text-blue-200 uppercase tracking-widest mb-6">
              9 Unsur Layanan — Semester II 2025
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKM_ITEMS.map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-100">{item.label}</span>
                    <span className="text-sm font-bold text-amber-300">{item.value}/10</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-amber-300 to-amber-400 h-1.5 rounded-full"
                      style={{ width: `${(item.value / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://kgtkgorontalo.kemendikdasmen.go.id/skm/2025"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-amber-400 text-slate-900 font-bold text-sm hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
            >
              Unduh Laporan Survei <ChevronRightIcon cls="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── WHISTLE BLOWING SYSTEM ── */}
      <section className="bg-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-5">
              <div className="shrink-0 p-3 bg-red-600 rounded-2xl">
                <AlertTriangleIcon />
              </div>
              <div>
                <h3 className="text-lg font-extrabold">Ingin Melaporkan Dugaan Pelanggaran?</h3>
                <p className="text-red-200 text-sm mt-1">
                  Laporkan dugaan pelanggaran melalui Whistle Blowing System resmi Kemendikdasmen. Laporan Anda dijamin kerahasiaannya.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="https://wbs.kemendikdasmen.go.id?ref=kgtkgorontalo"
                target="_blank" rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-white text-red-700 font-bold text-sm hover:bg-red-50 transition-colors whitespace-nowrap shadow-lg"
              >
                Lapor Sekarang
              </a>
              <a
                href="https://www.lapor.go.id?ref=kgtkgorontalo"
                target="_blank" rel="noreferrer"
                className="px-6 py-3 rounded-xl border-2 border-white/50 text-white font-semibold text-sm hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                SP4N Lapor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={SITE_ASSETS.logoWeb}
                  onError={(e) => { e.currentTarget.src = SITE_ASSETS.logoWebFallback; }}
                  alt="Logo KGTK Gorontalo"
                  className="h-12 w-auto object-contain brightness-110"
                />
                <div>
                  <p className="font-extrabold text-white text-base leading-tight">KGTK Gorontalo</p>
                  <p className="text-xs text-slate-400">Kemendikdasmen RI</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5">
                Kantor Guru dan Tenaga Kependidikan Provinsi Gorontalo, Kementerian Pendidikan Dasar dan Menengah.
              </p>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPinIcon />
                  <span className="leading-relaxed">Jl. Adam Hoesa No. 106, Pentadio Timur, Kabupaten Gorontalo, Gorontalo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <MailIcon />
                  <a href="mailto:kgtk.gorontalo@kemendikdasmen.go.id" className="hover:text-blue-400 transition-colors">
                    kgtk.gorontalo@kemendikdasmen.go.id
                  </a>
                </li>
              </ul>
            </div>

            {/* Informasi */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Informasi</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Berita", href: "https://kgtkgorontalo.kemendikdasmen.go.id/berita" },
                  { label: "Pengumuman", href: "https://kgtkgorontalo.kemendikdasmen.go.id/pengumuman" },
                  { label: "Siaran Pers", href: "https://kgtkgorontalo.kemendikdasmen.go.id/siaranpers" },
                  { label: "Video", href: "https://www.youtube.com/@kgtkgorontalo/videos" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noreferrer" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-1.5">
                      <ChevronRightIcon cls="w-3.5 h-3.5 text-slate-600" /> {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Layanan */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Layanan</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Permohonan Narasumber", href: "https://kgtkgorontalo.kemendikdasmen.go.id/layanan/narasumber" },
                  { label: "Peminjaman Fasilitas", href: "https://kgtkgorontalo.kemendikdasmen.go.id/fasilitas" },
                  { label: "Permohonan Data PTK", href: "https://kgtkgorontalo.kemendikdasmen.go.id/layanan/permohonan-data" },
                  { label: "Kerjasama", href: "#" },
                  { label: "Magang", href: "#" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noreferrer" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-1.5">
                      <ChevronRightIcon cls="w-3.5 h-3.5 text-slate-600" /> {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program & Sosmed */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Program Pelatihan</h4>
              <ul className="space-y-2.5 mb-8">
                {[
                  { label: "Koding & Kecerdasan Artifisial", href: "https://kgtkgorontalo.kemendikdasmen.go.id/program/koding-kecerdasan-artifisial" },
                  { label: "Seleksi BCKS", href: "https://kgtkgorontalo.kemendikdasmen.go.id/program/seleksi-bcks" },
                  { label: "Pembelajaran Mendalam", href: "https://kgtkgorontalo.kemendikdasmen.go.id/program/pelatihan-pembelajaran-mendalam" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noreferrer" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-1.5">
                      <ChevronRightIcon cls="w-3.5 h-3.5 text-slate-600" /> {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Ikuti Sosial Media Kami</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/kgtkgorontalo" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-700 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/kgtkgorontalo" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <InstagramIcon />
                </a>
                <a href="https://youtube.com/@kgtkgorontalo" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <YouTubeIcon />
                </a>
                <a href="https://t.me/helpdeskkgtkgorontalo" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-500 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p className="text-slate-500">© 2026 Tim Publikasi KGTK Gorontalo — Kementerian Pendidikan Dasar dan Menengah</p>
            <div className="flex items-center gap-4">
              <a href="https://ppid.gtkgo.id?utm=kgtkgorontalo" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">PPID</a>
              <a href="https://ppid.gtkgo.id/layanan/standar?utm=kgtkgorontalo" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">Standar Pelayanan</a>
              <a href="https://kgtkgorontalo.kemendikdasmen.go.id/kontak" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">Kontak</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {modal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[85vh] overflow-hidden flex flex-col"
            style={{ animation: "modalIn .22s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-1.5 ${modal.type === "Kegiatan" ? "bg-blue-600" : modal.type === "Siaran Pers" ? "bg-emerald-500" : "bg-amber-500"}`} />
            <div className="p-6 border-b border-slate-100 flex items-start gap-4">
              <div className="flex-1">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ring-1 ${typeBadge(modal.type)}`}>{modal.type}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900 leading-snug">{modal.title}</h3>
                <p className="mt-1 text-xs text-slate-400 flex items-center gap-1"><CalendarIcon cls="w-3.5 h-3.5" /> {modal.date}</p>
              </div>
              <button onClick={() => setModal(null)} className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors shrink-0">
                <XIcon />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <p className="text-sm text-slate-600 leading-relaxed">{modal.excerpt}</p>
            </div>
            <div className="p-6 pt-4 border-t border-slate-100 flex gap-3 justify-end">
              <button onClick={() => setModal(null)} className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors">
                Tutup
              </button>
              <a
                href={modal.href}
                target="_blank" rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors shadow-md"
              >
                Baca di Website Asli
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
