import React, {useState, useEffect} from 'react'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
interface Props {
    currentPage : number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination:React.FC<Props> = (props) => {
    const numberPagePagination = 5
    const{currentPage, setCurrentPage} = props
    const [currentList, setCurrentList] = useState<number[]>(() => {
        const arr = []
        for (let i = 1; i <= numberPagePagination; i++){
            arr.push(i)
        }
        return arr
    })

    const handleArrowLeft = () => {
        if (currentList[0] != 1){
            setCurrentList((prev) => prev.map((page:number) => page-numberPagePagination))
        }
    }

    const handleArrowRight = () => {
        if (currentList[-1] != 100){
            setCurrentList((prev) => prev.map((page:number) => page+numberPagePagination))
        }
    }
    return (
        <div className='flex w-full justify-center gap-x-3 mt-5'>
            <div className="flex w-full justify-center gap-x-3">
                <div onClick={handleArrowLeft} className='cursor-pointer flex items-center'><FaArrowLeft color='white'/></div>
                {currentList.map((page:number) => {
                    return (
                        <div onClick={() => {setCurrentPage(page)}} className={`cursor-pointer rounded-lg w-8 text-lg text-center border-2 hover:scale-105 transition-transform ease-in-out ${currentPage == page ? "text-black bg-white border-white" : "text-white"}`}>{page}</div>
                    )
                })}
                <div onClick={handleArrowRight} className='cursor-pointer flex items-center'><FaArrowRight color='white'/></div>
            </div>
        </div>
    )
}
export default Pagination