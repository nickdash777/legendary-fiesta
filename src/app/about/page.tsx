export default function AboutPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About GeorgiaCV</h1>

        <div className="prose prose-lg">
          <p>
            GeorgiaCV is a free CV builder designed specifically for the people
            of Georgia. Our mission is to help Georgian job seekers create
            professional, standout CVs that improve their chances of landing
            their dream jobs.
          </p>

          <h2>Our Story</h2>
          <p>
            GeorgiaCV was founded with a simple goal: to provide a completely
            free, high-quality CV creation tool for Georgian job seekers. We
            noticed that many CV builders charge fees or have limited free
            features, creating barriers for people in our community.
          </p>

          <h2>Why Choose GeorgiaCV?</h2>
          <ul>
            <li>
              <strong>100% Free:</strong> No hidden fees, no premium plans, no
              limitations.
            </li>
            <li>
              <strong>Made for Georgians:</strong> Templates and features
              designed with Georgian job market in mind.
            </li>
            <li>
              <strong>Modern CV Templates:</strong> Professional designs that
              help you stand out to employers.
            </li>
            <li>
              <strong>Easy to Use:</strong> Intuitive interface that makes
              creating a CV simple.
            </li>
            <li>
              <strong>Multilingual Support:</strong> Create your CV in Georgian
              or English.
            </li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? Wed love to hear from you!
            Email us at{" "}
            <a href="mailto:contact@georgiacv.com">contact@georgiacv.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
