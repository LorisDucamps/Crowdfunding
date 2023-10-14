import clsx from "clsx";
function Card({ children, className }) {
    return (
        <section className={clsx('card', className)}>
            <div className='wrapper'>
                {children}
            </div>
        </section>
    )
}

export default Card;