
import Search from './components/Search'
import Table from './components/Table'
import { Data } from './data/Data'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')

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
                </tr>
              </thead>
              <tbody>
                {
                  Data.filter((itemS) => {
                    return search === "" ? itemS : itemS.first_name.toLowerCase().includes(search.toLowerCase())
                  }).map((item, index) => {
                    return (
                      <Table
                        key={index}
                        id={item.id}
                        firstName={item.first_name}
                        lastName={item.last_name}
                        email={item.email}
                        phone={item.Phone}
                      />
                    )
                  })

                }

              </tbody>
            </table>
          </div>
        </section>

      </main>
    </>
  )
}

export default App
