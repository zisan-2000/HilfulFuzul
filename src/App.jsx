import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import CategoryList from "./components/Categories/CategoryList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductDetail from "./components/Products/ProductDetail"; // Import the new component
import Products from "./components/Products/Products";
import AuthorsPage from "./pages/AuthorsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogListPage from "./pages/BlogListPage";
import BookFair from "./pages/BookFair";
import CartListTable from "./pages/CartPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import IslamicPonno from "./pages/IslamicPonno";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import PreOrder from "./pages/PreOrder";
import PublishersPage from "./pages/PublishersPage";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="category" element={<CategoriesPage />} />
            <Route
              path="/category/:categoryId"
              element={<CategoryProductsPage />}
            />
            <Route path="/product/:productId" element={<ProductDetail />} />{" "}
            {/* Add the route */}
            <Route path="/authors" element={<AuthorsPage />} />
            <Route path="/publishers" element={<PublishersPage />} />
            <Route path="/path1" element={<BookFair />} />
            <Route path="/book-fair" element={<BookFair />} />
            <Route path="/pre-order" element={<PreOrder />} />
            <Route path="/islamic-products" element={<IslamicPonno />} />
            <Route path="/cart" element={<CartListTable />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/blogList" element={<BlogListPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/allbooks" element={<CategoryList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
