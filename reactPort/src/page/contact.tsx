
interface FormFactorProps {
    namE: string;
    emaiL: string;
    messagE: string;
    setName: (value: string) => void;
    setEmail: (value: string) => void;
    setMessage: (value: string) => void;
}

 function formFactor({namE,emaiL,messagE, setName, setEmail, setMessage}: FormFactorProps){

    function handleSubmit(e: { preventDefault: () => void; }){
        e.preventDefault();
        console.log("Got your input ", {namE,emaiL,messagE})
    }


    return(
       <>
            <h1>Contact</h1>
            <form className="inputBox " onSubmit={handleSubmit}>
                
                    <label className="inputBoxName2" >Name:</label>
                    <input type="text" onChange={(b) => setName(b.target.value)}  className="inputRest" > 
                        
                    </input>
                    <label className="inputBoxName">Email Address:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="inputRest ">
                        
                    </input>
                    <label className="inputBoxName">Message:</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} className="inputMessage">
                         
                    </textarea>

              
                <button type="submit" className="submit">Submit</button>
            </form>
       </>
    )
}

export default formFactor;