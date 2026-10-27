import Header from '@/components/Header';
import RoleCycle from '@/components/RoleCycle';
import ContactForm from '@/components/ContactForm';
import ExpandableItem from '@/components/ExpandableItem';
import { projects } from '@/data/projects';
import { profile, jobs, education, skills } from '@/data/profile';

export default function Home() {
  return (
    <>
      <Header name={profile.name.join(' ')} />

      <main id="top" className="wrap">
        <section className="hero">
          <h1 className="hero-name">{profile.name.join(' ')}</h1>
          <RoleCycle roles={profile.roles} />
          <p className="hero-about">{profile.about}</p>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <ul className="list">
            {projects.map((p, i) => (
              <ExpandableItem key={p.title} title={p.title} defaultOpen={i === 0}>
                <p className="item-text">{p.summary}</p>
                {p.why && (
                  <p className="item-text">
                    <strong>Why I built it:</strong> {p.why}
                  </p>
                )}
                {p.learned && (
                  <p className="item-text">
                    <strong>What I learned:</strong> {p.learned}
                  </p>
                )}
                {p.stack && <p className="item-meta">{p.stack.join(', ')}</p>}
                {(p.live || p.github) && (
                  <div className="item-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Live site
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </ExpandableItem>
            ))}
          </ul>
        </section>

        <section id="work" className="section">
          <h2 className="section-title">Work</h2>
          <div className="work-layout">
            <ul className="list">
              {jobs.map((job) => (
                <ExpandableItem
                  key={job.company}
                  title={`${job.role}, ${job.company}`}
                  meta={job.period}
                  small
                >
                  <p className="item-text">{job.description}</p>
                </ExpandableItem>
              ))}
            </ul>
            <figure className="reel">
              <video src="/reel.mp4" poster="/reel-poster.jpg" autoPlay muted loop playsInline />
              <figcaption>Art direction for Marshall and Sneakersnstuff.</figcaption>
            </figure>
          </div>
        </section>

        <section id="education" className="section">
          <h2 className="section-title">Education</h2>
          <ul className="list">
            {education.map((e) => (
              <li key={e.degree} className="item">
                <div className="item-head">
                  <h3 className="item-title small">
                    {e.degree}, {e.school}
                  </h3>
                  <p className="item-meta">{e.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="list">
            {skills.map((group) => (
              <li key={group.group} className="item skill-row">
                <h3 className="skill-group">{group.group}</h3>
                <p className="item-text">{group.items.join(', ')}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <div className="contact">
            <ul className="contact-list">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={profile.phone.href}>{profile.phone.display}</a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
            <ContactForm email={profile.email} />
          </div>
        </section>
      </main>

      <footer className="wrap site-footer">
        <p>Looking forward to meet you!</p>
      </footer>
    </>
  );
}
