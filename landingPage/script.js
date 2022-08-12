let draw = (tab) => {
  let row = document.querySelector(".row.p-3");
  row.innerHTML = `<${tab}><${tab}/>`;
  let navLinkItems = document.querySelectorAll(".nav-link");
  for (let item of navLinkItems) {
    item.classList.remove("active");
    item.addEventListener("click", () => {
      item.classList.add("active");
    });
  }
};

// HTML Components

class MyCV extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <div class="col-12 d-flex flex-column align-items-center p-3">
    <img
      src="https://media-exp1.licdn.com/dms/image/C4D03AQHZK4ypw9j1Ww/profile-displayphoto-shrink_800_800/0/1659557711287?e=1665619200&v=beta&t=GvZCZXKoTqRZJSoGgCXTg5w8rxPry_Prl4-d0tzLQrM"
      alt=""
      class="profile-pic"
    />
    <div class="h2 name">Adelin Farcas</div>
    <div class="location fw-light">Cluj-Napoca, Romania</div>
  </div>
  <div class="col-12 p-3 content">
    <div
      class="d-flex flex-row justify-content-between align-items-center px-3"
    >
      <div class="title fs-2 fw-light mb-3 bg-transparent">CV</div>
      <a
        href="https://downgit.github.io/#/home?url=https://github.com/adelinfarcas/plainJS/blob/main/Resume-Adelin-Farcas.pdf"
        target="_blank"
      >
        <button class="btn btn-outline-primary">
          <i class="bi bi-file-earmark-pdf"></i>
          Download a PDF copy (LinkedIn)
        </button>
      </a>
    </div>
    <div class="content fs-6 fw-light lh-lg">
      <div class="container p-0 bg-transparent">
        <div class="col-md">
          <div class="bg-transparent d-flex flex-column gap-3">
            <!-- Experience -->
            <div
              class="experience d-flex flex-column fs-3 fw-light bg-light bg-gradient border rounded p-3 gap-3"
            >
              <div class="cv-title">Experience</div>
              <div class="entry-0">
                <div class="container">
                  <div class="row mb-3">
                    <div class="cv-content fs-6 d-flex flex-row gap-3">
                      <div class="cv-img">
                        <img
                          src="https://media-exp1.licdn.com/dms/image/C560BAQHGQ38fS7XP3w/company-logo_100_100/0/1641197823411?e=1668038400&v=beta&t=DQlgR85S3vhjdKlntheKT3UWq5p1JT2gSnhQSBjy7Og"
                          alt=""
                          class="employer-img rounded"
                        />
                      </div>
                      <div
                        class="cv-details d-flex flex-column justify-content-center gap-0"
                      >
                        <div>Front-end web development trainee</div>
                        <div>Scoala Informala de IT</div>
                        <div>Feb 2022 - Jun 2022</div>
                        <div>Cluj-Napoca</div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="skillsList h6 fw-light">
                      <ul>
                        <li>
                          HTML5, and CSS3: building responsive User
                          Interfaces
                        </li>
                        <li>
                          JavaScript: use of variables, functions,
                          objects, scope, AJAX, DOM, ES6, JSON
                        </li>
                        <li>
                          HTTP: fundamentals about the protocol: methods,
                          headers, error codes
                        </li>
                        <li>
                          OOP: classes, objects and inheritance, ES6+ data
                          structures (Sets, Maps)
                        </li>
                        <li>
                          GIT: learned the principles and basic commands
                        </li>
                        <li>
                          REACT basics: render HTML, components, props,
                          state, lifecycle, events.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="separator gap-0"></div>
              <div class="entry-1">
                <div class="container">
                  <div class="row mb-3">
                    <div class="cv-content fs-6 d-flex flex-row gap-3">
                      <div class="cv-img">
                        <img
                          src="https://media-exp1.licdn.com/dms/image/C510BAQGpRhkpxp5A9A/company-logo_100_100/0/1561962168715?e=1668038400&v=beta&t=OKXJE6NszKUzSvkD-bUNgj4tXSyAGmUnKBCwYFBmDNw"
                          alt=""
                          class="employer-img rounded"
                        />
                      </div>
                      <div
                        class="cv-details d-flex flex-column justify-content-center gap-0"
                      >
                        <div>Junior Auditor</div>
                        <div>EY, Full-time</div>
                        <div>Sep 2021 - Apr 2022</div>
                        <div>Cluj-Napoca</div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="skillsList h6 fw-light">
                      <ul>
                        <li>
                          Verify accounting records for assigned portfolio
                          of clients
                        </li>
                        <li>
                          Verification of documents following legal
                          requirements
                        </li>
                        <li>
                          Performing key verification procedures based on
                          General Ledger & PnL Statement
                        </li>
                        <li>
                          Recording of the receipts received from
                          customers based on the bank statements
                        </li>
                        <li>Processing customer specific reports</li>
                        <li>Directly interact with clients</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="separator gap-0"></div>
              <div class="entry-1">
                <div class="container">
                  <div class="row mb-3">
                    <div class="cv-content fs-6 d-flex flex-row gap-3">
                      <div class="cv-img">
                        <img
                          src="https://media-exp1.licdn.com/dms/image/C4E0BAQEPTSR_H6hyEg/company-logo_100_100/0/1519896488308?e=1668643200&v=beta&t=mbZw8vnbSz6hsG8KiGJ8ZvaW1WQocUxVY3sCJyXt5fw"
                          alt=""
                          class="employer-img rounded"
                        />
                      </div>
                      <div
                        class="cv-details d-flex flex-column justify-content-center gap-0"
                      >
                        <div>Management Consultant</div>
                        <div>ABS Consulting SRL, Full-time</div>
                        <div>Jul 2020 - Feb 2021</div>
                        <div>Cluj-Napoca</div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="skillsList h6 fw-light">
                      <ul>
                        <li>
                          Identify suitable financing programs for
                          different economic entities
                        </li>
                        <li>
                          Prepare the required documentation for funding
                          applications
                        </li>
                        <li>
                          Elaborate realistic economic forecasts related
                          to the implementation of the approved projects
                        </li>
                        <li>
                          Determine and evaluate financial indicators
                        </li>
                        <li>
                          Preparation of progress reports, reimbursement
                          requests, as well as any other official
                          documents requested by the financier in regards
                          to the implementation of projects
                        </li>
                        <li>
                          Communication with the involved authorities in
                          the ongoing projects
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Education -->
            <div
              class="Education d-flex flex-column fs-3 fw-light bg-light bg-gradient border rounded p-3 gap-3"
            >
              <div class="cv-title">Education</div>
              <div class="entry-0">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div class="cv-img">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4E0BAQHhWslYddaNZQ/company-logo_100_100/0/1519901095295?e=1668038400&v=beta&t=UTS-5GpTYgRSKESFRkB3Qcza0ApU9ZueAE_b_fU6UVs"
                      alt=""
                      class="employee-img rounded"
                    />
                  </div>
                  <div
                    class="cv-details d-flex flex-column justify-content-center gap-0"
                  >
                    <div>
                      Universitatea „Babeș-Bolyai” din Cluj-Napoca
                    </div>
                    <div>
                      Master's degree, Accounting Management, Audit and
                      Control
                    </div>
                    <div>2019 - 2021</div>
                    <div>Cluj-Napoca</div>
                  </div>
                </div>
              </div>
              <div class="separator gap-0"></div>
              <div class="entry-1">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div class="cv-img">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4E0BAQHhWslYddaNZQ/company-logo_100_100/0/1519901095295?e=1668038400&v=beta&t=UTS-5GpTYgRSKESFRkB3Qcza0ApU9ZueAE_b_fU6UVs"
                      alt=""
                      class="employee-img rounded"
                    />
                  </div>
                  <div
                    class="cv-details d-flex flex-column justify-content-center gap-0"
                  >
                    <div>
                      Universitatea „Babeș-Bolyai” din Cluj-Napoca
                    </div>
                    <div>Bachelor's degree, Accounting</div>
                    <div>2016 - 2019</div>
                    <div>Cluj-Napoca</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Languages -->
            <div
              class="languages d-flex flex-column fs-3 fw-light bg-light bg-gradient border rounded p-3 gap-3"
            >
              <div class="cv-title">Languages</div>
              <div class="entry-0">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div>English</div>
                </div>
                <div class="separator gap-0"></div>
                <div class="entry-1">
                  <div class="cv-content fs-6 d-flex flex-row gap-3">
                    <div>Romanian</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Skills -->
            <div
              class="Skills d-flex flex-column fs-3 fw-light bg-light bg-gradient border rounded p-3 gap-3"
            >
              <div class="cv-title">Skills</div>
              <div class="entry-0">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div class="cv-img">
                    <i class="bi bi-filetype-html fs-1"></i>
                  </div>
                  <div
                    class="cv-details d-flex flex-column justify-content-center gap-0"
                  >
                    <div>HTML</div>
                  </div>
                </div>
              </div>
              <div class="separator gap-0"></div>
              <div class="entry-1">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div class="cv-img">
                    <i class="bi bi-filetype-js fs-1"></i>
                  </div>
                  <div
                    class="cv-details d-flex flex-column justify-content-center gap-0"
                  >
                    <div>JavaScript</div>
                  </div>
                </div>
              </div>
              <div class="separator gap-0"></div>
              <div class="entry-2">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div class="cv-img">
                    <i class="bi bi-filetype-css fs-1"></i>
                  </div>
                  <div
                    class="cv-details d-flex flex-column justify-content-center gap-0"
                  >
                    <div>CSS</div>
                  </div>
                </div>
              </div>
              <div class="separator gap-0"></div>
              <div class="entry-3">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div class="cv-img">
                    <i class="bi bi-github fs-1"></i>
                  </div>
                  <div
                    class="cv-details d-flex flex-column justify-content-center gap-0"
                  >
                    <div>Github</div>
                  </div>
                </div>
              </div>
              <div class="separator gap-0"></div>
              <div class="entry-4">
                <div class="cv-content fs-6 d-flex flex-row p-0">
                  <ul class="d-flex justify-content-start p-0">
                    <li>&#8226 Web Applications</li>
                    <li>&#8226 User Experience (UX)</li>
                    <li>&#8226 User Interface Design</li>
                    <li>&#8226 AJAX</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }
}
customElements.define("my-cv", MyCV);

