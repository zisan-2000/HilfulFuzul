import Header2 from "../components/Header/Header2";
import SortComponent from "../components/Others/SortComponent";
import ProductListing from "../components/Products/ProductListing";
import SidebarFilter2 from "../components/Sidebar/SidebarFilter2";
const IslamicPonno = () => {
  return (
    <div className="bgMain py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="">
          <Header2 />
        </div>

        <div className="flex flex-col lg:flex-row 2xl:flex-row">
          <aside className="w-full p-4 lg:w-1/4 2xl:w-[300px]">
            {/* <SidebarFilter /> */}
            <SidebarFilter2 />
          </aside>
          <main className="w-full p-4 lg:w-3/4 2xl:w-auto">
            <div className="mb-4">
              <SortComponent />
            </div>

            {/* <div className="mb-8 text-2xl font-bold">মোট 456 টি পণ্য</div> */}

            <ProductListing />
          </main>
        </div>
      </div>
    </div>
  );
};

export default IslamicPonno;
