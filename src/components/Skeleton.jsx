import Skeleton from 'react-loading-skeleton'

export const SkeletonPage = () => {
    return (
        <div className="border rounded px-5 py-7 mb-4">
            <div className="text-2xl font-medium mb-4">{<Skeleton />}</div>
            <p className="text-lg mb-4 break-words">{<Skeleton count={3} />}</p>
            <p className="flex justify-between items-center flex-wrap">
                <span className="bg-gray-200 rounded p-2">{<Skeleton width="75px" />}</span>
            </p>
        </div>
    )
}
