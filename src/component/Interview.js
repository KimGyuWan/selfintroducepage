import React, { useEffect } from 'react'
import './interview.scss'

function Interview(props) {
  useEffect(() => {
    document.querySelectorAll(".quest").forEach((el) => {
      el.addEventListener("click", function () {
        el.classList.toggle("act")
      })
    })

  }, [])
  return (
    <>
      <section id={props.idname} className='mx-3 d-lg-flex'>
        <div className='col-lg-2'>
          <h2 className='mb-5'>사전인터뷰</h2>
          <i className="bi bi-arrow-right d-none d-lg-block"></i>
        </div>
        <dl className='col-lg-10'>
          <dt className='quest border-bottom d-flex justify-content-between py-3'>
            <p>힘들었던 점1</p>
            <i class="bi bi-arrow-right-circle-fill"></i>
          </dt>
          <dd className='answer'>
            <p className='p-2'>해결점 1</p>
          </dd>
          <dt className='quest border-bottom d-flex justify-content-between py-3'>
            <p>힘들었던 점1</p>
            <i class="bi bi-arrow-right-circle-fill"></i>
          </dt>
          <dd className='answer'>
            <p className='p-2'>해결점 1</p>
          </dd>
          <dt className='quest border-bottom d-flex justify-content-between py-3'>
            <p>힘들었던 점1</p>
            <i class="bi bi-arrow-right-circle-fill"></i>
          </dt>
          <dd className='answer'>
            <p className='p-2'>해결점 1</p>
          </dd>
          <dt className='quest border-bottom d-flex justify-content-between py-3'>
            <p>힘들었던 점1</p>
            <i class="bi bi-arrow-right-circle-fill"></i>
          </dt>
          <dd className='answer'>
            <p className='p-2'>해결점 1</p>
          </dd>
        </dl>
      </section>
    </>
  )
}

export default Interview
