
export default function App() {
  const SUBMIT_URL ='https://www.greatfrontend.com/api/questions/contact-form';
  
  const submitForm = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    console.log(formData.get('message'))
   
    try{
      const response = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),

       
      });
       const text = await response.text();
          alert(text);
    }catch(error){

    }
  }
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}>
      <label>Enter your name:
        <input type="text" name="name"/>
      </label>
      <br/>
      <label>Enter your Email:
      <input type="text" name="email"/>
       </label>
      <br/>
     <label>Enter your Message:
       <textarea
          id="message-input"
          name="message"></textarea>
       </label>      
       <br/>
       <button type="submit">
        SEND
      </button>

    </form>
  );
}
