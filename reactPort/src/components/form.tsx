
interface FormFactorProps {
    namE: string;
    emaiL: string;
    messagE: string;
    setName: (value: string) => void;
    setEmail: (value: string) => void;
    setMessage: (value: string) => void;
}

export default function formFactor({namE,emaiL,messagE, setName, setEmail, setMessage}: FormFactorProps){

    function handleSubmit(e: { preventDefault: () => void; }){
        e.preventDefault();
        console.log("Got your input ", {namE,emaiL,messagE})
    }


    return(
       <>
            <form className="flex flex-col relative object-left-bottom bg-red-200 " onSubmit={handleSubmit}>
                
                    <label className="block mb-2 text-sm text-gray-50 dark:text-white" >Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}  className="block mb-2 text-sm text-gray-50 dark:text-white" > 
                        
                    </input>
                    <label className="block mb-2 text-sm text-gray-50 dark:text-white">Email Address:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="block border-black text-sm  w-full ">
                        
                    </input>
                    <label className="block mb-2 text-sm text-gray-50 dark:text-white">Message:</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} className="block border-black text-sm  w-full h-32 ">
                         
                    </textarea>

              
                <button type="submit" className="block rounded-md text-center p-2 text-sm shadow-sm font-serif mt-2 mb-2">Submit</button>
            </form>
       </>
    )
}