class MyProjects extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="col-12 d-flex flex-column align-items-center p-3">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHZK4ypw9j1Ww/profile-displayphoto-shrink_800_800/0/1659557711287?e=1665619200&v=beta&t=GvZCZXKoTqRZJSoGgCXTg5w8rxPry_Prl4-d0tzLQrM"
          alt=""
          class="profile-pic"
        />
        <div class="h2 name">Adelin Farcas</div>
        <div class="location fw-light">Cluj-Napoca, Romania</div>
      </div>
      <div class="col-12 p-3 content">
        <div class="title fs-2 fw-light mb-3 bg-transparent">Projects</div>
        <div class="content fs-6 fw-light lh-lg">
          <div class="container p-0 bg-transparent">
            <div class="row p-3">
              <div
                class="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-between project-card"
              >
                <img
                  src="img/webstore.png"
                  class="project-img rounded"
                  alt=""
                />
                <div class="fs-3 fw-lighter">Outdoors Webstore</div>
                <div class="btns d-flex justify-content-between gap-5 mb-5">
                  <a
                    href="https://github.com/adelinfarcas/plainJS/tree/main/webstore/main"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      <i class="bi bi-github"></i>
                      Github
                    </button>
                  </a>
                  <a
                    href="https://adelinfarcas.github.io/plainJS/webstore/main/index.html"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-primary">
                      <i class="bi bi-display"></i>
                      Render
                    </button>
                  </a>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-between project-card"
              >
                <img
                  src="img/weatherApp.png"
                  class="project-img rounded"
                  alt=""
                />
                <div class="fs-3 fw-lighter">Weather App</div>
                <div class="btns d-flex justify-content-between gap-5 mb-5">
                  <a
                    href="https://github.com/adelinfarcas/plainJS/tree/main/weatherApp"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      <i class="bi bi-github"></i>
                      Github
                    </button>
                  </a>
                  <a
                    href="https://adelinfarcas.github.io/plainJS/weatherApp/index.html"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-primary">
                      <i class="bi bi-display"></i>
                      Render
                    </button>
                  </a>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-between project-card"
              >
                <img
                  src="img/phonebookApp.png"
                  class="project-img rounded"
                  alt=""
                />
                <div class="fs-3 fw-lighter">Phonebook App</div>
                <div class="btns d-flex justify-content-between gap-5 mb-5">
                  <a
                    href="https://github.com/adelinfarcas/plainJS/tree/main/phonebook"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      <i class="bi bi-github"></i>
                      Github
                    </button>
                  </a>
                  <a
                    href="https://adelinfarcas.github.io/plainJS/phonebook/index.html"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-primary">
                      <i class="bi bi-display"></i>
                      Render
                    </button>
                  </a>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-between project-card"
              >
                <img
                  src="img/shoppingList.png"
                  class="project-img rounded"
                  alt=""
                />
                <div class="fs-3 fw-lighter">Shopping List</div>
                <div class="btns d-flex justify-content-between gap-5 mb-5">
                  <a
                    href="https://github.com/adelinfarcas/plainJS/tree/main/shoppingList"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-dark">
                      <i class="bi bi-github"></i>
                      Github
                    </button>
                  </a>
                  <a
                    href="https://adelinfarcas.github.io/plainJS/shoppingList/index.html"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-outline-primary">
                      <i class="bi bi-display"></i>
                      Render
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}
customElements.define("my-projects", MyProjects);

