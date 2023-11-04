import clsx from "clsx";
function Card({ children, className }) {
    return (
        <section className='relative bg-white border border-custom rounded-lg'>
            <div className={clsx('px-6 py-10 sm:p-12', className)}>
                {children}
            </div>
        </section>
    )
}

export default Card;