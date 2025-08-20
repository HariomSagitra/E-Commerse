import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProductDetails from '../pages/ProductDetails'
import Logout from '../pages/Logout';
import Customer from '../pages/Customer/Customer';
import Admin from '../pages/Admin/Admin';
import CustomerProductDetails from '../pages/Customer/CustomerProductDetails';
import Cart from '../pages/Customer/Cart';
import AddProduct from '../pages/Admin/AddProduct';
import MakePayment from '../pages/Customer/MakePayment';
import PaymentSuccess from '../pages/Customer/PaymentSuccess';
import MyOrders from '../pages/Customer/MyOrders';
import SendEmail from '../pages/Customer/SendEmail';
import ForgotPassword from '../pages/Customer/ForgotPassword';
import EditProfile from '../pages/Customer/EditProfile';
import ChangePassword from '../pages/Customer/ChangePassword';
import ViewProfile from '../pages/Customer/ViewProfile';
import ManageCustomer from '../pages/Admin/ManageCustomer'
import ViewOrders from '../pages/Admin/ViewOrders'
import EditProduct from '../pages/Admin/EditProduct'
import ViewProduct from '../pages/Admin/ViewProduct'


const RouterDemo = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Index />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path="/sendemail" element={<SendEmail />}></Route>
                    <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
                    <Route path='/logout' element={<Logout />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/customer' element={<Customer />}></Route>
                    <Route path='/admin' element={<Admin />}></Route>
                    <Route path='/productdetails/:pid' element={<ProductDetails />}></Route>

                    <Route path='/admin/addproduct' element={<AddProduct />}></Route>
                    <Route path='/customer/makepayment' element={<MakePayment />}></Route>
                    <Route path='/customer/editprofile' element={<EditProfile />}></Route>
                    <Route path='/customer/paymentsuccess' element={<PaymentSuccess />}></Route>
                    <Route path='/customer/orders/' element={<MyOrders />}></Route>
                    <Route path='/customer/changepassword/' element={<ChangePassword />}></Route>
                    <Route path='/customer/productdetails/:pid' element={<CustomerProductDetails />}></Route>
                    <Route path='/customer/cart' element={<Cart />}></Route>
                    <Route path='/customer/viewprofile/' element={<ViewProfile />}></Route>
                    <Route path="/admin/managecustomer" element={<ManageCustomer />}></Route>
                    <Route path="/admin/vieworders" element={<ViewOrders />}></Route>
                    <Route path="/admin/editproduct" element={<EditProduct />}></Route>
                    <Route path="/admin/viewproduct" element={<ViewProduct />}></Route>



                </Routes>
            </Router>
        </div>
    )
}

export default RouterDemo