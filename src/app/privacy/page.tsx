export default function PrivacyPolicy() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">კონფიდენციალურობის პოლიტიკა</h1>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. ინფორმაციის შეგროვება
          </h2>
          <p>
            ჩვენ ვაგროვებთ ინფორმაციას, რომელსაც თქვენ გაწვდით პირდაპირ ჩვენს
            სერვისებთან ინტერაქციისას. ეს მოიცავს:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>სახელი და გვარი</li>
            <li>ელ-ფოსტის მისამართი</li>
            <li>CV-ს ინფორმაცია</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. ინფორმაციის გამოყენება
          </h2>
          <p>ჩვენ ვიყენებთ თქვენს ინფორმაციას შემდეგი მიზნებისთვის:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>CV-ს შექმნა და რედაქტირება</li>
            <li>სერვისის გაუმჯობესება</li>
            <li>თქვენთან კომუნიკაცია</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. ინფორმაციის დაცვა</h2>
          <p>
            ჩვენ ვიყენებთ ინდუსტრიის სტანდარტებს შესაბამის უსაფრთხოების ზომებს
            თქვენი ინფორმაციის დასაცავად.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. კონტაქტი</h2>
          <p>
            თუ გაქვთ კითხვები ჩვენს კონფიდენციალურობის პოლიტიკასთან
            დაკავშირებით, გთხოვთ დაგვიკავშირდით:
          </p>
          <p className="mt-2">Email: privacy@georgiacv.com</p>
        </section>
      </div>
    </div>
  );
}
