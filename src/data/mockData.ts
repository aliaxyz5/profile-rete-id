import { Product, Testimonial } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-sangkar-besi',
    name: 'Sangkar Besi Hitam Sederhana Minimalis',
    category: 'sangkar',
    categoryLabel: 'Sangkar Burung',
    price: 165000,
    originalPrice: 195000,
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Praktis & Kuat',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Sangkar kawat besi hitam kokoh berlapis powder coating anti-karat dengan tatakan tarik yang higienis.',
    description: 'Pilihan terbaik untuk sangkar harian burung Kenari, Lovebird, Parkit, Finch, maupun burung kicau masteran. Menggunakan kawat besi galvanis pilihan dengan cat oven hitam halus, tahan cuaca, mudah dibersihkan, dan dilengkapi pintu kunci rapat.',
    features: [
      'Bahan Kawat Besi Solid Lapis Powder Coating',
      'Tatakan Bawah Plastik Tebal Mudah Ditarik & Dicuci',
      'Termasuk 2 Tangkringan Kayu & Cepuk Pakan',
      'Desain Minimalis Bersih, Ringan & Nyaman Digantung',
      'Cocok untuk Rawatan Harian Maupun Karantina'
    ],
    inStock: true,
    externalUrl: 'https://www.facebook.com/share/1MktKGuo5W/',
    externalLabel: 'Lihat di Facebook'
  },
  {
    id: 'prod-sangkar-premium-jati',
    name: 'Sangkar Jati Ukir Mahkota Merak Premium Grade A',
    category: 'sangkar',
    categoryLabel: 'Sangkar Jati',
    price: 1250000,
    originalPrice: 1450000,
    rating: 5.0,
    reviewsCount: 52,
    badge: 'Koleksi Mewah',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Mahakarya ukir tangan kayu jati tua Perhutani dengan relief mahkota merak khas seni Jawa elegan.',
    description: 'Sangkar ukir jati kualitas pameran dan kontes lomba. Dipahat langsung oleh pengrajin berpengalaman menggunakan kayu jati pilihan yang telah melalui proses pengeringan oven sempurna. Jeruji bambu apus halus dan presisi memberi keanggunan tiada tanding.',
    features: [
      'Bahan 100% Kayu Jati TPK Perhutani Solid',
      'Finishing Melamine Glaze Anti Air & Rayap',
      'Jeruji Bambu Apus Halus Presisi',
      'Sudah Termasuk Gantungan & Aksesoris Lengkap',
      'Standar Ukuran Kontes Nasional (No. 1 / 45x45 cm)'
    ],
    inStock: true,
    externalUrl: 'https://www.facebook.com/share/1Cxbdc2DxS/',
    externalLabel: 'Lihat di Facebook'
  },
  {
    id: 'prod-layangan-kain',
    name: 'Layangan Kain Pantai Lokal Premium (Handmade)',
    category: 'art_alam',
    categoryLabel: 'Seni & Hobi Alam',
    price: 85000,
    originalPrice: 110000,
    rating: 4.9,
    reviewsCount: 64,
    badge: 'Terbang Stabil',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Layang-layang hias kain parasut pantai dengan kerangka bambu petung lentur, terbang anggun di udara terbuka.',
    description: 'Karya seni layangan kain pantai lokal bernuansa burung dan alam bebas. Dibuat dengan kain parasut ripstop tahan angin kencang serta jahitan tepi berlapis. Sangat mudah dirakit, bisa dilipat ringkas untuk dibawa ke lapangan atau pantai.',
    features: [
      'Bahan Kain Parasut Pantai Ringan & Tahan Sobek',
      'Kerangka Bambu Petung Tua Halus & Lentur Seimbang',
      'Pola & Warna Alam Cerah Terlihat Kontras di Langit',
      'Bisa Dilipat Praktis (Termasuk Tas Penyimpanan)',
      'Cocok untuk Rekreasi Keluarga & Koleksi Seni Alam'
    ],
    inStock: true,
    externalUrl: 'https://www.facebook.com/share/1F8kLwgQWP/',
    externalLabel: 'Lihat di Facebook'
  },
  {
    id: 'prod-pakan-juara',
    name: 'Pakan Burung Super Nutrisi Kicau Juara (500gr)',
    category: 'pakan',
    categoryLabel: 'Pakan & Nutrisi',
    price: 45000,
    originalPrice: 55000,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Favorit Kicau',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Pelet racikan alami kaya protein serangga pilihan, madu hutan murni, kuning telur, dan rempah segar.',
    description: 'Formula nutrisi seimbang untuk Murai Batu, Kacer, Cucak Ijo, Anis Merah, dan burung kicau lainnya. Meningkatkan volume suara kencang (kristal), mempercepat burung gacor, dan menjaga bulu tetap mengkilap berkat kandungan omega 3 & 6.',
    features: [
      'Kandungan Protein Alami 38%',
      'Diperkaya Madu Hutan Murni & Minyak Ikan',
      'Bebas Bahan Kimia & Pengawet Berbahaya',
      'Memperkuat Daya Tahan Tubuh Segala Cuaca',
      'Aroma Gurih Alami Disukai Burung'
    ],
    inStock: true
  },
  {
    id: 'prod-vitamin-herbal',
    name: 'Avian Vitality Drops - Formula Suplemen Alami (30ml)',
    category: 'vitamin',
    categoryLabel: 'Vitamin & Obat',
    price: 65000,
    originalPrice: 80000,
    rating: 4.9,
    reviewsCount: 96,
    badge: 'Formula Khusus',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Ekstrak propolis alami, ginseng Jawa, multivitamin lengkap, dan probiotik pencernaan aktif.',
    description: 'Tetes herbal konsentrat tinggi untuk mengatasi burung lesu, mogok bunyi, stres pasca perjalanan, atau pemulihan sehabis mabung/rontok bulu. Cukup 3-5 tetes pada air minum harian.',
    features: [
      '100% Herbal Propolis & Rempah Alami',
      'Menjaga Kestabilan Birahi & Mental Tarung',
      'Aman Dikonsumsi Jangka Panjang',
      'Mengandung Vitamin A, D3, E, B-Kompleks'
    ],
    inStock: true
  },
  {
    id: 'prod-gantungan-kuningan',
    name: 'Gantungan Sangkar Naga Kuningan Gold Brass Luxury',
    category: 'aksesoris',
    categoryLabel: 'Aksesoris Mewah',
    price: 185000,
    originalPrice: 220000,
    rating: 4.8,
    reviewsCount: 54,
    badge: 'Artisanal Brass',
    image: 'https://images.unsplash.com/photo-1584441405886-bc91be61e56a?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Pion gantungan kuningan tempa cor padat berukir naga oriental dengan sentuhan vintage mewah.',
    description: 'Aksesoris gantungan sangkar burung premium terbuat dari logam kuningan murni padat, kokoh menopang beban hingga 20kg. Tahan karat dan cuaca tropis, memberikan aura kemegahan pada sangkar kesayangan Anda saat digantang.',
    features: [
      'Bahan 100% Kuningan Cor Tebal',
      'Finishing Gold Polish Antik Tahan Cuaca',
      'Dilengkapi Karet Pelindung & Pengait Baja Kuat',
      'Desain Klasik Mewah Menambah Nilai Estetika'
    ],
    inStock: true
  },
  {
    id: 'prod-terrarium-alam',
    name: 'Terrarium Ekosistem Lumut Hutan Tropis Art Alam',
    category: 'art_alam',
    categoryLabel: 'Seni & Hobi Alam',
    price: 320000,
    originalPrice: 380000,
    rating: 5.0,
    reviewsCount: 29,
    badge: 'Eco Living',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Karya seni miniatur ekosistem hijau dalam toples kaca geometris dengan ornamen ranting & batu alam.',
    description: 'Hadirkan kesegaran hutan asri di sudut ruang kerja atau rumah Anda. Menggunakan lumut hidup abadi, bebatuan vulkanik Ngawi, dan kayu apung eksotis yang perawatannya sangat minim (cukup semprot air seminggu sekali).',
    features: [
      'Kaca Geometris Handcrafted Tebal 3mm',
      'Ekosistem Hidup Tertutup Mandiri',
      'Menyegarkan Mata & Memberi Nuansa Zen Alami',
      'Termasuk Panduan Rawat & Pipet Semprot'
    ],
    inStock: true
  },
  {
    id: 'prod-wadah-keramik',
    name: 'Set Wadah Pakan & Minum Keramik Glasur Zamrud',
    category: 'aksesoris',
    categoryLabel: 'Aksesoris Mewah',
    price: 85000,
    originalPrice: 110000,
    rating: 4.9,
    reviewsCount: 47,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Keramik tanah liat alam bakar suhu tinggi glasur hijau zamrud sejuk, menjaga air tetap higienis.',
    description: 'Menjaga air minum dan voer burung tetap segar dan dingin secara alami. Mudah dicuci, tidak berlumut, serta tidak mudah tumpah karena dasar yang berbobot mantap.',
    features: [
      'Bahan Keramik Glasur Food Grade',
      'Menjaga Kesegaran Air Minum Burung',
      '1 Set Isi 2 Buah (Pakan & Minum)',
      'Klip Penjepit Stainless Steel Kuat'
    ],
    inStock: true
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'H. Joko Prasetyo',
    role: 'Penggemar Murai Batu & Penghobi Kicau',
    location: 'Kedunggalar, Ngawi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Sangat senang belanja di RETE. ID! Dari sangkar besi hitam harian sampai sangkar jati ukirnya sangat rapi dan presisi. Apalagi buka 24 jam nonstop, tengah malam butuh pakan darurat langsung dilayani dengan ramah.',
    rating: 5,
    birdType: 'Murai Batu Juara'
  },
  {
    id: 'testi-2',
    name: 'dr. Danang Wicaksono',
    role: 'Kolektor Seni Alam & Kicau Mania',
    location: 'Kota Madiun & Ngawi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Nuansa estetika alamnya sangat segar dan elegan. Layangan kain pantai lokalnya juga unik sekali, terbang stabil dan anak-anak sangat suka saat diterbangkan sore hari. Pelayanan cepat dan terpercaya!',
    rating: 5,
    birdType: 'Kacer & Seni Alam'
  },
  {
    id: 'testi-3',
    name: 'Bagus Priyambodo',
    role: 'Penangkar Burung Kenari & Finch',
    location: 'Pelang Lor, Ngawi',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    quote: 'Pakan biji-bijian dan suplemen tetes herbalnya top markotop. Burung kenari saya makin gacor dan sehat. Lokasi tokonya di Tambakselo Timur dekat sekali dan selalu siap melayani konsultasi perburungan.',
    rating: 5,
    birdType: 'Kenari Yorkshire & F1'
  }
];

