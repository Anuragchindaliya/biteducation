import Head from 'next/head'
import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Jumbotron from '../components/common/Jumbotron'

const contact = () => {
  return (
    <div className='site-section'>
      <Head>
        <title>Contact - Bit Education</title>
      </Head>
      <Jumbotron title='Contact Us' />
      <Breadcrumb currentPage='Contact' />
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3510.766986503295!2d77.27946611507659!3d28.365893532523735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdea61b63b8d7%3A0x2776491c66a69bff!2sBIT%20Computer%20Education%20And%20Service!5e0!3m2!1sen!2sin!4v1645361918884!5m2!1sen!2sin" width={"100%"} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
      );

      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0op7F5SA4JlsKrOAgyFEBKeca1PJ5Ft878rebX_S605dZng/viewform?embedded=true" width={"100%"} height="1000px" frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>

    </div>
  )
}

export default contact