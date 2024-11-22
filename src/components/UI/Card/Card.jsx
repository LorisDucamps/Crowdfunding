import clsx from "clsx";
function Card({ children, className, extraClassName }) {
    return (
        <section className={clsx('relative bg-white border border-black/[.05] rounded-lg', extraClassName)}>
            <div className={clsx('px-6 py-10 sm:p-12', className)}>
                {children}
            </div>
        </section>
    )
}

export default Card;