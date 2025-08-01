import { useState } from "react";

export default function Form() {

   const[firstName, setfirstName] = useState('');
   const[lastName, setlastName] = useState('');
   const[handletitle, setnewTitle] = useState('');
   const [Email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const[school, setSchool] = useState('');
    const [studydate, setstudydate] = useState('');
    const [companyname, setcompanyname] = useState('');
    const[position, setposition] = useState('');
    const[response, setresponsibility] = useState('');
    const[datestart, setdatefrom] = useState('');
    const[dateto, setdateto] = useState('');
    //const fullName  = firstName + ' ' + lastName;
    const [submittedData, setSubmittedData] = useState(null);
    const [submitted, setSubmitted] = useState(false);
   

    function handleSubmit(e) {
      e.preventDefault();
      setSubmitted(true);
      setSubmittedData({
        firstName,
        lastName,
        handletitle,
        Email,
        phone,
        school,
        studydate,
        companyname,
        position,
        response,
        datestart,
        dateto,
        
      });
    }
    function handlefirstName (e){
        setfirstName(e.target.value);
    }

    function handlelastName(e){
        setlastName(e.target.value);
    }

     function handleclicktitle(e){
       setnewTitle(e.target.value);
    }

    function handleclickEmail(e){
        setEmail(e.target.value);
    }

    function handlephone(e){
        setPhone(e.target.value);
    }
    function handleClick(){
        setfirstName('')
        setlastName('')
        setEmail('')
        setPhone('')
        setnewTitle('')
        setSchool('')
        setstudydate('')
        setcompanyname('')
        setposition('')
        setresponsibility('')
        setdatefrom('')
        setdateto('')

    }



 function handleclickschool(e){
setSchool(e.target.value)
 }  

 function handlestudy(e){
    setstudydate(e.target.value);
 }

 function handleclickcompany(e)
 {
    setcompanyname(e.target.value);
 }

 function handleclickposition(e){
    setposition(e.target.value);
 }

 function handleclickresponsibility(e)
{
    setresponsibility(e.target.value);
}  

function handledatefrom(e){
    setdatefrom(e.target.value);
}

function handledateto(e){
    setdateto(e.target.value);
}

function handleedit(){
setSubmitted(false);
}


return (
  <div>
    <h1>Personal Information</h1>

    {!submitted && (
      <form onSubmit={handleSubmit}>
        
        <label>
          First Name
          <input type="text" value={firstName} onChange={handlefirstName} />
        </label>

        <label>
          Last Name
          <input type="text" value={lastName} onChange={handlelastName} />
        </label>

        <label>
          Email
          <input type="email" value={Email} onChange={handleclickEmail} />
        </label>

        <label>
          Phone Number
          <input type="text" value={phone} onChange={handlephone} />
        </label>

<section>
        <h1>Educational Experience</h1>
        <label>
          School name
          <input type="text" value={school} onChange={handleclickschool} />
        </label>
        <label>
          Title of study
          <input type="text" value={handletitle} onChange={handleclicktitle} />
        </label>
        <label>
          Date of study
          <input type="text" value={studydate} onChange={handlestudy} />
        </label>
        </section>
        
        <h1>Practical Experience</h1>
        <label>
          Company Name
          <input type="text" value={companyname} onChange={handleclickcompany} />
        </label>
        <label>
          Position Title
          <input type="text" value={position} onChange={handleclickposition} />
        </label>
        
          Responsibilities
          <textarea
          value={response} onChange={handleclickresponsibility} />
          
       
        <label>
          Start Date
          <input type="date" value={datestart} onChange={handledatefrom} />
        </label>
        <label>
          End Date
          <input type="date" value={dateto} onChange={handledateto} />
        </label>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleClick}>Clear</button>
      </form>
    )}

    {submittedData && submitted && (
      <div className="submitted-preview">
       
        <header>
        {/* Name: */}
        <p> {submittedData.firstName} {submittedData.lastName}</p>  
        {/* email: */}  
        <p>{submittedData.Email}</p>  
          {/* phone: */}
        <p>{submittedData.phone}</p>  
    </header>
    <section>
        <h3>Education</h3>
        {/*school */}
       <p> {submittedData.school}</p> 
        {/*title of study */}
        <p>{submittedData.handletitle}</p> 
        {/*study */}
        <p>  {submittedData.studydate}</p> 
         </section>
         <section>
        <h3>Work Experience</h3>
        {/* company*/}
     <p>{submittedData.companyname}</p>
        {/*position at company */}
        <p> {submittedData.position}</p>
        {/* responsibilities*/}
        <p>  {submittedData.response}</p>
        {/* date start*/}
        <p> {submittedData.datestart}</p>
        {/* date end*/}
        <p>  {submittedData.dateto}</p>
</section>
        <button onClick={handleedit}>Edit</button>
      </div>
    )}
  </div>
);

}