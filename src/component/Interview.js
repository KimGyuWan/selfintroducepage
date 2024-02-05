import React, { useEffect } from 'react'
import './interview.scss'

function Interview(props) {

  const data = [
    {
      firp: "힘들었던 점1",
      secp: "해결점 1"
    },
    {
      firp: "힘들었던 점1",
      secp: "해결점 1"
    },
    {
      firp: "힘들었던 점1",
      secp: "해결점 1"
    },
    {
      firp: "힘들었던 점1",
      secp: "해결점 1"
    }
  ]

  useEffect(() => {
    document.querySelectorAll(".quest").forEach((el, idx) => {
      el.addEventListener("click", function () {
        console.log(idx)
        el.classList.toggle("act");
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
          {
            data.map((el, idx) => {
              return (
                <React.Fragment key={idx}>
                  <dt className='quest border-bottom d-flex justify-content-between py-3'>
                    <p>{el.firp}</p>
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </dt>
                  <dd className='answer'>
                    <p className='p-2'>{el.secp}</p>
                  </dd>
                </React.Fragment>
              )
            })
          }
        </dl>
      </section>
    </>
  )
}

export default Interview
