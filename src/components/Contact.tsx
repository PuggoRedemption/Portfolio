// Contact Form
export default function Contact() {
    return (
        <div className="contact-form">
            <h1>Email Me</h1>
            <h3>Full Name</h3>
            <input type="text" name="Full Name" required></input>
            <h3>Email</h3>
            <input type="email" name="email" required></input>
            <h3>Message</h3>
            <textarea rows={5} cols={60} name="message" autoComplete="off" required></textarea>
            <button type="submit">Send Message</button>
        </div>
    );
}