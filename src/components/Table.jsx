import React from 'react'

export default function Table({ id, firstName, lastName, email, phone}) {
    return (
        <>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {id}
                    </th>
                    <td className="px-6 py-4">
                        {firstName}
                    </td>
                    <td className="px-6 py-4">
                        {lastName}
                    </td>
                    <td className="px-6 py-4">
                        {email}
                    </td>
                    <td className="px-6 py-4">
                        {phone}
                    </td>
                </tr>
        </>
    )
}
