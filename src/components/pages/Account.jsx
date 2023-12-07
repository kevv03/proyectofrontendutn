import React from 'react'
import PostForm from '../PostForm'
import UpdateForm from '../UpdateForm'

function Account({id}) {
    return (
        <>
            <main>
                <section className="content">
                    <h1>Bienvenido al panel de control de su cuenta</h1>
                    <div>
                        <PostForm />
                    </div>
                    <div>
                        <UpdateForm />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Account
