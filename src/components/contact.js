import React from "react";

function Contact() {
    return (

		<section id={"contact"} className={"contact"}>
			<div lang={"en"} className={"content"}>
				
				<h4>{"Contact me"}</h4>

				<form acceptCharset={"UTF-8"} action={"https://getform.io/f/f7915c6f-f483-490f-9fcf-d99a179aab31"} method="POST" encType="multipart/form-data" target="_blank" id="ajaxForm">

					<div className={"field"}>
							<label className={"labelname is-size-3"}>{"Name"}</label>
							<div className={"control"}>
							<input className={"input mb-2"} name="name" type="text" placeholder="e.g John Doe" />
							</div>

							<label className={"labelname is-size-3"}>{"Email"}</label>
							<div className={"control"}>
							<input className={"input mb-2"} name="email" type="email" placeholder="e.g. johndoe@gmail.com" />
							</div>

						    <label className={"labelname is-size-3"}>{"Message"}</label>
							<div className={"control"}>
								<textarea className={"textarea"} name="message" placeholder={"Leave me your message here"}></textarea>					
							</div>
					</div>
						
				
					<button className={"mt-5"} type="submit"><p>{"Send"}</p></button>
					</form>

		

			</div>
		</section>


    );
}

export default Contact;