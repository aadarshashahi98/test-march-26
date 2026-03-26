function Form() {

    const handleSubmit = () => {
        const newData = {
        name: name,
        email: email,
        phone: phone,
        message: message
        }
    }

    return(
        <>
            <div>
                <form className='m-10 flex flex-col gap-5' onSubmit={handleSubmit}>
                    <h1 className='text-xl font-bolc'>Contact Form</h1>
                    <div>
                    <lable>Name</lable><br/>
                    <input className='border border-gray-300 px-4 py-2 w-200' type="text" name="name" value={name} onChange={(e) => e.target.value} placeholder="Enter your name"/>
                    </div>
                    <div className='flex w-200 gap-2'>
                    <div>
                        <lable>Email</lable><br/>
                        <input className='border border-gray-300 px-4 py-2 w-99' type="email" name="email" value={email} onChange={(e) => e.target.value} placeholder="Enter your name"/>
                    </div>
                    <div>
                        <label>Phone number</label><br/>
                        <input className='border border-gray-300 px-4 py-2 w-99' type="text" name="phone" value={phone} onChange={(e) => e.target.value} placeholder="Enter your phone number"/>
                    </div>
                    </div>
                    <div>
                    <label>Message</label><br/>
                    <textarea className='border border-gray-300 px-4 py-2 w-200 h-50' name="message" value={message} onChange={(e) => e.target.value} placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                    <button class="px-4 py-2 bg-blue-300 rounded-lg text-white font-semibold" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Form