// dummyData.js

//hindu
import hindu1 from "../../assets/HilfulFuzul/hindu/1.jpg";
import hindu from "../../assets/HilfulFuzul/hindu/আলোর পথে ( সিরিজ ১-৩)";

// khistian
import khristan8 from "../../assets/HilfulFuzul/chistian/38.jpg";

//attojiboni
import attojiboni1 from "../../assets/HilfulFuzul/attojiboni/26.jpg";

//daoat o dayi
import daoat8 from "../../assets/HilfulFuzul/daoat and dayi/30.jpg";

//islam and hedayet
import islam9 from "../../assets/HilfulFuzul/islam and hedayet/37.jpg";

//maolana
import maolana6 from "../../assets/HilfulFuzul/maolana/31.jpg";

//ritiniti
import ritiniti1 from "../../assets/HilfulFuzul/ritiniti/16.jpg";

export const writers = [
  {
    id: 1,
    name: "যুবায়ের আহমদ",
    books_count: 5,
    image: "../../assets/man.jpg",
  },
  {
    id: 2,
    name: "যুবায়ের আহমদ",
    books_count: 3,
    image: "../../assets/man.jpg",
  },
];

export const publishers = [
  {
    id: 1,
    name: "হিলফুল ফুজুল",
    books_count: 10,
    image: "../../assets/ogrogoti.jpg",
  },
  {
    id: 1,
    name: "হিলফুল ফুজুল",
    books_count: 5,
    image: "../../assets/ogrogoti.jpg",
  },
];

export const categories = [
  {
    id: 1,
    name: "হিন্দু ভাইদের জন্য",
  },
  {
    id: 2,
    name: "খ্রিষ্টান ভাইদের জন্য",
  },
  {
    id: 3,
    name: "আত্মজীবনী",
  },
  {
    id: 4,
    name: "দাওয়াত ও দায়ী",
  },
  {
    id: 5,
    name: "ইসলাম ও হেদায়েত",
  },
  {
    id: 6,
    name: "হযরত মাওলানা কালিম  সিদ্দিকী",
  },
  {
    id: 7,
    name: "রীতিনীতি",
  },
];

export const products = [
  //hindu

  {
    id: 1,
    name: "হিন্দু মুসলিম সংলাপ",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[0],
    description: "A fascinating fiction book.",
    price: 19.99,
    original_price: 24.99,
    discount: 20,
    stock: 50,
    available: true,
    image: hindu1,
    pdf: hindu,
  },

  //khristian

  {
    id: 2,
    name: "প্রচলিত খৃষ্টবাদ কিছু প্রশ্ন কিছু কথা",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[1],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: khristan8,
    pdf: "",
  },

  //attojiboni
  {
    id: 3,
    name: "আত্মজীবনীমূলক সাক্ষাৎকার",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[2],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: attojiboni1,
    pdf: "",
  },

  //daoat o dayi

  {
    id: 4,
    name: "একটু ভাবুন",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[3],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: daoat8,
    pdf: "",
  },

  // islam and hedayet

  {
    id: 5,
    name: "আসবাবে হেদায়েত",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[4],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: islam9,
    pdf: "",
  },

  //maolana

  {
    id: 6,
    name: "নবীজির আদর্শ ও আমাদের জীবন বাস্তবতা",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[5],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: maolana6,
    pdf: "",
  },

  // ritiniti
  {
    id: 7,
    name: "অজানা বৈশাখ",
    writer: writers[0],
    publisher: publishers[0],
    category: categories[6],
    description: "An informative non-fiction book.",
    price: 29.99,
    original_price: 34.99,
    discount: 15,
    stock: 30,
    available: true,
    image: ritiniti1,
    pdf: "",
  },
];

export const orders = [
  {
    id: 1,
    name: "Talat Md. Tawfiq Elahi",
    email: "Talat@example.com",
    phone_number: "123456789",
    alt_phone_number: "987654321",
    country: "Bangladesh",
    district: "Dhaka",
    area: "Uttara",
    address_details: "123 Main St",
    total: 250,
    shipping_cost: 10,
    grand_total: 260,
    payment_method: "Credit Card",
    products: [products[0], products[1]],
  },
];

export const orderItems = [
  {
    id: 1,
    order: orders[0],
    product: products[0],
    quantity: 1,
    price: 120,
  },
  {
    id: 2,
    order: orders[0],
    product: products[1],
    quantity: 1,
    price: 130,
  },
];

export const blogs = [
  {
    id: 1,
    title: "Introduction to React",
    summary: "This blog introduces you to the basics of React.",
    date: "2024-08-27",
    author: "Jane Developer",
    image: "/path/to/blog_images/react_intro.jpg",
  },
  {
    id: 2,
    title: "Advanced Django",
    summary: "Deep dive into advanced Django topics.",
    date: "2024-08-28",
    author: "John Coder",
    image: "/path/to/blog_images/django_advanced.jpg",
  },
];

export const contacts = [
  {
    id: 1,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phone_number: "555555555",
    message: "I would like more information about your products.",
    created_at: "2024-08-27T12:00:00Z",
  },
];
