import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import Dashboard from "../pages/dasboard/Dasboard";
import List from "../pages/news/List/List";
import Create from "../pages/news/Create/Create";
import Edit from "../pages/news/Edit/Edit";
import UserList from "../pages/User/List/UserList";
import UserCreate from "../pages/User/Create/UserCreate";
import UserEdit from "../pages/User/Edit/UserEdit";
import TypeList from "../pages/type/List/TypeList";
import TypeCreate from "../pages/type/Create/TypeCreate";
import TypeEdit from "../pages/type/Edit/TypeEdit";
import AddCategory from "../pages/category/add/AddCategory";
import ListCategory from "../pages/category/ListCategory/Listca";
import EditCategory from "../pages/category/editecategory/EditeCategory";
import LoginAdmin from "../login/LoginAdmin";
import PrivateRoute from "./privateRoute";

const BackRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MasterLayout />}>
   
        <Route element={<PrivateRoute />}>

          <Route index element={<Dashboard />} />
          <Route path="/news/list" element={<List />} />
          <Route path="/news/create" element={<Create />} />
          <Route path="/news/edit" element={<Edit />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/create" element={<UserCreate />} />
          <Route path="/user/edit" element={<UserEdit />} />
          <Route path="/type/list" element={<TypeList />} />
          <Route path="/type/create" element={<TypeCreate />} />
          <Route path="/type/edit" element={<TypeEdit />} />

          {/* <Route path="/category" element={<Category />} /> */}
          <Route path="/category/create" element={<AddCategory />} />
          <Route path="/category" element={<ListCategory />} />
          <Route path="/category/edit/:id" element={<EditCategory />} />
          
        </Route>
      </Route>
      <Route path="/login" element={<LoginAdmin/>} />
    </Routes>
  );
};

export default BackRoute;
