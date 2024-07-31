import './App.css'
import Search from './components/Search'
import Table from './components/Table'
import { Data } from './data/Data'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Pagination } from "flowbite-react";
function App() {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(Data.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);
  const userPerpage = 10;
  const pagesVisited = pageNumber * userPerpage;
  const displayUser = user
    .slice(pagesVisited, pagesVisited + userPerpage)
    .filter((itemS) => {
      return search === "" || itemS.first_name.toLowerCase().includes(search.toLowerCase()) , itemS.last_name.toLowerCase().includes(search.toLowerCase())
    })
    .map((item, index) => {
      return (
        <Table
          key={index.id}
          id={item.id}
          firstName={item.first_name}
          lastName={item.last_name}
          email={item.email}
          phone={item.Phone}
        />
      )
    })
    const onPageChange = (page) => setPageNumber(page - 1); 
    const pageCount = Math.ceil(user.length / userPerpage);

  return (
    <>
      <header className='text-center p-5'>
        <h1 className="text-4xl font-bold  text-gray-900 dark:text-white">Table Search Filter</h1>
      </header>
      <main>
        <section>
          <Search
            search={search}
            setSearch={setSearch}
          />
        </section>
        <section className='p-5'>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fist-Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last-Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayUser}
              </tbody>
            </table>
          </div>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              layout="pagination"
              currentPage={pageNumber + 1}
              totalPages={pageCount}
              onPageChange={onPageChange}
              previousLabel="previose"
              nextLabel="Next"
              showIcons
            />
          </div>
          {/* <div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={Math.ceil(user.length / userPerpage)}
              onPageChange={({ selected }) => {
                setPageNumber(selected)
              }}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div> */}
        </section>

      </main>
    </>
  )
}

export default App
