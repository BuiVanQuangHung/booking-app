import React from "react";
import CategoryCommon from "../components/component/CategoryComponents";
import { imgs } from "../data/data";

const CategoryPage = () => {
  return (
    <div>
      <CategoryCommon imgs={imgs} />
    </div>
  );
};

export default CategoryPage;
