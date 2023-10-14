import React, { useState } from 'react'
import Card from '../UI/Card/Card'

export default function Modal({ collections, onCloseModal, onUpdatePledge }) {

    const ModalList = ({ collections }) => {

        const [selected, setSelected] = useState(null)
        const [pledge, setPledge] = useState(0)

        function onSelect(id) {
            setSelected(id)
        }

        function handleSubmit(e) {
            e.preventDefault();

            if (!pledge) return;

            const updatePledge = pledge
            onUpdatePledge(updatePledge)

            // Change display modal to Success
        }

        return (
            <>
                {
                    collections.map((collection) => {
                        return (
                            <div key={collection.id}>
                                <div>
                                    <label>
                                        <input type="radio" name="collections" id={collection.title} value={collection.title} onChange={() => onSelect(collection.id)} />
                                        <h3>{collection.title}</h3>
                                    </label>
                                    <p>{collection.pledge}</p>
                                    <p>{collection.left}</p>
                                </div>
                                <p>{collection.description}</p>
                                {selected === collection.id &&
                                    <form onSubmit={handleSubmit}>
                                        <p>Enter your pledge</p>
                                        <input type="number" value={pledge} onChange={(e) => setPledge(e.target.value)} />
                                        <button>Continue</button>
                                    </form>
                                }
                            </div>
                        )
                    })
                }
            </>
        )
    }

    const ModalSuccess = () => {
        return (
            <p>ModalSuccess</p>
        )
    }
    return (
        <>
            <div className='modal'>
                <div className="modal-dialog">
                    <button onClick={() => onCloseModal(false)}>X</button>
                    <h2>Back this project</h2>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world ?</p>
                    <Card>
                        <ModalList collections={collections} />
                    </Card>
                </div>
            </div>
        </>
    )
}
