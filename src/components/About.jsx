import { useEffect, useRef } from 'react'

const aboutData = [
  {
    text: '"مطعم شامي بامتياز، نكهات سورية أصيلة في كل لقمة. أجواء دافئة، خدمة ممتازة، وأطباق شهية. جرب الشاورما والكبة والمشاوي اليوم!"',
    image: '/images/about1.jpg',
  },
  {
    text: '"تجربة طعام فريدة في مطعمنا الشامي. أطباق تقليدية بلمسة عصرية، خدمة سريعة ومميزة. اطلب الآن واستمتع بالنكهات الشامية الأصيلة!"',
    image: '/images/about2.jpg',
  },
  {
    text: '"مطعم شامي يأخذك إلى قلب دمشق. أجواء مريحة، أطباق شهية، وخدمة ممتازة. جرب الشاورما والكبة والمقبلات الشامية اليوم!"',
    image: '/images/about3.jpg',
  },
  {
    text: '"نكهات سورية أصيلة في كل لقمة. مطعمنا الشامي يقدم تجربة طعام فريدة. أجواء دافئة، خدمة ممتازة، وأطباق شهية. اطلب الآن!"',
    image: '/images/about8.jpg',
  },
  {
    text: '"مطعم شامي بامتياز، أطباق تقليدية بلمسة عصرية. أجواء مريحة، خدمة سريعة ومميزة. جرب الشاورما والكبة والمشاوي اليوم!"',
    image: '/images/about5.jpg',
  },
  {
    text: '"تجربة طعام شامية أصيلة في مطعمنا. أجواء دافئة، أطباق شهية، وخدمة ممتازة. اطلب الآن واستمتع بالنكهات الشامية الأصيلة!"',
    image: '/images/about7.jpg',
  },
]

function About() {
  const rowsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.2 }
    )

    rowsRef.current.forEach(row => {
      if (row) observer.observe(row)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-5 bg-light">
      <div className="container">


        {aboutData.map((item, index) => {
          const isReversed = index % 2 === 0

          return (
            <div
              key={index}
              ref={el => rowsRef.current[index] = el}
              className={`row align-items-center mb-5 ${
                isReversed ? 'flex-md-row-reverse fade-left' : 'fade-right'
              }`}
            >
              {/* النص */}
              <div className={`col-md-6 mb-3 mb-md-0 ${isReversed ? 'text-end' : 'text-start'}`}>
<p
  className="text-muted"
  style={{
    fontSize: '1.5rem',  // تكبير الخط (يمكنك رفع الرقم أكثر حسب الحاجة)
    lineHeight: '1.6',   // تحسين المسافة بين الأسطر
    fontFamily: "'Amiri', serif" // لو عايز الخط يكون فخم
  }}
>
  {item.text}
</p>

              </div>

              {/* الصورة */}
              <div className="col-md-6">
               <img
  src={item.image}
  alt="about"
  className="about-image shadow"
/>

              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default About