export const FAQS_DATA = [
  {
    q: 'Apakah toko dan layanan konsultasi RETE. ID benar-benar buka 24 jam?',
    a: 'Benar sekali! RETE. ID siap melayani pelanggan selama 24 jam setiap hari baik untuk kunjungan langsung ke lokasi kami di Tambakselo Timur, Pelang Lor, Kedunggalar, Ngawi, maupun melalui chat WhatsApp untuk kebutuhan darurat pakan, sangkar, atau suplemen burung.'
  },
  {
    q: 'Apakah produk sangkar besi dan sangkar jati bisa dilihat detailnya di media sosial?',
    a: 'Bisa! Kami menyediakan tautan langsung ke etalase dan video produk di Facebook resmi kami untuk Sangkar Besi Hitam Sederhana, Sangkar Jati Ukir Mahkota Merak, serta Layangan Kain Pantai Lokal.'
  },
  {
    q: 'Bagaimana cara pengiriman produk untuk luar daerah Ngawi?',
    a: 'Untuk luar daerah Ngawi (seperti Madiun, Solo, Surabaya, Semarang, Jakarta, hingga luar pulau), seluruh sangkar dan barang pecah belah kami kemas dengan packing ekstra aman dilapisi kardus tebal dan asuransi ekspedisi terpercaya.'
  },
  {
    q: 'Apakah pakan dan suplemen di RETE. ID aman untuk burung kesayangan?',
    a: 'Semua produk pakan, vitamin, dan suplemen kami telah teruji menggunakan bahan-bahan organik berkualitas tinggi (madu, ekstrak serangga, propolis) tanpa zat kimia berbahaya, sehingga aman dikonsumsi harian.'
  }
];
