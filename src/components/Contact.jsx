import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <>
      {/* ================= Contact Section ================= */}
      <section id="contact"  className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="transition-all duration-1000"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 ">
            Get In <span className="text-[#1CC3BA]">Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-[#F59F14] font-semibold mb-6">Let's work together</h3>
                <p className="text-[23px] text-[#94A3B8] leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg">
                   <FontAwesomeIcon
                   icon={faEnvelope}
                   className='h-6 w-6'
                   />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p >sheikhahmedali664@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg ">
                    <FontAwesomeIcon
                   icon={faPhone}
                   className='h-6 w-6'
                   />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p >+92-3198133614</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg  ">
                    <FontAwesomeIcon
                   icon={faMapPin}
                   className='h-6 w-6'
                   />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p >Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl h-full border-[1px] bg-[#0E1525] border-[#112C3A] transition-shadow duration-300">
              <div className="px-6 pt-6">
                <h3 className="text-xl font-semibold">Send me a message</h3>
              </div>
              <div className="p-6">
                <form  className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className='font-semibold'>
                      Your Name *
                    </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="mt-2 h-[53px] w-full rounded-md bg-[#1F283D] px-3 py-2 outline-none transition-all duration-200 focus:scale-[1.02]"
                      />
                    </div>
                    <div>
                      <label className='font-semibold'>
                      Your Email *
                    </label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="text-white mt-2 h-[53px] w-full rounded-md bg-[#1F283D] px-3 py-2 outline-none  transition-all duration-200 focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className='font-semibold'>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="text-white mt-2 h-[53px] w-full rounded-md bg-[#1F283D] px-3 py-2 outline-none  transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div >
                    <label className='font-semibold'>
                      Your Message *
                    </label>
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      className="text-white mt-2 w-full rounded-md bg-[#1F283D] px-3 py-2 outline-none  transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white w-full group bg-[#15f4e9] inline-flex items-center justify-center rounded-md  px-4 py-2 hover:opacity-90 hover:scale-105 transition"
                  >
                    {/* <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" /> */}
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Contact
