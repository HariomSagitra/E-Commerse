export const C_URL = "http://localhost:3000/"
const BASE_URL = "http://localhost:5000/"

export const PRODUCT_LIST = BASE_URL + "allproduct"
export const REGISTER = BASE_URL + "register"


export const LOGIN =  BASE_URL + "login"
export const ALL_CUSTOMER = BASE_URL + "admin/allcustomer"
export const DELETE_CUSTOMER = BASE_URL + "admin/managecustomer?id="
export const VERIFY_CUSTOMER = BASE_URL + "admin/managecustomer?id="
export const PRODUCT_DETAILS = BASE_URL + "product?product_id="
export const EDIT_PRODUCT = BASE_URL + "admin/editproduct?product_id="
export const DELETE_PRODUCT = BASE_URL + "admin/deleteproduct?product_id="

export const CUSTOMER_PROFILE = BASE_URL + "customer/profile?id="
export const CUSTOMER_PROFILE_PIC = BASE_URL + "customer/profilepic?id="
export const CUSTOMER_UPLOAD_DOC = BASE_URL + "customer/uploaddocument"
export const EDITPROFILE = BASE_URL + "customer/editprofile?id="
export const ADD_TO_CART = BASE_URL + "customer/cart?customer_id="
export const CART_DETAILS = BASE_URL + "customer/cartdetails?customer_id="
export const DELETE_CART_ITEM = BASE_URL + "customer/deletecart?_id="
export const ADD_PRODUCT = BASE_URL + "admin/addproduct"
export const PRODUCT =  BASE_URL + "product?product_id="
export const ORDER_LIST = BASE_URL + "customer/orderlist?customer_id="
export const CREATE_ORDER = BASE_URL + "customer/orders?customer_id="
export const EMPTY_CARD = BASE_URL + "customer/emptycart?customer_id="
export const SEND_EMAIL = BASE_URL + "senduserpasswordresetemail"
export const FORGOT_PASSWORD = BASE_URL + "userpasswordreset?id="
export const CHANGE_PASSWORD = BASE_URL + "customer/changepassword?id="
export const PRODUCT_FILTER = BASE_URL + "filterproduct?product_variant_name="


