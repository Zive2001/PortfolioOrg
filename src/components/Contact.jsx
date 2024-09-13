// src/components/Contact.jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl mb-8">Contact Me</h2>
      <form
        action="https://formsubmit.co/supunseneviratne@gmail.com"
        method="POST"
        className="max-w-lg mx-auto"
      >
        <input
          type="hidden"
          name="_subject"
          value="New message from portfolio website"
        />
        <div className="mb-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 text-black rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 text-black rounded-lg"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full px-4 py-2 text-black rounded-lg"
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-8">
        <a
          href="/assets/Supun-Resume.pdf"
          download
          className="bg-gray-700 px-6 py-2 rounded-lg"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
}
