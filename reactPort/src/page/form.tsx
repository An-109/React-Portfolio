
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
            <form className=" " onSubmit={handleSubmit}>
                
                    <label className="" >Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}  className="block mb-2 text-sm border border-black dark:text-white" > 
                        
                    </input>
                    <label className="">Email Address:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="block border-black text-sm  w-full ">
                        
                    </input>
                    <label className="">Message:</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} className="">
                         
                    </textarea>

              
                <button type="submit" className="">Submit</button>
            </form>
       </>
    )
}