class AboutMe extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="col-12 d-flex flex-column align-items-center p-3">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHZK4ypw9j1Ww/profile-displayphoto-shrink_800_800/0/1659557711287?e=1665619200&v=beta&t=GvZCZXKoTqRZJSoGgCXTg5w8rxPry_Prl4-d0tzLQrM"
          alt=""
          class="profile-pic"
        />
        <div class="h2 name">Adelin Farcas</div>
        <div class="location fw-light">Cluj-Napoca, Romania</div>
      </div>
      <div class="col-12 p-3 content">
        <div class="title fs-2 fw-light mb-3 bg-transparent">About me</div>
        <div class="content fs-6 fw-light lh-lg">
          <div class="container p-0 bg-transparent">
            <div class="row p-3 gap-3">
              <div>
                I have been passionate about technologies and web development
                since my time as a Bachelor’s degree student, when I was
                building presentation and e-commerce Wordpress websites for
                friends. I knew then that this is what I want to prusue next
                in my career so I decided to focus more in this area. I
                began learning HTML and CSS on my own and then started to
                create simple UI’s and website designs for practice.
              </div>
              <div>
                After I gained a solid knowledge of HTML and CSS I decided to
                attend a Web Development course at “Scoala Informala de IT”,
                with an primary focus on Javascript, OOP and React.js basics.
              </div>
              <div>
                I am drawn to making easy to use, user-friendly websites and
                web applications and I never run out of inspiration for new
                projects.
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}
customElements.define("about-me", AboutMe);

