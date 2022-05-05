import React from "react"
import { ErrorMessage, Form, Formik, Field } from "formik"

export default function Appointment(props) {
    return (
        <main>
            <title>Appointment</title>

            <div className="bg-black m-auto flex justify-center m-4 rounded">
                <div className="m-auto w-2/3 text-center p-4 rounded">
                    <h1 className="emphasize-text text-white font-serif text-3xl">Book an Appointment</h1>
                    <Formik initialValues={{
                        name: ''
                    }} onSubmit={(values, { setSubmitting }) => { setSubmitting(false) }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="flex flex-col items-start py-2">
                                    <label className="text-white text-sm" htmlFor="name">Full Name</label>
                                    <Field type="text" name="name" autocomplete="name" />
                                </div>
                                <div className="flex flex-col items-start py-2">
                                    <label className="text-white text-sm" htmlFor="name">Full Name</label>
                                    <Field type="text" name="name" autocomplete="name" />
                                </div>
                                <button className="bg-lblue p-3 text-white font-serif rounded hover:bg-blue" type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </main>
    )
}