class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="col-12 d-flex flex-column align-items-center p-3">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHZK4ypw9j1Ww/profile-displayphoto-shrink_800_800/0/1659557711287?e=1665619200&v=beta&t=GvZCZXKoTqRZJSoGgCXTg5w8rxPry_Prl4-d0tzLQrM"
          alt=""
          class="profile-pic"
        />
        <div class="h2 name">Adelin Farcas</div>
        <div class="location fw-light">Cluj-Napoca, Romania</div>
      </div>
      <div class="col-12 p-3 content">
        <div class="title fs-2 fw-light mb-3 bg-transparent">Contact</div>
        <div class="content fs-6 fw-light lh-lg">
          <div class="container p-0 bg-transparent">
            <div class="row flex-row gap-3">
              <div
                class="col-md-5 d-flex justify-content-center justify-content-md-start align-items-center px-5"
              >
                <i class="bi bi-envelope-paper display-1"></i>
              </div>
              <div class="col-md-6 d-flex gap-3 flex-column">
                <div
                  class="btns d-flex flex-row align-items-center justify-content-between px-5"
                >
                  <a
                    href="https://github.com/adelinfarcas/plainJS"
                    class="link-dark link"
                    target="_blank"
                  >
                    <div
                      class="github d-flex flex-row align-items-center gap-3"
                    >
                      <i class="bi bi-github fs-1"> </i>
                      <div class="fs-4 fw-lighter align-middle">Github</div>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adelin-farcas"
                    target="_blank"
                    class="link"
                  >
                    <div
                      class="linkedIn d-flex flex-row align-items-center gap-3"
                    >
                      <i class="bi bi-linkedin fs-1 text-primary"></i>
                      <div class="fs-4 fw-lighter align-middle">LinkedIn</div>
                    </div>
                  </a>
                </div>
                <div
                  class="tel d-flex flex-row align-items-center justify-content-between px-5"
                >
                  <i class="bi bi-telephone fs-1"></i>

                  <a href="tel:+40758709052" class="link-dark link fs-4 fw-lighter"
                    >+40 758 709 052</a
                  >
                </div>
                <div
                  class="tel d-flex flex-row align-items-center justify-content-between px-5"
                >
                  <i class="bi bi-envelope fs-1"></i>
                  <a href="mailto:fvadelin@gmail.com" class="link-dark link fs-4 fw-lighter"
                    >fvadelin@gmail.com</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define("contact-me", Contact);
